import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PrivacyContent from "@/components/domains/privacy/PrivacyContent";

export const metadata: Metadata = {
   title: "개인정보처리방침 - 이담건축",
   description:
      "이담건축의 개인정보처리방침입니다. 고객님의 개인정보를 소중히 여기며, 관련 법령을 철저히 준수합니다.",
   openGraph: {
      title: "개인정보처리방침 | 이담건축",
      description:
         "이담건축의 개인정보처리방침입니다. 고객님의 개인정보를 소중히 여기며, 관련 법령을 철저히 준수합니다.",
      url: "https://idamstudio.kr/privacy",
      siteName: "이담건축",
      locale: "ko_KR",
      type: "article",
   },
   alternates: {
      canonical: "https://idamstudio.kr/privacy",
   },
   robots: {
      index: true,
      follow: true,
   },
};

export default function PrivacyPage() {
   return (
      <PageLayout>
         <PrivacyContent />
      </PageLayout>
   );
}
