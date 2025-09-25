// src/lib/api/sendChatMessage.ts
"use server";

import { companyData, qaList,  } from "@/constants";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface SendChatMessageResult {
  success: boolean;
  message: string | null;
  error?: string;
}

// 패턴 매칭
function findQuickAnswer(userMessage: string): string | null {
  const message = userMessage.toLowerCase().replace(/\s/g, "");
  for (const item of qaList) {
    const isMatch = item.patterns.some((pattern) =>
      message.includes(pattern.toLowerCase())
    );
    if (isMatch) return item.response;
  }
  return null;
}

// 메인 함수
export async function sendChatMessage(
  messages: Message[]
): Promise<SendChatMessageResult> {
  try {
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // 1단계: FAQ 우선
    const quickAnswer = findQuickAnswer(lastUserMessage);
    if (quickAnswer) {
      return { success: true, message: quickAnswer };
    }

    // 2단계: GPT 호출
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
당신은 ${companyData.name}의 전문 건축 상담사입니다.

규칙:
- 반드시 companyData를 최우선으로 활용하세요.
- 위치/주소/오시는길 질문은 반드시 다음 데이터를 사용해 답하세요:
  • 도로명 주소: ${companyData.address}
  • 지번 주소: ${companyData.jibun}
  • 지하철: ${companyData.subway}
  • 버스: ${companyData.bus}
  • 주차: ${companyData.parking}
- 그 외의 질문은 먼저 ${qaList}를 참고해서 대답하세요.
- 대표, 설립 연도, 내부 인원 등 공개하지 않은 정보는 "공개하지 않았습니다."라고만 답하세요.
- FAQ에 없는 질문은 건축 전문가답게 설명하되, 모르는 것은 절대 지어내지 말고 "정확한 정보는 상담 시 안내드립니다."라고 답하세요.
- 불필요한 이모티콘은 사용하지 마세요.
            `,
          },
          ...messages,
        ],
        max_tokens: 700,
        temperature: 0.4,
      }),
    });

    if (!response.ok) throw new Error(`OpenAI API error: ${response.status}`);

    const data = await response.json();
    let aiMessage = data.choices[0].message.content;

    if (!aiMessage.includes(companyData.phone) && aiMessage.length < 200) {
      aiMessage += `\n\n더 자세한 상담은 ${companyData.phone} 으로 문의해주세요.`;
    }

    return { success: true, message: aiMessage };
  } catch (error) {
    console.error("sendChatMessage Error:", error);
    return {
      success: false,
      message: null,
      error: `상담 서비스에 문제가 발생했습니다.\n전화: ${companyData.phone}\n운영시간: ${companyData.hours}`,
    };
  }
}
