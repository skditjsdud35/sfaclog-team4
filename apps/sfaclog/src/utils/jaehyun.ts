// USER , LOG , MESSAGE
import { MessageData } from "@/types/message";
import pb from "./pocketbase";
import { ListResult, RecordModel } from "pocketbase";

// 메세지 보내기

export async function sendMessage(data: MessageData) {
  try {
    const record = await pb.collection("message").create(data);
    console.log("메세지 보내기 성공 ", record);
    return record;
  } catch (error) {
    console.error("메세지를 보내지못했습니다.", error);
  }
}

// 전체 메세지 읽어오기
export const readAllMessage = async (userId: string) => {
  try {
    const res = await pb.collection("message").getList(1, 50, {
      filter: `receiver = "${userId}"`,
    });
    console.log(res);
  } catch (err) {
    console.error("메세지 를 읽어오지못했습니다. ", err);
  }
};

// 단일 메세지 읽기
export const readSingleMessage = async (messageId: string) => {
  try {
    const res = await pb.collection("message").getList(1, 50, {
      filter: `id = "${messageId}"`,
    });
    console.log(res);
  } catch (err) {
    console.error("메세지 를 읽어오지못했습니다. ", err);
  }
};

// 단일 메세지 삭제

export const removeMessage = async (messageId: string) => {
  try {
    const res = await pb.collection("message").delete(messageId);

    console.log(res);
  } catch (err) {
    console.error("메세지 를 읽어오지못했습니다. ", err);
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
let followCache: ListResult<RecordModel> | null = null;

// 팔로우 조회
export async function getFollow(
  userId: string
): Promise<ListResult<RecordModel> | null> {
  try {
    if (!followCache) {
      const records = await pb.collection("follow").getList(1, 1, {
        filter: `user = "${userId}"`,
        fields: "following_account,follower_account, id",
      });
      followCache = records;
      console.log(`팔로우 조회 성공 `, records);
    }
    return followCache;
  } catch (error) {
    console.error("에러발생 ", error);
    return null;
  }
}

// 팔로워 추가
export async function addFollowing(userId: string, followingId: string) {
  try {
    const res = await getFollow(userId);
    if (res) {
      const data = {
        user: userId,
        following_account: [...res?.items[0].following_account, followingId],
      };
      const record = await pb
        .collection("follow")
        .update(res!.items[0].id, data);
      console.log(`팔로우 하기 성공 `, record);
      return record;
    }
  } catch (error) {
    console.error("에러발생 ", error);
  }
}

// 언팔
export async function removeFollowing(userId: string, followingId: string) {
  try {
    const res = await getFollow(userId);
    if (res) {
      const updatedFollowing = res.items[0].following_account.filter(
        (id: string) => id !== followingId
      );
      const data = {
        user: userId,
        following_account: [...updatedFollowing],
      };
      const record = await pb
        .collection("follow")
        .update(res!.items[0].id, data);
      // 팔로우 삭제 후 캐시 업데이트
      followCache = await getFollow(userId);

      console.log(`팔로우 삭제 성공 `, record);
      return record;
    }
  } catch (error) {
    console.error("에러발생 ", error);
  }
}

// 인기로거 조회

export const readPopularLogger = async () => {
  try {
    const records = await pb.collection("posts").getList(1, 6, {
      sort: "+post_view",
    });
    console.log(records);
    return records;
  } catch (err) {
    console.error("에러 발생했습니다" + err);
  }
};
