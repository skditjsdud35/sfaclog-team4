type logSelectTypes = {
  section: "myLogs" | "interestLogs";
  category: "최신순" | "오래된순" | "인기순" | "최근 추가순";
};

type ListOptions = {
  sort?: string;
};