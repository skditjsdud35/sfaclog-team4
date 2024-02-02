import { AuthModel } from "pocketbase";
import pb from "../pocketbase"
import { userTypes } from "@/types/user";

//로그인
export const Login = async (email: string, password: string) =>
    await pb.collection("users").authWithPassword(email, password);

//소셜로그인
export const socialLogin = async (provider: string) => {
  try {
    const authData = await pb.collection('users').authRefresh({ provider: 'google' });
  
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
}

// 회원가입
export const SignUp = async (data: userTypes) =>
    await pb.collection("users").create(data);

// 토큰생성
export const GetToken = async () => await pb.authStore.token;

// 토큰 갱신
export const tokenRefresh = async () => {
  try {
    await pb.collection('users').authRefresh();
    const updatedToken = await GetToken();
    return updatedToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 이메일 인증
export const verifyEmail = async (email:string) => {
  await pb.collection('users').requestVerification(email);
};

// 비밀번호 변경
export const requestChangePassword = async (email:string) => 
  await pb.collection('users').requestPasswordReset(email);
