import { AuthModel } from "pocketbase";
import pb from "./pocketbase"

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

// 토큰 갱신
export const tokenRefresh = () => {
  if (pb.authStore.isValid) {
    pb.collection('users').authRefresh();
  }
};

// 이메일 인증요청
export const verifyEmail = (email:string) =>
  pb.collection('users').requestVerification(email);

// 이메일 인증확인
export const verifyEmailCheck = (token:string) => {
  try {
    pb.collection('users').confirmVerification(token);
  } catch (error) {
    console.error(error);
  }
}

// 비밀번호 변경 인증요청
export const requestChangePassword = (email:string) => 
  pb.collection('users').requestPasswordReset(email);

// 비밀번호 재설정
export const changePassword = async (
  TOKEN: string,
  NEW_PASSWORD: string,
  NEW_PASSWORD_CONFIRM: string
): Promise<void> => {
  try {
    let oldAuth : AuthModel | null = null;

    if (pb.authStore.model) {
      oldAuth = pb.authStore.model;
    } else {
      throw new Error('인증 데이터 없음.');
    }

    await pb.collection('users').confirmPasswordReset(
      TOKEN,
      NEW_PASSWORD,
      NEW_PASSWORD_CONFIRM
    );

    await pb.collection('users').authWithPassword(oldAuth.email, NEW_PASSWORD);
  } catch (error) {
    console.error(error);
  }
};

// 회원탈퇴
export const deleteUser = (id:string) => 
  pb.collection('users').delete(id);

// 프로필 조회
export const getProfile = (id:string) => {
  try{
    const record = pb.collection('users').getOne(id, {
      expand: 'username,nickname.introduce,phone,interest_field,sns'
    });
  } catch (error) {
    console.error(error);
  }
}

// 프로필 변경
export const updateProfile = (id:string) => {
  const data = {
    "username": "username",
    "nickname": "nickname",
    "introduce": "introduce",
    "phone": "phone",
    "interest_field": ["interest"],
    "sns": ["sns"]
  };

  try {
    const record = pb.collection('users').update(id, data);
    console.log(record);
  } catch (error) {
    console.error(error);
  }
}

// 전체 댓글 가져오기
export const getComments = (id:string) => {
  try {
    const record = pb.collection('comment').getOne(id, {
      expand: '[user, parents_comment, contents, post, created]'
    });
  } catch(error) {
    console.error(error);
  }
}

// 단일 댓글 가져오기
export const getComment = (id:string) => {
  try {
    const record = pb.collection('comment').getOne(id, {
      expand: '[parents_comment, contents, created, post]'
    });
  } catch(error) {
    console.error(error);
  }
}

// 댓글 생성
export const createComment = (
  contents: string[],
  user: string,
  parentsComment: string,
  post: string,
  like: number) => {
    const data = {
      "contents": contents,
      "user": user,
      "parents_comment": parentsComment,
      "post": post,
      "like": like
    };

    try {
      const record = pb.collection('comment').create(data);
    } catch (error) {
      console.error(error);
    }
};

// 댓글 수정
export const updateComment = (
  id: string,
  contents: string[],
  user: string,
  parentsComment: string,
  post: string,
  like: number) => {
    const data = {
      "contents": contents,
      "user": user,
      "parents_comment": parentsComment,
      "post": post,
      "like": like
    };

    try {
      const record = pb.collection('comment').update(id, data);
    } catch (error) {
      console.error(error);
    }
};

// 댓글 삭제
export const deleteComment = (id:string) =>
  pb.collection('comment').delete(id);





