export interface logTypes {
    title: string;
    thumbnail_url: string;
    content: string;
    private: boolean;
    link: string;
    comment?: string[];
    tag?: string[];
    post_view?: string[];
    like?: string[];
    is_deleted: boolean;
    section: string;
  }

export interface logFolderTypes {
    dir_name: string;
    posts?: string[];
    user: string;
  }


export interface logSelectTypes {
    section: (
      "myLogs" | "interestLogs" | "popularLogs" | "latestLogs"
    );
    category?: (
      "최신순" | "오래된순" | "인기순" | "폴더별" | "시리즈별" | "최근 추가순" | "오늘" | "이번주" | "이번달" | "이번년도"
    );
    tag?: (
      "프론트엔드" | "백엔드" | "데이터분석" | "서버개발" | "DBA" | "IOS" | "안드로이드"
    );
  }