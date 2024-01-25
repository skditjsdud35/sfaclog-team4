import { Common } from "@/styles/common";

export default function Home() {
  return (
    <div>
      홈페이지
      <p className={`text-${Common.colors.primary[70]} ${Common.font.size.xxl}`}>테스트</p>
    </div>
    
  );
}

