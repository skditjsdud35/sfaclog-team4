import pb from "../pocketbase";

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
