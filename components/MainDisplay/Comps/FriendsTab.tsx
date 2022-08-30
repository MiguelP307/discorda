import { ChatIcon, DotsVerticalIcon, MinusCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Icons from "./Icons";


function FriendsTab({users} : Users) {
  return (
    <div className="flex flex-col flex-grow bg-[#474750]">

        {/*Search tab */}
        <div className="flex flex-col">
            <div className="flex justify-center items-center my-4">
                <input 
                    className="rounded-md focus:outline-none p-2 w-full mx-10 pl-[10px] bg-zinc-800 text-gray-300 placeholder:text-gray-400 placeholder:text-lg cursor-text"
                    placeholder="Search" 
                    type="text"
                />
            </div>
            <div className="flex justify-start items-center mx-10 my-4">
                <p className="text-[#9d9da9] font-medium">ONLINE - {users.length}</p>
            </div>
        </div>
        {/* Friends List Online */}
        <div className="flex flex-col overflow-scroll">
            {
                users.map(user => (
                    <div className="flex items-center mx-10 border-t-[1.9px] group border-[#54545e] hover:bg-[#595965] rounded-lg justify-between cursor-pointer">
                        <div className="flex items-center p-2 space-x-4">
                            {/*Pfp */}
                            <div className="flex">
                                <div className="relative mt-1">
                                    <Image
                                        className="relative rounded-full"
                                        src={user.userImage}
                                        width={46}
                                        height={46}
                                    />
                                    <div className="absolute bottom-[2px] right-[-3px] bg-[#474750] group-hover:bg-[#595965]  rounded-full">
                                        <MinusCircleIcon className="h-[23px] p-[2px] text-red-600"/>
                                    </div>
                                </div>
                            </div>

                            {/*Name and Status */}
                            <div className="flex flex-col">
                                <p className="text-zinc-200 text-xl font-bold">{user.userNickname}</p>
                                <p className="text-zinc-400 font-medium">{user.userStatus}</p>
                            </div>
                        </div>
                        
                        {/*Icons */}
                        <div className="flex justify-center items-center p-2 space-x-3 mr-1">
                            <Icons Icon={ChatIcon}/>
                            <Icons Icon={DotsVerticalIcon}/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FriendsTab