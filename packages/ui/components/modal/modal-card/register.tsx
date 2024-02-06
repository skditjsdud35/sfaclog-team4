export type ModalProps = {
  onClick?: () => void;
  label?: string;
  size?: "pc" | "mobile";
};

function ModalCard({
  size,
  onClick,
}: ModalProps) {
  let dimensions = "max-w-[377px] max-h-[420px]";
  if (size === "pc") dimensions = "max-w-[377px] max-h-[420px]";
  if (size === "mobile") dimensions = "max-w-[313px] max-h-[420px]";
  return (
    <form className={`flex ${dimensions} bg-white shadow-gray border`}>
      <div className="mx-8 mt-6">
        <p className="text-xl font-bold mb-5">등록하기</p>

        <div className="flex mb-[18px]">
          <p className="text-xs font-medium mr-5 flex items-center">시리즈</p>
          <select className="w-[242px] h-[34px] rounded-md border border-gray-200 text-xs pl-[12px]">
            <option>시리즈를 선택하세요</option>
            <option>시리즈 2</option>
          </select>
        </div>

        <div className="flex mb-[18px]">
          <p className="mr-5 text-xs">공개설정</p>
          <label className="flex">
            <input className="mr-1.5" type="checkbox" />
            <p className="mr-4 text-xs">전체 공개</p>
          </label>
          <label className="flex">
            <input 
              className="mr-1.5 text-xs" 
              type="checkbox" /> 
              <p className="text-xs">비공개</p>
          </label>
        </div>

        <div className="flex mb-[18px]">
          <p className="mr-5 text-xs">발행설정</p>

          <label className="flex">
            <input className="mr-1.5" type="checkbox" />
            <p className="mr-4 text-xs">댓글 허용</p>
          </label>
          <label className="flex">
            <input className="mr-1.5" type="checkbox" /> 
            <p className="text-xs">좋아요 허용</p>
          </label>
        </div>
        <label className="flex">
          <input className="mb-[18px] mr-[6px]" type="checkbox" /> 
          <p className="text-xs">이 설정을 기본값으로 유지</p>
        </label>
        <hr className="mb-[18px]" />

        <div className="flex mb-[18px]">
          <p className="mr-4 text-xs flex items-center">필수 태그</p>
          <div className="flex gap-1.5 justify-center items-center">
            <div className="w-[67px] h-[24px] border rounded-[30px] flex justify-center items-center text-xs">백엔드</div>
            <div className="w-[67px] h-[24px] border rounded-[30px] flex justify-center items-center text-xs">DBA</div>
            <div className="w-[67px] h-[24px] border rounded-[30px] flex justify-center items-center text-xs">IOS</div>
            <button className="ml-[25px] w-[18px] h-[18px] border rounded-[50px] flex justify-center items-center"> v </button>
          </div>
        </div>

        <div className="flex">
          <p className="mr-5 text-xs flex items-center">추가 태그</p>
          <input 
            className="w-[241px] h-[28px] border rounded-[10px] pl-3 text-xs"
            type="text" 
            placeholder="#태그 입력 (최대 3개)" />
        </div>

        <div className="flex mb-5 mt-1.5">
          <div className="flex gap-2 ml-[72px]">
            <p className="text-xs text-blue-500 flex items-center">태그 추천</p>
            <p className="text-xs flex items-center justify-center border rounded-[52px] w-[54px] text-xs">#파이썬</p> 
            <p className="text-xs flex items-center justify-center border rounded-[52px] w-[54px] text-xs">#JAVA</p> 
            <p className="text-xs flex items-center justify-center border rounded-[52px] w-[54px] text-xs">#PHP</p>
          </div>
        </div>

        <div className="flex mb-6 gap-3 float-right mr-[32px]">
          <button className="w-[41px] h-[30px] border rounded-[7px] text-xs">취소</button>
          <button className="w-[75px] h-[30px] border text-xs bg-[#F3F3F3]">등록하기</button>
        </div>
      </div>
    </form>
  );
}

export default ModalCard;
