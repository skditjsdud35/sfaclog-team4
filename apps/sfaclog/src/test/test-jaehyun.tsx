"use client";

import { SignUp } from "@/utils/api/auth";
import { readPopularLogger } from "@/utils/api/log";
import {
  readAllMessage,
  readSingleMessage,
  removeMessage,
  sendMessage,
} from "@/utils/api/message";
import {
  addFollowing,
  getFollow,
  getProfile,
  proposal,
  removeFollowing,
} from "@/utils/api/user";

export default function TestJaehyun() {
  const testData = {
    sender: "cw1q1790mj13h9f",
    receiver: "y53u78yj042nd15",
    message: "테스트입니다.",
    is_read: false,
  };
  return (
    <div className="bg-white">
      <h1 className="text-black">API 테스트 페이지</h1>

      <div className="p-5 bg-blue-500 ">
        <button onClick={() => sendMessage(testData)}>
          메세지 보내기 테스트 버튼
        </button>
      </div>
      <div className="p-5 bg-blue-400 ">
        <button onClick={() => readAllMessage("y53u78yj042nd15")}>
          현재 유저 메세지 확인 버튼
        </button>
      </div>
      <div className="p-5 bg-blue-300 ">
        <button onClick={() => readSingleMessage("gxs2jj21ttt35k5")}>
          단일 메세지 읽기
        </button>
      </div>
      <div className="p-5 bg-blue-200">
        <button onClick={() => removeMessage("gxs2jj21ttt35k5")}>
          메세지 삭제
        </button>
      </div>
      <div className="p-5 bg-blue-100">
        <button
          onClick={() =>
            proposal({
              is_read: false,
              sender: "y53u78yj042nd15",
              receiver: "iw1gneie52l2et5",
              message: ".",
            })
          }
        >
          제안 요청 테스트
        </button>
      </div>
      <div className="p-5 bg-red-500">
        <button onClick={() => getFollow("y53u78yj042nd15")}>
          팔로우 조회{" "}
        </button>
      </div>

      <div className="p-5 bg-red-400">
        <button
          onClick={() => addFollowing("qyk0dfkf5vd7l0v", "hwby3y9jmyu5imx")}
        >
          팔로우 하기{" "}
        </button>
      </div>
      <div className="p-5 bg-red-300">
        <button
          onClick={() => removeFollowing("qyk0dfkf5vd7l0v", "hwby3y9jmyu5imx")}
        >
          팔로우 삭제하기{" "}
        </button>
      </div>
      <div className="p-5 bg-green-500">
        <button onClick={() => readPopularLogger()}>인기 로거 조회하기 </button>
      </div>

      <div className="p-5 bg-green-500">
        <button
          onClick={() =>
            SignUp({
              username: "test100",
              email: "test1234@naver.com",
              emailVisibility: true,
              nickname: "test",
              phone: "010-1234-1234",
              password: "test1232",
              passwordConfirm: "test1232",
              introduce: "테스트계정",
              interest_field: ["프론트엔드"],
              allow_proposal: ["채용 제안"],
              profile_image: "",
            })
          }
        >
          회원가입{" "}
        </button>
      </div>

      <div className="p-5 bg-green-500">
        <button onClick={() => getProfile("hwby3y9jmyu5imx")}>
          회원 데이터 조회{" "}
        </button>
      </div>
    </div>
  );
}
