"use client";

import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function PrivacyContent() {
   const { ref: headerRef, isVisible: headerVisible } = useIntersection();
   const { ref: contentRef, isVisible: contentVisible } = useIntersection();

   return (
      <article className="px-4">
         <header ref={headerRef} className="pb-12 md:pb-16 lg:pb-20">
            <h1
               style={revealStyle(headerVisible, 0)}
               className="text-4xl leading-tight font-semibold break-keep sm:text-5xl md:text-6xl lg:text-7xl"
            >
               개인정보처리방침
            </h1>
            <p
               style={revealStyle(headerVisible, 1)}
               className="text-16-regular md:text-18-regular mt-6 text-black/60"
            >
               이담건축은 고객님의 개인정보를 소중히 여기며, 관련 법령을 철저히
               준수합니다.
            </p>
            <p
               style={revealStyle(headerVisible, 2)}
               className="text-14-regular mt-4 text-black/40"
            >
               시행일자: 2026년 4월 18일 · 최종 개정일: 2026년 4월 18일 · 버전: v1.0
            </p>
         </header>

         <div
            ref={contentRef}
            style={revealStyle(contentVisible, 0)}
            className="border-line-black-10 border-t pt-8 md:pt-12"
         >
            <nav className="mb-12 md:mb-16">
               <h2 className="text-12-medium mb-4 uppercase tracking-widest text-black/40">
                  목차
               </h2>
               <ol className="text-14-regular md:text-16-regular grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {tocItems.map((item, i) => (
                     <li key={item.id}>
                        <a
                           href={`#${item.id}`}
                           className="hover:text-black/60 transition-colors"
                        >
                           <span className="text-black/30 mr-2">
                              {String(i + 1).padStart(2, "0")}.
                           </span>
                           {item.title}
                        </a>
                     </li>
                  ))}
               </ol>
            </nav>

            <div className="border-line-black-10 mb-12 border-l-2 border-black bg-bg-100 p-5 md:mb-16 md:p-6">
               <p className="text-14-regular md:text-16-regular leading-relaxed text-black/80">
                  이담건축(이하 "회사")은 「개인정보 보호법」 제30조 및
                  「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에 따라,
                  정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한
                  고충을 원활하게 처리할 수 있도록 다음과 같이
                  개인정보처리방침을 수립·공개합니다.
               </p>
            </div>

            <div className="space-y-16 md:space-y-20 [&_section]:scroll-mt-24">
               <Section id="s1" num="01" title="수집하는 개인정보 항목 및 수집 방법">
                  <p>
                     회사는 견적 문의 상담 및 건축 서비스 제공을 위하여 다음과
                     같은 개인정보를 수집합니다.
                  </p>
                  <H3>가. 수집 항목</H3>
                  <Table
                     headers={["구분", "수집 항목", "수집 시점"]}
                     rows={[
                        [
                           "필수",
                           "성함, 연락처(휴대전화번호), 상담분야, 문의내용",
                           "견적 문의 폼 제출 시",
                        ],
                        [
                           "선택",
                           "이메일, 희망 시공 지역, 예상 건축 시기",
                           "견적 문의 폼 제출 시",
                        ],
                        [
                           "계약 단계",
                           "성명, 주소, 생년월일, 서명, 계약 관련 정보",
                           "계약 체결 시",
                        ],
                        [
                           "자동 수집",
                           "접속 IP, 쿠키, 접속 기록, 서비스 이용 기록, 기기 정보",
                           "웹사이트 방문 시",
                        ],
                     ]}
                  />
                  <H3>나. 수집 방법</H3>
                  <Ul>
                     <li>카카오톡 채널을 통한 상담 및 문의 접수</li>
                     <li>웹사이트 견적 문의 폼을 통한 제출</li>
                     <li>전화, 문자메시지, 이메일을 통한 수집</li>
                     <li>
                        서비스 이용 과정에서 자동으로 생성되어 수집되는 정보
                     </li>
                     <li>오프라인 상담 및 계약서 작성을 통한 수집</li>
                  </Ul>
               </Section>

               <Section id="s2" num="02" title="개인정보의 수집·이용 목적">
                  <p>
                     회사는 수집한 개인정보를 다음의 목적을 위해 이용하며, 이용
                     목적이 변경되는 경우에는 사전에 동의를 받습니다.
                  </p>
                  <Ol>
                     <li>
                        <strong>견적 문의 상담 및 응대</strong> — 문의 접수 확인,
                        상담 일정 안내, 견적서 작성 및 발송
                     </li>
                     <li>
                        <strong>고객 커뮤니케이션</strong> — 전화,
                        문자메시지(SMS), 카카오톡 알림톡, 이메일을 통한 상담 관련
                        안내
                     </li>
                     <li>
                        <strong>계약의 체결 및 이행</strong> — 시공 계약, 공사
                        진행 안내, 현장 방문 일정 조율, 사후 관리(A/S)
                     </li>
                     <li>
                        <strong>민원 처리 및 분쟁 대응</strong> — 불만 처리, 고객
                        의견 수렴, 법적 분쟁 대응
                     </li>
                     <li>
                        <strong>마케팅 활용</strong> (선택 동의 시) — 신규
                        모델하우스 소식, 이벤트, 프로모션, 건축 관련 정보 제공
                     </li>
                     <li>
                        <strong>서비스 개선</strong> — 통계 분석, 서비스 품질
                        향상, 신규 서비스 개발
                     </li>
                  </Ol>
               </Section>

               <Section id="s3" num="03" title="개인정보 보유 및 이용 기간">
                  <p>
                     회사는 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이
                     파기합니다. 단, 관계 법령에 의해 보존할 필요가 있는
                     경우에는 아래와 같이 일정 기간 보관합니다.
                  </p>
                  <Table
                     headers={["보존 항목", "보존 기간", "근거 법령"]}
                     rows={[
                        ["견적 문의 및 상담 기록", "상담 종료 후 3년", "전자상거래법"],
                        ["계약 또는 청약철회 등에 관한 기록", "5년", "전자상거래법"],
                        ["대금결제 및 재화 공급에 관한 기록", "5년", "전자상거래법"],
                        ["소비자 불만 또는 분쟁 처리 기록", "3년", "전자상거래법"],
                        ["웹사이트 방문 기록", "3개월", "통신비밀보호법"],
                        ["마케팅 수신 동의 정보", "동의 철회 시까지", "정보통신망법"],
                     ]}
                  />
               </Section>

               <Section id="s4" num="04" title="개인정보의 제3자 제공">
                  <p>
                     회사는 원칙적으로 수집한 개인정보를 제3자에게 제공하지
                     않습니다. 다만, 다음의 경우에는 예외로 합니다.
                  </p>
                  <Ul>
                     <li>정보주체로부터 별도의 동의를 받은 경우</li>
                     <li>
                        법령에 특별한 규정이 있거나 법령상 의무를 준수하기 위해
                        불가피한 경우
                     </li>
                     <li>
                        수사기관이 수사 목적으로 법률에 정해진 절차와 방법에 따라
                        요구하는 경우
                     </li>
                     <li>
                        정보주체 또는 그 법정대리인이 의사표시를 할 수 없는
                        상태에 있거나 주소 불명 등으로 사전 동의를 받을 수 없는
                        경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체,
                        재산의 이익을 위하여 필요하다고 인정되는 경우
                     </li>
                  </Ul>
               </Section>

               <Section id="s5" num="05" title="개인정보 처리 위탁">
                  <p>
                     회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리
                     업무를 외부 전문업체에 위탁하고 있습니다.
                  </p>
                  <DelegationTable />
                  <p>
                     회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라
                     위탁업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적
                     보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등
                     책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가
                     개인정보를 안전하게 처리하는지 감독합니다.
                  </p>
                  <H3>개인정보의 국외 이전에 관한 고지</H3>
                  <p>
                     회사가 이용하는 Vercel Inc., Google LLC(Gmail, Analytics,
                     Ads), Firebase는 미국에 소재한 클라우드 서비스로, 개인정보가
                     해당 국가의 서버에 저장·처리됩니다.
                  </p>
                  <Ul>
                     <li>
                        <strong>이전 목적:</strong> 웹서비스 제공 및 상담 업무
                        이행을 위한 계약의 체결 및 이행
                     </li>
                     <li>
                        <strong>이전 방법:</strong> 서비스 이용 시 정보통신망을
                        통한 암호화(TLS) 전송 및 저장
                     </li>
                     <li>
                        <strong>이전 시점:</strong> 이용자가 문의폼을 제출하거나
                        웹사이트에 접속하는 시점에 실시간으로 이전
                     </li>
                     <li>
                        <strong>법적 근거:</strong> 「개인정보 보호법」 제28조의8
                        제1항 제3호
                     </li>
                     <li>
                        <strong>거부 방법:</strong> 이용자는 개인정보 국외 이전을
                        거부할 권리가 있으며, 거부 시 제10항의 개인정보
                        보호책임자에게 연락하여 요청하실 수 있습니다.
                     </li>
                  </Ul>
               </Section>

               <Section id="s6" num="06" title="정보주체의 권리와 행사 방법">
                  <p>정보주체는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
                  <Ol>
                     <li>개인정보 열람 요구</li>
                     <li>오류 등이 있을 경우 정정 요구</li>
                     <li>삭제 요구</li>
                     <li>처리 정지 요구</li>
                     <li>마케팅 수신 동의 철회</li>
                  </Ol>
                  <p>
                     위 권리 행사는 개인정보 보호책임자에게 서면, 전화, 이메일
                     등을 통해 하실 수 있으며, 회사는 이에 대해 지체 없이
                     조치하겠습니다.
                  </p>
                  <Callout>
                     <strong>마케팅 수신 거부:</strong> 마케팅 정보 수신을 더 이상
                     원하지 않으시는 경우, 카카오톡 채널 상단 메뉴의 &apos;채널
                     차단&apos; 또는 이메일 하단의 &apos;수신 거부&apos; 링크,
                     혹은 아래 연락처로 요청하시면 즉시 처리됩니다.
                  </Callout>
               </Section>

               <Section id="s7" num="07" title="개인정보의 파기 절차 및 방법">
                  <p>
                     회사는 개인정보 보유 기간이 경과하거나 처리 목적이 달성된
                     경우 지체 없이 해당 개인정보를 파기합니다.
                  </p>
                  <H3>가. 파기 절차</H3>
                  <p>
                     이용자가 입력한 정보는 목적 달성 후 내부 방침 및 관련 법령에
                     따라 일정 기간 저장된 후 파기됩니다. 별도 저장 시에는 법령에
                     정한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                  </p>
                  <H3>나. 파기 방법</H3>
                  <Ul>
                     <li>
                        전자적 파일 형태: 복구 및 재생이 불가능한 기술적 방법을
                        사용하여 영구 삭제
                     </li>
                     <li>종이 문서: 분쇄기로 분쇄하거나 소각하여 파기</li>
                  </Ul>
               </Section>

               <Section id="s8" num="08" title="개인정보의 안전성 확보 조치">
                  <p>
                     회사는 개인정보의 안전성 확보를 위하여 다음과 같은 조치를
                     취하고 있습니다.
                  </p>
                  <Ol>
                     <li>
                        <strong>관리적 조치</strong> — 내부관리계획 수립·시행,
                        정기적 직원 교육
                     </li>
                     <li>
                        <strong>기술적 조치</strong> — 개인정보처리시스템
                        접근권한 관리, 접근통제 시스템 설치, 암호화, 보안프로그램
                        설치
                     </li>
                     <li>
                        <strong>물리적 조치</strong> — 전산실, 자료보관실 등의
                        접근통제
                     </li>
                  </Ol>
               </Section>

               <Section id="s9" num="09" title="쿠키(Cookie) 운영 및 거부">
                  <p>
                     회사는 이용자 맞춤 서비스 제공과 서비스 이용 편의를 위해
                     쿠키를 사용합니다.
                  </p>
                  <H3>가. 쿠키 사용 목적</H3>
                  <Ul>
                     <li>
                        웹사이트 방문 분석 및 이용 형태 파악을 통한 서비스 개선
                     </li>
                     <li>
                        Google Ads, Google Analytics 등을 통한 광고 성과 측정
                     </li>
                  </Ul>
                  <H3>나. 쿠키 거부 방법</H3>
                  <p>
                     이용자는 웹 브라우저 설정에서 쿠키 저장을 거부할 수
                     있습니다. 다만, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에
                     제한이 있을 수 있습니다.
                  </p>
                  <Ul>
                     <li>
                        Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트
                        데이터
                     </li>
                     <li>
                        Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트
                        데이터
                     </li>
                     <li>Edge: 설정 → 쿠키 및 사이트 권한</li>
                  </Ul>
               </Section>

               <Section id="s10" num="10" title="개인정보 보호책임자">
                  <p>
                     회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                     개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제
                     등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
                     있습니다.
                  </p>
                  <InfoBox>
                     <InfoItem label="개인정보 보호책임자" value="홍재영 (대표)" />
                     <InfoItem label="연락처" value="031-861-9893 / 010-4809-6770" />
                     <InfoItem label="이메일" value="idamstudio.doodream@gmail.com" />
                     <InfoItem
                        label="운영 시간"
                        value="평일 09:00 ~ 18:00 (주말·공휴일 제외)"
                     />
                  </InfoBox>
               </Section>

               <Section id="s11" num="11" title="권익침해 구제 방법">
                  <p>
                     개인정보 침해로 인한 상담 및 신고가 필요하신 경우 아래
                     기관에 문의하실 수 있습니다.
                  </p>
                  <Table
                     headers={["기관명", "전화번호", "홈페이지"]}
                     rows={[
                        [
                           "개인정보 침해신고센터",
                           "(국번없이) 118",
                           "privacy.kisa.or.kr",
                        ],
                        [
                           "개인정보 분쟁조정위원회",
                           "1833-6972",
                           "kopico.go.kr",
                        ],
                        [
                           "대검찰청 사이버수사과",
                           "(국번없이) 1301",
                           "spo.go.kr",
                        ],
                        [
                           "경찰청 사이버수사국",
                           "(국번없이) 182",
                           "ecrm.police.go.kr",
                        ],
                     ]}
                  />
               </Section>

               <Section id="s12" num="12" title="개정 이력">
                  <Ul>
                     <li>2026년 4월 18일 — 최초 제정 및 시행</li>
                  </Ul>
                  <Callout>
                     <strong>고지 안내:</strong> 본 개인정보처리방침의 내용 추가,
                     삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 웹사이트의
                     공지사항을 통하여 고지할 것입니다.
                  </Callout>
               </Section>
            </div>
         </div>
      </article>
   );
}

const tocItems = [
   { id: "s1", title: "수집하는 개인정보 항목 및 수집 방법" },
   { id: "s2", title: "개인정보의 수집·이용 목적" },
   { id: "s3", title: "개인정보 보유 및 이용 기간" },
   { id: "s4", title: "개인정보의 제3자 제공" },
   { id: "s5", title: "개인정보 처리 위탁" },
   { id: "s6", title: "정보주체의 권리와 행사 방법" },
   { id: "s7", title: "개인정보의 파기 절차 및 방법" },
   { id: "s8", title: "개인정보의 안전성 확보 조치" },
   { id: "s9", title: "쿠키(Cookie) 운영 및 거부" },
   { id: "s10", title: "개인정보 보호책임자" },
   { id: "s11", title: "권익침해 구제 방법" },
   { id: "s12", title: "개정 이력" },
];

function Section({
   id,
   num,
   title,
   children,
}: {
   id: string;
   num: string;
   title: string;
   children: React.ReactNode;
}) {
   return (
      <section id={id}>
         <h2 className="border-line-black-10 mb-6 flex items-baseline gap-3 border-b-2 border-black pb-3 text-xl font-semibold md:text-2xl">
            <span className="text-14-medium text-black/40">{num}</span>
            {title}
         </h2>
         <div className="text-14-regular md:text-16-regular space-y-4 leading-relaxed text-black/80 [&_strong]:text-black">
            {children}
         </div>
      </section>
   );
}

function H3({ children }: { children: React.ReactNode }) {
   return (
      <h3 className="!mt-6 text-16-medium md:text-18-medium text-black">
         {children}
      </h3>
   );
}

function Ul({ children }: { children: React.ReactNode }) {
   return (
      <ul className="list-disc space-y-1.5 pl-5 marker:text-black/30">
         {children}
      </ul>
   );
}

function Ol({ children }: { children: React.ReactNode }) {
   return (
      <ol className="list-decimal space-y-1.5 pl-5 marker:text-black/40">
         {children}
      </ol>
   );
}

function Table({
   headers,
   rows,
}: {
   headers: string[];
   rows: string[][];
}) {
   return (
      <div className="border-line-black-10 overflow-x-auto border">
         <table className="text-14-regular w-full min-w-[500px]">
            <thead className="bg-bg-100">
               <tr>
                  {headers.map((h) => (
                     <th
                        key={h}
                        className="border-line-black-10 border-b px-4 py-3 text-left font-semibold text-black"
                     >
                        {h}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {rows.map((row, i) => (
                  <tr
                     key={i}
                     className={i % 2 === 1 ? "bg-bg-100/50" : "bg-white"}
                  >
                     {row.map((cell, j) => (
                        <td
                           key={j}
                           className="border-line-black-10 border-b px-4 py-3"
                        >
                           {cell}
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

function Callout({ children }: { children: React.ReactNode }) {
   return (
      <div className="border-l-2 border-black/20 bg-bg-100 p-4 text-black/70">
         {children}
      </div>
   );
}

function InfoBox({ children }: { children: React.ReactNode }) {
   return (
      <div className="border-line-black-10 space-y-2 border bg-white p-5">
         {children}
      </div>
   );
}

function InfoItem({ label, value }: { label: string; value: string }) {
   return (
      <div className="flex flex-col sm:flex-row sm:gap-4">
         <dt className="text-14-regular w-40 shrink-0 text-black/50">{label}</dt>
         <dd className="text-14-medium text-black">{value}</dd>
      </div>
   );
}

function DelegationTable() {
   const delegationData = [
      {
         company: "카카오(주)",
         companyNote: "카카오톡 채널 운영사",
         country: "대한민국",
         task: "카카오톡 채널을 통한 고객 상담 운영 및 알림 메시지 발송",
         taskNote: "이전 항목: 성함, 휴대전화번호, 상담 내용, 카카오톡 프로필 정보",
         period: "위탁 계약 종료 시까지",
      },
      {
         company: "Vercel Inc.",
         companyNote: "privacy@vercel.com",
         country: "미국",
         task: "웹사이트 호스팅 및 운영",
         taskNote: "이전 항목: 접속 IP, 쿠키, 서비스 이용 기록",
         period: "위탁 계약 종료 시까지",
      },
      {
         company: "Google LLC",
         companyNote: "support-kr@google.com",
         country: "미국",
         task: "이메일 송·수신(Gmail), 광고 운영(Google Ads), 광고 성과 측정(Google Analytics 4)",
         taskNote: "이전 항목: 이메일 주소, 접속 기록, 광고 식별자",
         period: "위탁 계약 종료 시까지",
      },
      {
         company: "Google LLC (Firebase)",
         companyNote: "firebase-support@google.com",
         country: "미국",
         task: "포트폴리오 데이터베이스 운영 및 콘텐츠 저장",
         taskNote: "이전 항목: 프로젝트 정보(개인정보 미포함)",
         period: "위탁 계약 종료 시까지",
      },
   ];

   return (
      <div className="border-line-black-10 overflow-x-auto border">
         <table className="text-14-regular w-full min-w-[600px]">
            <thead className="bg-bg-100">
               <tr>
                  <th className="border-line-black-10 border-b px-4 py-3 text-left font-semibold text-black">
                     수탁업체
                  </th>
                  <th className="border-line-black-10 border-b px-4 py-3 text-left font-semibold text-black">
                     소재 국가
                  </th>
                  <th className="border-line-black-10 border-b px-4 py-3 text-left font-semibold text-black">
                     위탁 업무
                  </th>
                  <th className="border-line-black-10 border-b px-4 py-3 text-left font-semibold text-black">
                     위탁 기간
                  </th>
               </tr>
            </thead>
            <tbody>
               {delegationData.map((row, i) => (
                  <tr
                     key={row.company}
                     className={i % 2 === 1 ? "bg-bg-100/50" : "bg-white"}
                  >
                     <td className="border-line-black-10 border-b px-4 py-3">
                        {row.company}
                        <br />
                        <span className="text-12-regular text-black/50">
                           {row.companyNote}
                        </span>
                     </td>
                     <td className="border-line-black-10 border-b px-4 py-3">
                        {row.country}
                     </td>
                     <td className="border-line-black-10 border-b px-4 py-3">
                        {row.task}
                        <br />
                        <span className="text-12-regular text-black/50">
                           {row.taskNote}
                        </span>
                     </td>
                     <td className="border-line-black-10 border-b px-4 py-3">
                        {row.period}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
