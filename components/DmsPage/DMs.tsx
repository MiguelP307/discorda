import FriendsHeader from "../MainHeader/FriendsHeader";
import DMsBody from "./Comps/DMsBody";
import DMsHeader from "./Comps/DMsHeader";
import { useState} from "react";
import FriendsTab from "../MainDisplay/Comps/FriendsTab";
import ActiveNowTab from "../MainDisplay/Comps/ActiveNowTab";
import AllTab from "../MainDisplay/Comps/AllTab";
import PendingTab from "../MainDisplay/Comps/PendingTab";
import BlockedTab from "../MainDisplay/Comps/BlockedTab";
import AddFriendTab from "../MainDisplay/Comps/AddFriendTab";


const currentUser : User = {
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0001",
  userFriendList: 
  [{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Online",
    userNickname: "Amberr",
    userID: "#0001",
    userPendingRequests: [],
    userFriendList: [],
  userBlockedUsers: [],
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Offline",
      userNickname: "Yoimiya da Wish",
      userID: "#0002",
      userPendingRequests: [],
      userFriendList: [],
  userBlockedUsers: [],
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Do Not Disturb",
      userNickname: "Collei on Fire",
      userID: "#0003",
      userPendingRequests: [],
      userFriendList: [],
  userBlockedUsers: [],
  },{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Online",
    userNickname: "Amber",
    userID: "#0004",
    userPendingRequests: [],
    userFriendList: [],
  userBlockedUsers: [],
  },
  {
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Offline",
    userNickname: "Yoimiya da Wish",
    userID: "#0005",
    userPendingRequests: [],
    userFriendList: [],
  userBlockedUsers: [],
  },
  {
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Do Not Disturb",
    userNickname: "Collei on Fire",
    userID: "#0006",
    userPendingRequests: [],
    userBlockedUsers: [],
    userFriendList: [],
  },{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0007",
  userPendingRequests: [],
  userFriendList: [],
  userBlockedUsers: [],
  }],

  userPendingRequests: 
  [{
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Online",
      userNickname: "Amber",
      userID: "#0001",
      userPendingRequests: [],
      userFriendList: [],
      userBlockedUsers: [],
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Offline",
      userNickname: "Yoimiya da Wish",
      userID: "#0002",
      userPendingRequests: [],
      userFriendList: [],
      userBlockedUsers: [],
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Do Not Disturb",
      userNickname: "Collei on Fire",
      userID: "#0003",
      userPendingRequests: [],
      userFriendList: [],
      userBlockedUsers: [],
  },{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Online",
    userNickname: "Amber",
    userID: "#0004",
    userPendingRequests: [],
    userFriendList: [],
    userBlockedUsers: [],
}],
  userBlockedUsers: [
      {
          userImage: "/Teste/userPFP_Test.jpg",
          userStatus: "Do Not Disturb",
          userNickname: "Collei on Fire",
          userID: "#0003",
          userPendingRequests: [],
          userFriendList: [],
          userBlockedUsers: [],
      },{
        userImage: "/Teste/userPFP_Test.jpg",
        userStatus: "Online",
        userNickname: "Amber",
        userID: "#0004",
        userPendingRequests: [],
        userFriendList: [],
        userBlockedUsers: [],
    }
  ],
}


function DMs() {

  const [ headerButtonsState, setHeaderButtonsState ] = useState("Online");
  const [ isVisible, setIsVisible ] = useState(false);

  
  return (
      <div className="flex flex-col w-full h-full">

          {/* Header */}
            
            <div className="flex w-full h-14 z-50">
                <DMsHeader/>
                <FriendsHeader onChange={setHeaderButtonsState} state={headerButtonsState} setVisible={setIsVisible}/>
            </div>
            

          {/* Boddy */}
          
          <div className="flex h-full w-full overflow-hidden">
              <DMsBody users={currentUser.userFriendList} Route="DMs"/>

              {headerButtonsState === "Online" && (
                <div className="flex flex-grow h-full">
                  <FriendsTab users={currentUser.userFriendList}/>
                </div>
              )}

              {headerButtonsState === "All" && (
                <div className="flex flex-grow h-full">
                  <AllTab users={currentUser.userFriendList}/>
                </div>
              )}

              {headerButtonsState === "Pending" && (
                <div className="flex flex-grow h-full">
                  <PendingTab users={currentUser.userPendingRequests}/>
                </div>
              )}

              {headerButtonsState === "Blocked" && (
                <div className="flex flex-grow h-full">
                  <BlockedTab users={currentUser.userBlockedUsers}/>
                </div>
              )}

              <AddFriendTab visible={isVisible} setVisible={setIsVisible}/>
              
              <ActiveNowTab/>
          </div>
      </div>
    
  )
}

export default DMs

