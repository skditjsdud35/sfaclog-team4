import pb from "../pocketbase"

export interface resumeReqTypes {
    resume_name: string;
    resume_link: string;
  }

export const getResume =  async (user_id : string) => {
    try {
        const record = await pb.collection('resume').getFullList({
            filter: `user_id = "${user_id}"`
        });
        return record
      } catch (error) {
        console.error(error);
    }
}

export const createResume = async (data : resumeReqTypes) => {
    try {
        const record = await pb.collection('resume').create(data);
        return record
      } catch (error) {
        console.error(error);
    }
}

export const deleteResume = async (resume_id : string) => {
    try {
        const record = await pb.collection('resume').delete(resume_id);
        return record
      } catch (error) {
        console.error(error);
    }
}