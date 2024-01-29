import pb from "../pocketbase"

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