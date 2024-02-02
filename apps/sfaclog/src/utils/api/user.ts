import pb from "../pocketbase"
import { ListOptions } from "pocketbase";
import { logFolderTypes, logSelectTypes } from "@/types/log";
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear,format } from "date-fns";

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