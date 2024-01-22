# 스펙로그

## 기술스택

- Nextjs14
- TypeScript
- Recoil
- React-Qeury
- Tailwindcss
- Stroybook

## 디렉토리 구조

```
root/
├─ src/
│  ├─ app/
│  │  ├─ [특정 라우트]/
│  │  │  ├─ components/    # 해당 라우트 전용 로컬 컴포넌트
│  │  │  ├─ state/         # 로컬 상태 관리
│  │  │  └─ [기본 파일]    # 기본 page.tsx, layout.tsx
│  │  └─ [최상단 기본 파일] # 기본 page.tsx, layout.tsx
│  │
│  ├─ components/          # 전역적으로 사용되는 공통 컴포넌트
│  ├─ state/               # 전역 상태 관리
│  ├─ styles/              # 전역 스타일
│  ├─ utils/               # 전역 유틸리티 함수
│  └─ git_hooks/           # lefthook 커밋 컨벤션 설정 파일
│
├─ public/                 # 정적 파일 (이미지, 아이콘 등)
└─ [기타 설정 파일]        # package.json, tsconfig.json, next.config.js 등

```
