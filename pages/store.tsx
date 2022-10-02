import DMsBody from "../components/DmsPage/Comps/DMsBody";
import DMsHeader from "../components/DmsPage/Comps/DMsHeader";
import ServersTab from "../components/ServersTab/ServersTab";
import { ShoppingCartIcon, GiftIcon } from "@heroicons/react/solid";


const currentUser : User = {
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Online",
    userNickname: "Amber",
    userID: "#0001",
    userFriendList: 
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
  

export default function Store() {

    const route = "Store"

    return (
        <div className='flex h-screen w-screen'>
            <div className='sticky'>
                <ServersTab/>
            </div> 
            <div className="flex flex-col w-full h-full">

                <div className="flex w-full h-14 z-50" >
                    <DMsHeader/>
                    <div className="mainHeader">
                        <div className="flex mx-6 space-x-2 items-center">
                            <ShoppingCartIcon className="text-zinc-400 h-7"/>
                            <p className="text-zinc-100 text-xl font-bold mt-[2px] cursor-default select-none">Nitro</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex h-full">
                    <DMsBody users={currentUser.userFriendList} Route={route}/>

                    <div className="flex w-full h-full bg-[#474750]">
                        <div className="flex flex-col mt-16 items-center w-[840px] mx-auto">

                            {/* Card Example */}
                            <div className="flex flex-col justify-center items-center w-full space-y-5 border-b-2 border-[#54545e] p-16">
                                <h1 className="text-4xl text-zinc-200 font-bold cursor-default select-none">Ready to upgrade to Nitro?</h1>
                                <h2 className="text-lg text-zinc-400 cursor-default select-none">Pick the plan that works best for you and start your emoji collection.</h2>

                                <div className="flex w-full justify-center space-x-10 mr-7 pt-10">
                                    <button className="text-zinc-200 text-xl font-bold flex justify-center items-center rounded-md bg-green-700 p-[17px] px-5 hover:brightness-90 gap-2 group overflow-hidden">
                                        <ShoppingCartIcon className="text-zinc-200 h-6"/>
                                        <div className="absolute h-32 w-16 bg-zinc-400 opacity-0 rotate-[30deg] mr-72 group-hover:translate-x-96 group-hover:duration-1000 group-hover:opacity-50"></div>
                                        <div className="absolute h-32 w-7 bg-zinc-200 opacity-0 rotate-[30deg] mr-72 group-hover:translate-x-96 group-hover:duration-1000 group-hover:opacity-40"></div>
                                        Subscribe
                                    </button>
                                    <button className="text-zinc-200 text-xl font-bold flex justify-center items-center rounded-md bg-zinc-500 p-[17px] px-5 hover:brightness-90 gap-2">
                                        <GiftIcon className="text-zinc-200 h-6"/>
                                        Gift
                                    </button>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}