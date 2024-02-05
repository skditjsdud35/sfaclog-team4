import { commentData } from "@/types/comment";
import pb from "../pocketbase"


// 내가쓴 댓글 가져오기
export const getComment = async (userName:string) => {
  try {
    const comments = await pb.collection('comment').getList(1, 1000, {
      filter : `user = "${userName}"`
    });
    return comments;
  } catch (error) {
    console.error(error);
  }
};

// 댓글 생성
export const createComment = async (data: commentData) => {
  try {
    const record = await pb.collection('comment').create(data);
    return record;
  } catch (error) {
    console.error('Create comment error:', error);
    throw error;
  }
};


// 댓글 수정
export const updateComment = async (id:string, data:commentData) => {
  try {
    const record = await pb.collection('comment').update(id, data);
    return record;
  } catch (error) {
    console.error(error);
  }
};

// 댓글 삭제
export const deleteComment = async (id:string) =>
  await pb.collection('comment').delete(id);