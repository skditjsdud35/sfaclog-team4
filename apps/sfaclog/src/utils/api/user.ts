import pb from "../pocketbase"

// 회원탈퇴
export const deleteUser = (id:string) => 
  pb.collection('users').delete(id);

// 프로필 조회
export const getProfile = async (id: string) => {
  try {
    const record = await pb.collection('users').getOne(id, {
      expand: 'username,nickname.introduce,phone,interest_field,sns'
    });
    return record;
  } catch (error) {
    console.error(error);
  }
}

// 프로필 변경
export const updateProfile = async (id: string, newData: { [key: string]: any }) => {
  try {
    console.log(newData);
    const record = await pb.collection('users').update(id, newData);
    console.log(record);
  } catch (error) {
    console.error(error);
  }
}