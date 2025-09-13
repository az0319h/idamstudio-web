import type { Metadata } from "next";
import { Black_Han_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
});

const blackHanSans = Black_Han_Sans({
   weight: "400", // 이 폰트는 weight 400 하나만 지원
   subsets: ["latin"],
   variable: "--font-black-han-sans",
});

export const metadata: Metadata = {
   title: "이담 건축 - 공간을 짓고 가치를 남깁니다",
   description:
      "이담 건축은 건축을 통해 브랜드의 가치를 담아내는 것을 목표로 합니다. 단순한 건축이 아닌, 신뢰와 울림을 남기는 공간을 완성합니다.",
   icons: {
      icon: "/favicon.ico",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ko">
         <body className={`${poppins.className} min-h-screen w-full`}>
            <main>{children}</main>
         </body>
      </html>
   );
}
