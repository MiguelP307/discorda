import {
    MicrophoneIcon,
    SpeakerphoneIcon,
    CogIcon,
    MinusCircleIcon
} from "@heroicons/react/solid";
import Image from "next/image";

const currentUser : User = {
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Online",
    userNickname: "Amber",
    userID: "#0001",
    userPendingRequests: 
    [{
        userImage: "/Teste/userPFP_Test.jpg",
        userStatus: "Online",
        userNickname: "Amber",
        userID: "#0001",
        userPendingRequests: [],
    },
    {
        userImage: "/Teste/userPFP_Test.jpg",
        userStatus: "Offline",
        userNickname: "Yoimiya da Wish",
        userID: "#0002",
        userPendingRequests: [],
    },
    {
        userImage: "/Teste/userPFP_Test.jpg",
        userStatus: "Do Not Disturb",
        userNickname: "Collei on Fire",
        userID: "#0003",
        userPendingRequests: [],
    },{
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Online",
      userNickname: "Amber",
      userID: "#0004",
      userPendingRequests: [],
  }]
}



function UserMiniTab() {
  return (
    <div className="channel-dms-userMiniTab">
            
        <div className="flex flex-grow p-1 items-center gap-3 rounded-md h-[56px] hover:brightness-125 hover:bg-zinc-700 cursor-pointer">
            <div className="relative mt-1">
                <Image
                    className="relative rounded-full"
                    src={currentUser.userImage}
                    width={46}
                    height={46}
                />
                <div className="absolute bottom-[2px] right-[-3px] bg-[#2d2d33] rounded-full">
                    <MinusCircleIcon className="h-[23px] p-[2px] text-red-600"/>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p className="text-zinc-300 text-xl font-bold">{currentUser.userNickname}</p>
                <p className="text-zinc-500 text-sm">{currentUser.userID}</p>
            </div>
        </div>

        <div className="flex mr-1">
            <div className="channel-dms-icons-miniTabButton">
                <MicrophoneIcon className="channel-dms-icons-miniTab"/>
            </div>

            <div className="channel-dms-icons-miniTabButton">
                <SpeakerphoneIcon className="channel-dms-icons-miniTab"/>
            </div>

            <div className="channel-dms-icons-miniTabButton">
                <CogIcon className="channel-dms-icons-miniTab"/>
            </div>
        </div>
        
    </div>
  )
}

export default UserMiniTab