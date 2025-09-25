"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { sendChatMessage } from "@/api/create-chat.action";
import chatbot from "@/assets/chatbot.svg";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useClickOutside, useScrollVisibility } from "@/hooks";
import dot from "@/components/animations/dot.json"
import Lottie from "lottie-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "안녕하세요! 이담 건축 도우미입니다. 무엇을 도와드릴까요? 예: '새로운 상담을 받고 싶어요', '이담 건축은 어디에 위치하고 있나요?'",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatRef = useRef<HTMLDivElement>(null);

  const buttonRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollVisibility(50);

  useEffect(() => {
  if (!isVisible && isOpen) {
    // 모달이 열려 있으면 버튼은 유지, 모달만 닫기
    setIsOpen(false);
  }
}, [isVisible]); 

  useClickOutside(chatRef, (event: MouseEvent) => {
    if (buttonRef.current?.contains(event.target as Node)) return;
    setIsOpen(false);
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    setIsLoading(true);

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);

    try {
      const result = await sendChatMessage(newMessages);

      if (result.success && result.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: result.message! },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              result.error || "죄송합니다. 일시적인 오류가 발생했습니다.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "죄송합니다. 일시적인 오류가 발생했습니다. 다시 시도해 주세요.",
        },
      ]);
    } finally {
      setIsLoading(false);
        setTimeout(() => inputRef.current?.focus(), 50);


    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* 챗봇 버튼 */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={buttonRef}
            key="chatbot-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 bottom-4 z-40"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="shadow-soft flex size-14 items-center justify-center rounded-full bg-black p-1"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src={chatbot} alt="chatbot" className="size-8" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 채팅 창 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            key="chatbot-window"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="
              fixed bottom-20 z-40 h-[60vh] bg-white rounded-lg shadow-2xl 
              border border-line-black-10 flex flex-col
              left-4 right-4
              md:left-auto md:right-4 md:max-w-100 md:w-full
            "
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between p-4 bg-black text-white rounded-t-lg">
              <div className="flex items-center gap-1">
                <div className="size-5 flex justify-center items-center">
                  <Lottie animationData={dot} loop={true} autoplay={true}/>
                </div>
                <span className="text-16-medium">이담 건축 AI 도우미</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <IoCloseSharp size={25} />
              </button>
            </div>

            {/* 메시지 영역 */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-8/10 p-3 rounded-lg text-14-regular ${
                      message.role === "user"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* 로딩 표시 */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 입력 영역 */}
            <div className="p-4 border-t border-line-black-10">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="궁금하신 내용을 입력해 주세요"
                  className="flex-1 p-2 border border-line-black-10 rounded-lg text-14-regular focus:outline-none focus:border-black"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-black text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <IoIosSend size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
