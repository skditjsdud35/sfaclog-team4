import pb from "../pocketbase"

// 마이 로그 가져오기
export const getMyLogTests = async (userName: string) => {
  try {
    const result = await pb.collection('posts').getList(1, 1000, {
      filter: `user = "${userName}"`
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

// 관심 로그 가져오기
export const getInterestLog = async (userName: string) => {
  try {
    const result = await pb.collection('posts').getList(1, 1000, {
      filter: `user = "${userName}" && interest_log != " "`
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getMyLogs =  async (id: string, select : logSelectTypes ) => {
  let filter;
  let sortOptions: ListOptions = {};

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




