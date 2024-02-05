// "use client"
// import pb from "@/utils/pocketbase";
// import { useEffect, useState } from "react";


// export default function useVerified() {
//   const [isVerified, setIsVerified] = useState<boolean>(false);

//   useEffect(() => {
//     async function checkVerified() {
//       try {
//         const id = "hwby3y9jmyu5imx";
//         const userData = await pb.collection('users').getOne(id);
//         console.log(userData);
        
//         setIsVerified(userData.verified);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     const isLoggedIn = pb.authStore.isValid;
//     if (isLoggedIn) checkVerified();
//   }, []);

//   return { isVerified };
// }