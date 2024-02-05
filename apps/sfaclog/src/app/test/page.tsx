"use client";

import { useState } from "react";
import {
  GetToken,
  Login,
  SignUp,
  requestChangePassword,
  tokenRefresh,
  verifyEmail,
} from "@/utils/api/auth";
import {
  createComment,
  deleteComment,
  getComment,
  updateComment,
} from "@/utils/api/comment";
import { userTypes } from "@/types/user";
import { deleteUser, getProfile, updateProfile } from "@/utils/api/user";
import { commentData } from "@/types/comment";
import { getInterestLog, getMyLogTests } from "@/utils/api/log";

export default function Test() {

  // 로그인 테스트
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const authData = await Login(email, password);
      console.log(authData);
    } catch (error) {
      console.error(error);
    }
  };

  //회원가입 테스트
  const handleSignup = async () => {
    try {
      const userData: userTypes = {
        username: "frontnamedd",
        email: "통신테스트33@test.com",
        nickname: "통신테스트33",
        phone: "01012341237",
        password: "test1234",
        passwordConfirm: "test1234",
        interest_field: ["백엔드", "프론트엔드"],
        introduce: "백엔드, 프론트엔드",
      };
      console.log(userData);
      await SignUp(userData);
    } catch (error) {
      console.error(error);
    }
  };

  //이메일 인증요청 테스트
  const verifyEmailHandler = async () => {
    const testEmail = "whwnstn111@naver.com";
    try {
      await verifyEmail(testEmail);
      console.log("이메일 요청 성공");
    } catch (error) {
      console.error(error);
    }
  };

  //회원탈퇴 테스트
  const deleteUserHandle = async () => {
    const tmp = "l36of8gg48aic30";
    try {
      await deleteUser(tmp);
      console.log("삭제");
    } catch (error) {
      console.error(error);
    }
  };

  //프로필 조회 테스트
  const profileHandle = async () => {
    const profileTmp = "hwby3y9jmyu5imx";

    try {
      const viewMember = await getProfile(profileTmp);
      console.log(viewMember);
    } catch (error) {
      console.error(error);
    }
  };

  //프로필 변경 테스트
  const updateUserHandle = async () => {
    const userTmp = "hwby3y9jmyu5imx";
    try {
      const updateData = { is_agreed: false };
      await updateProfile(userTmp, updateData);
      console.log("프로필이 성공적으로 변경되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  //댓글 생성 테스트
  const createReplyHandle = async () => {
    const testData: commentData = {
      contents: "통신테스트",
      user: "iw1gneie52l2et5",
      parents_comment: "zvjcq1ao5i3k92p",
      post: "k1a8sgijkbhy04r",
      like: 0,
    };

    try {
      const result = await createComment(testData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  //댓글 수정 테스트
  const updateReplyTest = async () => {
    const testId = "q9xnyj6gatnd3mn";

    const updateTestData: commentData = {
      contents: "댓글수정테스트22",
      user: "iw1gneie52l2et5",
      parents_comment: "zvjcq1ao5i3k92p",
      post: "k1a8sgijkbhy04r",
      like: 0,
    };
    try {
      const result = await updateComment(testId, updateTestData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  //댓글 삭제 테스트
  const deleteReplyTest = async () => {
    const deleteTestId = "k692cos0t75hz87";

    try {
      await deleteComment(deleteTestId);
      console.log("삭제 성공");
    } catch (error) {
      console.error(error);
    }
  };

  //비밀번호 재설정 테스트
  const changePasswordTest = async () => {
    const changeId = "whwnstn111@naver.com";

    try {
      await requestChangePassword(changeId);
      console.log("비밀번호 변경 메일 발송");
    } catch (error) {
      console.error(error);
    }
  };

  // 토큰 생성 테스트
  const getTokenTest = async () => {
    try {
      const result = GetToken();
      console.log(result);
    }catch(error) {
      console.error(error);
    }
  }
  // 토큰 갱신 테스트
  const tokenRefreshTest = async () => {
    try {
      const result = await tokenRefresh();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // 내가 쓴 댓글 가져오기 테스트
  const getCommentTest = async () => {
    const userName = 'iw1gneie52l2et5';
    try {
      const allComments = await getComment(userName);
      console.log(allComments);
    } catch (error) {
      console.error(error);
    }
  };

  // 마이 로그 가져오기 테스트
  const getMyLogTest = async () => {
    const logTestId = "hwby3y9jmyu5imx";
    try {
      const result = await getMyLogTests(logTestId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // 관심 로그 가져오기 테스트
  const getInterestLogTest = async () => {
    const interestTestId = "iw1gneie52l2et5";
    try {
      const result = await getInterestLog(interestTestId);
      console.log(result);
    }catch(error){
      console.error(error);
    }
  }

  return (
    <div>
      <label>이메일 : </label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <label>비밀번호 : </label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <button className="bg-blue-500" onClick={handleLogin}>
        로그인
      </button>
      <br /><br />

      <button onClick={getCommentTest}>댓글 가져오기 테스트</button>
      <br /><br />

      <button onClick={handleSignup}>회원가입</button>
      <br /><br />

      <button onClick={verifyEmailHandler}>이메일 인증요청</button>
      <br /><br />

      <button onClick={deleteUserHandle}>회원삭제</button>
      <br /><br />

      <button onClick={profileHandle}>프로필 정보</button>
      <br /><br />

      <button onClick={updateUserHandle}>프로필 정보 변경</button>
      <br /><br />

      <button onClick={createReplyHandle}>댓글 생성</button>
      <br /><br />

      <button onClick={updateReplyTest}>댓글 수정 테스트</button>
      <br /><br />

      <button onClick={deleteReplyTest}>댓글 삭제 테스트</button>
      <br /><br />

      <button onClick={changePasswordTest}>비밀번호 재설정</button>
      <br /><br />

      <button onClick={getTokenTest}>토큰 생성</button>
      <br /><br />

      <button onClick={tokenRefreshTest}>토큰 갱신</button>
      <br /><br />

      <button onClick={getMyLogTest}>마이로그 가져오기</button>
      <br /><br />

      <button onClick={getInterestLogTest}>관심로그 가져오기</button>
      <br /><br />

    </div>
  );
}
