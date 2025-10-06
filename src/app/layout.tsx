import type { Metadata } from "next";
import { Black_Han_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { NotificationProvider } from "@/context/NotificationContext";
import ChatBot from "@/components/common/ChatBot";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
});

const blackHanSans = Black_Han_Sans({
   weight: "400",
   subsets: ["latin"],
   variable: "--font-black-han-sans",
});

export const metadata: Metadata = {
   title: "이담 건축 - 공간을 짓고 가치를 남깁니다",
   description:
      "이담 건축은 건축을 통해 브랜드의 가치를 담아내는 것을 목표로 합니다. 단순한 건축이 아닌, 신뢰와 울림을 남기는 공간을 완성합니다.",
   other: {
      "naver-site-verification": "7698b25edb328321f8c8a3955b719c9b574a0ade",
   },
   icons: {
      icon: "/favicon.ico",
   },
   openGraph: {
      title: "이담 건축 - 공간을 짓고 가치를 남깁니다",
      description:
         "이담 건축은 건축을 통해 브랜드의 가치를 담아내는 것을 목표로 합니다. 단순한 건축이 아닌, 신뢰와 울림을 남기는 공간을 완성합니다.",

      url: "https://idamstudio.kr",
      siteName: "이담 건축",
      images: [
         {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "이담 건축 대표 이미지",
         },
      ],
      locale: "ko_KR",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "이담 건축 - 공간을 짓고 가치를 남깁니다",
      description:
         "이담 건축은 건축을 통해 브랜드의 가치를 담아내는 것을 목표로 합니다.",
      images: ["/og-image.png"],
   },
   alternates: {
      canonical: "https://idamstudio.kr",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ko">
         <body
            className={`${poppins.className} flex min-h-screen w-full flex-col`}
         >
            <NotificationProvider>
               <main className="flex-1">{children}</main>
               <Footer />
               <ChatBot />
            </NotificationProvider>
         </body>
      </html>
   );
}
