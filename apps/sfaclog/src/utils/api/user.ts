import pb from "../pocketbase"
import { ListOptions } from "pocketbase";
import { logFolderTypes, logSelectTypes } from "@/types/log";
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear,format } from "date-fns";
import { ListResult, RecordModel, ListOptions } from "pocketbase";
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


//마이 로그 시리즈별 가져오기
export const getSeries = async (id: string) => {
  try {
    const record = await pb.collection('posts').getOne(id, {
      expand: 'series',
    });
    return record;
  } catch (error) {
    console.error(error);
  }
}

//관심 로그 컬렉션별 가져오기
export const getCollection = async (id: string) => {
  try {
    const record = await pb.collection('posts').getOne(id, {
      expand: 'interest_log',
    });
    return record
  } catch (error) {
    console.error(error);
  }
}

//마이 로그,관심 로그 가져오기
export const getMyLogs =  async (id: string, select : logSelectTypes ) => {
  let filter;
  let sortOptions: ListOptions = {};

  if (select.section == "myLogs" && select.category == "시리즈별") {
    return getSeries(id)
  } else if (select.section == "interestLogs" && select.category == "폴더별"){
    return getCollection(id)
  } else {

      switch (select.section) {
        case "myLogs":
            filter = `series_dir_id != '' && user='${id}'`;
            break;
        case "interestLogs":
            filter = `interest_dir_id != '' && user='${id}'`;
            break;
        default:
            filter = "";
            break;
      }

      switch (select.category) {
        case "최신순":
            sortOptions.sort = "-created";
            break;
        case "오래된순":
            sortOptions.sort = "+created";
            break;
        case "인기순":
            sortOptions.sort = "+like_view";
            break;
        case "최근 추가순":
            sortOptions.sort = "-interest_log.created";
            break;
        default:
            break;
      }

      try {
        const record =  await pb.collection('posts').getFullList({
          ...sortOptions,
          filter: filter,
          expand: "tag, posts"
        });
        return record
      } catch (error) {
        console.error(error);
      }

    }
}

//관심 로그 만들기
export const createInterestLog =  async (data: logFolderTypes) => {
  try {
    const record = await pb.collection('interest_log').create(data);
    return record
  } catch (error) {
    console.error(error);
  }
}

//관심 로그 추가하기 && 수정하기
export const addInterestLog =  async (id: string, data: logFolderTypes) => {
  try {
    const record = await pb.collection('interest_log').update(id, data);
    return record
  } catch (error) {
    console.error(error);
  } 
}

//관심 로그 폴더 삭제하기 && 관심 로그 삭제하기
export const deleteInterestLog =  async (id: string) => {
  try {
    const record = await pb.collection('interest_log').delete(id);
    return record
  } catch (error) {
    console.error(error);
  }
}

//시리즈 만들기
export const createSeries =  async (data: logFolderTypes) => {
  try {
    const record = await pb.collection('series').create(data);
    return record
  } catch (error) {
    console.error(error);
  }
}

//시리즈 추가하기 && 수정하기
export const addSeries =  async (id:string, data: logFolderTypes) => {
  try {
    const record = await pb.collection('series').update(id, data);
    return record
  } catch (error) {
    console.error(error);
  }
}


//시리즈 폴더 삭제하기 && 시리즈 삭제하기
export const deleteSeries =  async (id: string) => {
  try {
    const record = await pb.collection('series').delete(id);
    return record
  } catch (error) {
    console.error(error);
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
