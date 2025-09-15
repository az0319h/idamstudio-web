export interface Project {
   id: string; // Firebase push().key
   title: string; // 프로젝트명
   location: string; // 위치
   year: number | null; // 준공연도
   completionDate: string; // 완공일 (YYYY-MM)
   siteArea: number | null; // 건축면적 (㎡)
   floors: string; // 층수
   type: string; // 건축 타입
   usage: string; // 용도
   exterior: string[]; // 외장재 배열
   interior: string[]; // 내장재 배열
   features: string[]; // 건축 특징 배열
   description: string; // 설명
   youtubeUrl: string; // 유튜브 링크
   mainImage: string; // 대표 이미지
   subImages: string[]; // 서브 이미지 배열 (6개 이상)
   createdAt: string; // 생성일 (ISO 날짜 문자열)
}
