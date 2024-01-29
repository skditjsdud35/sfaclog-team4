// USER , LOG , MESSAGE
import pb from "./pocketbase";

// 메세지 보내기

interface MessageData {
  sender: string;
  receiver: string;
  message: string;
  is_read: boolean;
}

export async function sendMessage(MessageData: MessageData) {
  const data = {
    ...MessageData,
  };

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