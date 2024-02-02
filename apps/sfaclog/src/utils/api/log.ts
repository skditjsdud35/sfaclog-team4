import pb from "../pocketbase"
import { ListOptions } from "pocketbase";
import { logTypes,logSelectTypes } from "@/types/log";
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear,format } from "date-fns";

//메인 로그 가져오기
export const getLogs =  async (select : logSelectTypes ) => {
    let sortOptions: ListOptions = {};
    let today = new Date();
    let start, end;
  
    switch (select.section) {
      case "popularLogs":
          sortOptions.sort = "+like_count";
          break;
      case "latestLogs":
          sortOptions.sort = "-created";
          break;
      default:
          break;
    }
  
    switch (select.category) {
      case "오늘":
          start = format(startOfDay(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          end = format(endOfDay(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          break;
      case "이번주":
          start = format(startOfWeek(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          end = format(endOfWeek(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          break;
      case "이번달":
          start = format(startOfMonth(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          end = format(endOfMonth(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          break;
      case "이번년도":
          start = format(startOfYear(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          end = format(endOfYear(today), "yyyy-MM-dd HH:mm:ss.SSS") + "Z";
          break;
          default:
            break;
          }
    
    try {
        const record = await pb.collection('posts').getFullList({
          ...sortOptions,
          filter: `category?~"${select.tag}" && created >= "${start}" && created <= "${end}"`,
          expand: "tag"
        });
        return record
      } catch (error) {
        console.error(error);
      }
    }

  //로그 상세 가져오기
  export const getLog =  async (id: string) => {
    try {
      const record = await pb.collection('posts').getOne(id, {
        expand: 'comment'
    });
      return record
    } catch (error) {
      console.error(error);
    }
  }



//로그생성 (로그/속닥)
export const createLog =  async (data : logTypes) => {
    try {
        const record = await pb.collection('posts').create(data);
        return record
      } catch (error) {
        console.error(error);
    }
}

    
//로그수정
export const updateLog =  async (id: string, data : logTypes) =>{
    try {
        const record = await pb.collection('posts').update(id, data);
        return record
      } catch (error) {
        console.error(error);
    }
}


//로그삭제
export const deleteLog =  async (id : string) => {
    try {
        const record = await pb.collection('posts').delete(id);
        return record
      } catch (error) {
        console.error(error);
    }
}