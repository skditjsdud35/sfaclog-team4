
type SavePostProps = {
  onClick?: () => void;
  label?: string;
};

function SavePost() {
  return (
    <div className="max-w-[270px] max-h-[238px] border rounded-[14px]">
      <div className="flex justify-between">
        <p className="ml-[26px] mt-[18px] mb-[18px] text-base font-bold">3개의 저장된 글</p>
        <button className="mr-[26px]">x</button>
      </div>
      <hr className="mb-[8px]"/>
      <div className="flex flex-col ml-[26px]">
        <div className="flex justify-between">
          <div className="mb-[8px]">
            <p className="text-base font-nomal">제목3</p>
            <p className="text-xs font-nomal text-[#B3B3B3]">2024.01.20</p>
          </div>
          <button className="mr-[26px]">x</button>
        </div>
        <div className="flex justify-between">
          <div className="mb-[8px]">
            <p className="text-base font-nomal">제목2</p>
            <p className="text-xs font-nomal text-[#B3B3B3]">2024.01.12</p>
          </div>
          <button className="mr-[26px]">x</button>
        </div>
        <div className="flex justify-between">
          <div className="mb-[8px]">
            <p className="text-base font-nomal">제목1</p>
            <p className="text-xs font-nomal text-[#B3B3B3]">2024.01.02</p>
          </div>
          <button className="mr-[26px]">x</button>
        </div>
      </div>
    </div>
  );
}

export default SavePost;