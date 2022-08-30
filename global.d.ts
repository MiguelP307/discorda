export {};

declare global {
  
    interface User {
        userImage: string;
        userStatus: string;
        userNickname: string;
        userID: string;
     }


    interface Users {
        users: [User];
    }
} 
