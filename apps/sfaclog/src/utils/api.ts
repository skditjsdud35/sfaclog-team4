import pb from "./pocketbase"
import { userTypes } from "@/types/user";

//회원가입
export const SignUp = (data: userTypes) =>
    pb.collection("users").create(data);
//로그인
export const Login = (email: string, password: string) =>
    pb.collection("users").authWithPassword(email, password);
//토큰
export const GetToken = () => pb.authStore.token;