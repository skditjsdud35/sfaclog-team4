import pb from "./pocketbase"
import { userTypes } from "@/types/user";

export const reqSignUp = (data: userTypes) =>
    pb.collection("users").create(data);

export const reqLogin = (email: string, password: string) =>
    pb.collection("users").authWithPassword(email, password);

export const reqGetToken = () => pb.authStore.token;