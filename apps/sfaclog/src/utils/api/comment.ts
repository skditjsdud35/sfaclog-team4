import pb from "../pocketbase"

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