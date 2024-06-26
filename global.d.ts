export {};

declare global {
  
    interface User {
        userImage: string;
        userStatus: string;
        userNickname: string;
        userID: string;
        userFriendList: User[];
        userPendingRequests: User[];
        userBlockedUsers: User[];
     }


    interface Users {
        users: User[];
    }
} 


// Profile idea
interface TestUser{

    userProfile: Profile;
    userID: string;
    userStatus: string;
    userFriends: [User];
    userDMs: [User];
    
}

interface Profile {
    userNickname: string;
    userTag: string;
    userImage: string;
    userDescription: string;
    userPendingRequest: [Users];
}