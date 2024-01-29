import pb from "./pocketbase"
import { userTypes } from "@/types/user";


export const SignUp = (data: userTypes) =>
    pb.collection("users").create(data);

export const Login = (email: string, password: string) =>
    pb.collection("users").authWithPassword(email, password);

export const GetToken = () => pb.authStore.token;