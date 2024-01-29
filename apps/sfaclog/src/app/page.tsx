"use client";
import {
  readAllMessage,
  readSingleMessage,
  sendMessage,
} from "@/utils/jaehyun";

export default function Home() {
  const testData = {
    sender: "cw1q1790mj13h9f",
    receiver: "y53u78yj042nd15",
    message: "테스트입니다.",
    is_read: false,
  };
  // 메세지 보내기 테스트
  const onSendMessageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    sendMessage(testData);
  };
  // 전체 메세지 읽기 테스트
  const onReadAllMessageClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    readAllMessage("y53u78yj042nd15");
  };

  // 단일 메세지 읽기 테스트

  const onReadMessageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    readSingleMessage("gxs2jj21ttt35k5");
  };

  return (
    <div>
      <h1>테스트 페이지</h1>
      <div className="p-5 bg-blue-500 ">
        <button onClick={onSendMessageClick}>메세지 보내기 테스트 버튼</button>
      </div>
      <div className="p-5 bg-blue-400 ">
        <button onClick={onReadAllMessageClick}>
          현재 유저 메세지 확인 버튼
        </button>
      </div>
      <div className="p-5 bg-blue-300 ">
        <button onClick={onReadMessageClick}>단일 메세지 읽기</button>
      </div>
    </div>
  );
}
