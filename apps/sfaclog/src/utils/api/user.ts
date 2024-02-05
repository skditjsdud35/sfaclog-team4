import { ListResult, RecordModel } from "pocketbase";
import pb from "../pocketbase";
import { MessageData } from "@/types/message";

// 회원탈퇴
export const deleteUser = (id: string) => pb.collection("users").delete(id);

// 프로필 조회
export const getProfile = (id: string) => {
  try {
    const record = pb.collection("users").getOne(id, {
      expand: "follow(user)",
    });
    console.log("데이터", record);
    return record;
  } catch (error) {
    console.error(error);
  }
};

// 프로필 변경
export const updateProfile = async (id: string, newData: { [key: string]: any }) => {
  try {
    console.log(newData);
    const record = await pb.collection('users').update(id, newData);
    console.log(record);
  } catch (error) {
    console.error(error);
  }
};

// 제안하기
export async function proposal(current: MessageData) {
  const data = {
    ...current,
    message: "제안 요청 드립니다.",
  };
  try {
    const record = await pb.collection("message").create(data);
    console.log("제안 보내기 성공  ", record);
    return record;
  } catch (error) {
    console.error("메세지를 보내지못했습니다.", error);
  }
}

// 팔로워 데이터 캐시 에 저장
// let followCache: ListResult<RecordModel> | null = null;

// 팔로우 조회
export async function getFollow(userId: string) {
  try {
    const records = await pb.collection("follow").getList(1, 1, {
      filter: `user = "${userId}"`,
      fields: "following_account,follower_account, id, user",
    });
    console.log(`팔로우 조회 성공 `, records);

    return records;
  } catch (error) {
    console.error("에러발생 ", error);
    return null;
  }
}

// 팔로워 추가
export async function addFollowing(userId: string, followingId: string) {
  try {
    let userPrevData = await getFollow(userId);
    let followingUserPrevData = await getFollow(followingId);

    console.log(userPrevData?.items[0]);
    const userData = {
      following_account: [
        ...userPrevData?.items[0].following_account,
        followingId,
      ],
    };
    const followingUserData = {
      follower_account: [
        followingUserPrevData?.items[0].follower_account,
        userId,
      ],
    };
    console.log("아이디 ", followingUserPrevData!.items[0].id);
    const userRecord = await pb
      .collection("follow")
      .update(userPrevData!.items[0].id, userData);
    const followerRecord = await pb
      .collection("follow")
      .update(followingUserPrevData!.items[0].id, followingUserData);
    console.log(`팔로우 하기 성공 `, userRecord, followerRecord);
  } catch (error) {
    console.error("에러발생 ", error);
  }
}

// 언팔
export async function removeFollowing(userId: string, followingId: string) {
  try {
    let userPrevData = await getFollow(userId);
    let followingUserPrevData = await getFollow(followingId);
    if (
      userPrevData?.items[0] == undefined ||
      followingUserPrevData?.items[0] == undefined
    ) {
      throw new Error("유저아이디와 상대 아이디를 확인하세요");
    } else {
      const updateUserFollwing =
        userPrevData?.items[0].following_account.filter(
          (id: string) => id !== followingId
        );
      const updateFollowingUserFollwer =
        followingUserPrevData?.items[0].follower_account.filter(
          (id: string) => id !== userId
        );

      console.log("변경된 리스트 ", updateUserFollwing);
      const userData = {
        following_account: [...updateUserFollwing],
      };
      const followingUserData = {
        follower_account: [...updateFollowingUserFollwer],
      };
      const userRecord = await pb
        .collection("follow")
        .update(userPrevData!.items[0].id, userData);
      const followerRecord = await pb
        .collection("follow")
        .update(followingUserPrevData!.items[0].id, followingUserData);
      console.log(`언팔 성공 `, userRecord, followerRecord);
    }
  } catch (error) {
    console.error("에러발생 ", error);
  }
}
