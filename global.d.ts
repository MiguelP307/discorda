export {};

declare global {
  
    interface User {
        userImage: string;
        userStatus: string;
        userNickname: string;
     }

    interface Users {
        users: [User];
    }
} 
