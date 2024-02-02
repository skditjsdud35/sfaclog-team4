export interface userTypes {
  username: string;
  email: string;
  emailVisibility?: boolean;
  nickname: string;
  phone: string;
  profile_image?: string;
  password: string;
  passwordConfirm: string;
  introduce: string;
  interest_field?: (
    | "프론트엔드"
    | "백엔드"
    | "데이터 분석"
    | "서버 개발"
    | "DBA"
    | "ios 개발"
    | "안드로이드 개발"
  )[];
  allow_proposal?: (
    | "채용 제안"
    | "의견 제안"
    | "프로젝트 제안"
  )[];
  follow?: string;
  sns?: string[];
  posts?: string[];
  resumes?: string[];
  interest_logs?: string[];
  series?: string[];
  is_agreed?: boolean;
}

export interface loginTypes {
  email: string;
  password: string;
}
