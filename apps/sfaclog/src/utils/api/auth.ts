import { AuthModel } from "pocketbase";
import pb from "../pocketbase";
import { userTypes } from "@/types/user";
import { getProfile } from "./user";

//로그인
export const Login = (email: string, password: string) =>
  pb.collection("users").authWithPassword(email, password);
// console.log(pb.authStore.baseModel);

//소셜로그인
export const socialLogin = async (provider: string) => {
  try {
    const authData = await pb
      .collection("users")
      .authRefresh({ provider: "google" });

    if (pb.authStore.isValid && pb.authStore.model) {
      console.log(pb.authStore.token);
      console.log(pb.authStore.model.id);
    } else {
      console.error("인증이 유효하지 않음");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 회원가입
export const SignUp = async (data: userTypes) => {
  try {
    const record = await pb.collection("users").create(data);
    // 회원가입시 프로필조회를 통해서 follow 레코드 생성
    const followData = {
      user: record.id,
    };
    const res = await pb.collection("follow").create(followData);
    console.log(`유저 팔로우 레코드 생성 ${res}`);
    return record;
  } catch (err) {
    console.error("에러발생", err);
  }
};

// 토큰생성
export const GetToken = () => pb.authStore.token;

// 토큰 갱신
export const tokenRefresh = () => {
  if (pb.authStore.isValid) {
    pb.collection("users").authRefresh();
  }
};

// 이메일 인증요청
export const verifyEmail = (email: string) =>
  pb.collection("users").requestVerification(email);

// 이메일 인증확인
export const verifyEmailCheck = (token: string) => {
  try {
    pb.collection("users").confirmVerification(token);
  } catch (error) {
    console.error(error);
  }
};

// 비밀번호 변경 인증요청
export const requestChangePassword = (email: string) =>
  pb.collection("users").requestPasswordReset(email);

// 비밀번호 재설정
export const changePassword = async (
  TOKEN: string,
  NEW_PASSWORD: string,
  NEW_PASSWORD_CONFIRM: string
): Promise<void> => {
  try {
    let oldAuth: AuthModel | null = null;

    if (pb.authStore.model) {
      oldAuth = pb.authStore.model;
    } else {
      throw new Error("인증 데이터 없음.");
    }

    await pb
      .collection("users")
      .confirmPasswordReset(TOKEN, NEW_PASSWORD, NEW_PASSWORD_CONFIRM);

    await pb.collection("users").authWithPassword(oldAuth.email, NEW_PASSWORD);
  } catch (error) {
    console.error(error);
  }
};
