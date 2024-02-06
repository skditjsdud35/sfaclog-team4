type ProposalProps = {
  onClick?: () => void;
  label?: string;
};

function Proposal() {
  const userName = "포동포동이";
  return (
    <div className="max-w-[286px] max-h-[217px] border rounded-[15px]">
      <div className="flex justify-center mt-[20px] mb-[24px] gap-[4px]">
        <p className="text-[18px] text-[#424242] font-bold">{`${userName}`}</p>
        <span className="flex text-[15px] font-nomal items-center">님에게 제안하기</span>
      </div>
      <div className="flex flex-col ml-[42px]">
        <div className="flex mb-[16px]">
          <div>아이콘</div>
          <p className="ml-[16px] mr-[22px] w-[98px]">프로젝트 제안</p>
          <button className="w-[41px] h-[30px] border">제안</button>
        </div>
        <div className="flex mb-[16px]">
          <div>아이콘</div>
          <p className="ml-[16px] mr-[22px] w-[98px]">채용 제안</p>
          <button>제안</button>
        </div>
        <div className="flex mb-[16px]">
          <div>아이콘</div>
          <p className="ml-[16px] mr-[22px] w-[98px]">의견 제안</p>
          <button>제안</button>
        </div>
      </div>
    </div>
  )
}

export default Proposal;