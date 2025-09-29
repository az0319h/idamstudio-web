# IDAM STUDIO — Architecture Portfolio Website

**이담건축 공식 포트폴리오 사이트 리포지토리**

Next.js 기반의 미니멀하고 정갈한 아키텍처 스튜디오 웹사이트입니다. 브랜드의 ‘본질로 완성하는 건축’ 철학을 온라인 경험으로 번역하여 소개, 작업 사례, 상담/문의, 위치 안내 등을 간결하게 제공합니다.

![idam_visual_vfkozt](https://github.com/user-attachments/assets/d99addfc-553a-4aaa-85b3-af87f638a974)

## A. 프로젝트 기술스택

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![Framer_Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=fff)
![React_Hook_Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=fff)

### Backend
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=000)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff)
![Nodemailer](https://img.shields.io/badge/Nodemailer-2C3E50?logoColor=fff)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff)

### Dev & Tooling
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=fff)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=000)

## B. 프로젝트 폴더구조

```text
idamstudio-web/
├─ .github/                 # GitHub 워크플로우, 이슈/PR 템플릿
├─ .vscode/                 # VSCode 워크스페이스 설정
├─ public/                  # 정적 파일(파비콘, OG 이미지 등)
│  ├─ favicon.ico
│  └─ og-image.png
├─ src/
│  ├─ api/                  # server action API
│  ├─ app/                  # Next.js App Router(페이지/레이아웃/메타)
│  ├─ assets/               # 이미지/일러스트/아이콘 원본
│  ├─ components/           # 재사용 UI 컴포넌트
│  │  ├─ animations/        # 모션/로티 전용 컴포넌트
│  │  ├─ common/            # 공통(버튼/타이틀/섹션 등)
│  │  ├─ domains/           # Works/Contact/Location 등 도메인별
│  │  ├─ layout/            # 레이아웃/헤더/푸터/그리드
│  │  └─ skeleton/          # 로딩 스켈레톤 UI
│  ├─ constants/            # 상수(링크/카피/토큰)
│  ├─ context/              # 전역 상태(Context/Provider)
│  ├─ hooks/                # 커스텀 훅(useIntersection 등)
│  ├─ lib/                  # 클라이언트/도메인 로직/외부연동
│  │  ├─ firebase/          # Firebase 초기화/인스턴스
│  │  ├─ schemas/           # Zod 스키마(폼/데이터 검증)
│  │  └─ types/             # 전역 타입 정의
│  └─ utils/                # 순수 유틸(포맷/요청 래퍼 등)
├─ .gitignore               # Git 무시 규칙
├─ .prettierrc              # Prettier 설정
├─ README.md                # 프로젝트 문서
├─ eslint.config.mjs        # ESLint 설정
├─ next.config.ts           # Next.js 설정
├─ package-lock.json        # 의존성 잠금
├─ package.json             # 스크립트/의존성
├─ postcss.config.mjs       # PostCSS/Tailwind 설정
└─ tsconfig.json            # TypeScript 설정

