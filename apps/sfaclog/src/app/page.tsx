import { Common } from "@/styles/common";

export default function Home() {

  return (
    <div className={`bg-${Common.colors.primary[60]}`}>
      홈페이지
      <p className={`text-${Common.colors.primary[70]}`}>테스트</p>
    </div>
    
  );
}

