

// src/constants/qa.ts
import { companyData } from "./companyData";

export const qaList = [
  {
    key: "회사위치",
    patterns: ["위치", "주소", "찾아가", "오시는길"],
    response: `${companyData.name} 주소는 ${companyData.address} 입니다.`,
  },
  {
    key: "지번주소",
    patterns: ["지번"],
    response: companyData.jibun,
  },
  {
    key: "지하철",
    patterns: ["지하철", "역"],
    response: companyData.subway,
  },
  {
    key: "버스",
    patterns: ["버스", "노선"],
    response: companyData.bus,
  },
  {
    key: "주차",
    patterns: ["주차"],
    response: companyData.parking,
  },
  {
    key: "운영시간",
    patterns: ["운영시간", "영업시간", "몇시"],
    response: companyData.hours,
  },
  {
    key: "연락처",
    patterns: ["연락처", "전화", "번호", "이메일"],
    response: `전화: ${companyData.phone}, 이메일: ${companyData.email}`,
  },
  {
    key: "상담무료",
    patterns: ["상담", "무료", "현장방문"],
    response:
      "기본 상담과 현장 방문은 모두 무료로 제공됩니다. 현장을 확인 후 방향성을 제안드립니다.",
  },
  {
    key: "대표",
    patterns: ["대표", "사장", "ceo"],
    response: "대표자 정보는 공개하지 않았습니다.",
  },
  // ------------------- FAQ -------------------
  {
    key: "faq-건축종류",
    patterns: ["어떤건축", "종류", "철골", "목조", "상가", "인테리어"],
    response:
      "이담건축은 철골 구조, 목조 주택, 상가, 판넬 시공, 내부 인테리어 등 다양한 건축 경험을 바탕으로 주거용과 상업용 건축을 모두 진행합니다. 규모와 용도에 맞는 최적의 방식으로 시공을 제안드립니다.",
  },
  {
    key: "faq-시공지역",
    patterns: ["시공지역", "가능한지역", "어디까지"],
    response:
      "이담건축은 동두천을 기반으로 경기 북부 지역을 중심으로 시공을 진행하고 있습니다. 전국 시공은 원칙적으로 하지 않으며, 지역 밀착형 시공을 통해 세심하고 책임감 있는 관리에 집중합니다.",
  },
  {
    key: "faq-상담무료",
    patterns: ["상담무료", "현장방문무료"],
    response:
      "네, 기본 상담과 현장 방문은 모두 무료로 제공됩니다. 현장을 직접 확인 후 방향성을 제안드리기 때문에 초기 단계부터 신뢰할 수 있는 건축 계획을 세워 나가실 수 있습니다.",
  },
  {
    key: "faq-견적",
    patterns: ["견적", "비용", "산출"],
    response:
      "건축 규모, 자재 선택, 시공 방식, 현장 조건 등을 종합적으로 고려하여 산출됩니다. 초기 상담 시 예상 견적을 안내드리며, 세부 사항 조율 후 최종 견적을 확정합니다.",
  },
  {
    key: "faq-리모델링",
    patterns: ["리모델링", "신축", "소규모"],
    response:
      "소규모 리모델링부터 신축까지 모두 가능합니다. 작은 공간 개선부터 대규모 건축까지, 고객의 필요에 맞게 유연하게 진행합니다.",
  },
  {
    key: "faq-설계",
    patterns: ["설계", "도면"],
    response:
      "고객이 도면을 가지고 계시다면 그대로 시공이 가능하며, 도면이 없을 경우 저희가 신뢰할 수 있는 설계업체를 연결해 드리고 있습니다. 설계부터 시공까지 원활하게 이어질 수 있도록 지원합니다.",
  },
];
