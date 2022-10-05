import { MinusCircleIcon, ShoppingCartIcon, UserIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import UserMiniTab from "../../UserMiniTab";



function DMsBody({users, Route} : any) {

    const router = useRouter();

    const handleClickStore = () => {
        router.push("/store");
    }

    const handleClickFriends = () => {
        router.push("/")
    }

  return (
    <div className="flex flex-col w-72 h-full">
        <div className="channel-dms-body">


            {/*Buttons*/}
            <div className="flex flex-col w-full gap-1">
                <div className={` channel-dms-button ${Route === "DMs" ? "bg-zinc-700 brightness-125" : ""}`} onClick={handleClickFriends}>
                    <UserIcon className="channel-dms-icons select-none"/>
                    <p className="channel-dms-button-text select-none">Friends</p>
                </div>
                <div className={` channel-dms-button ${Route === "Store" && "bg-zinc-700 brightness-125"}`} onClick={handleClickStore}>
                    <ShoppingCartIcon className="channel-dms-icons select-none"/>
                    <p className="channel-dms-button-text select-none">Store</p>
                </div>
            </div>
            

            {/*DMs Tab*/}
            <div className="w-full">


                {/*Add DM */}
                <div className="flex justify-between items-center w-full group">
                    <p className="text-zinc-400 text-md mx-2 font-medium group-hover:brightness-125 cursor-default select-none">DIRECT MESSAGES</p>
                    <p className="text-zinc-200 text-3xl mb-2 cursor-pointer select-none">+</p>
                </div>

                {/*LastDms */}
                <div className="flex flex-col">
                    {
                        users.map(user => (
                            <div className="flex items-center justify-between rounded-lg  hover:brightness-125 hover:bg-zinc-700 hover:shadow-sm group cursor-pointer">
                                <div className="flex items-center space-x-3 p-1 mx-1">
                                    <div className="relative mt-1 select-none">
                                        <Image
                                            className="relative rounded-full select-none"
                                            src={user.userImage}
                                            width={40}
                                            height={40}
                                        />
                                        <div className="absolute bottom-[2px] right-[-3px] bg-zinc-700 rounded-full">
                                            <MinusCircleIcon className="h-[23px] p-[2px] text-red-600 select-none"/>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 text-lg select-none">{user.userNickname}</p>
                                </div>
                                
                                <XIcon className="invisible group-hover:visible h-5 text-zinc-400 mx-3 hover:text-zinc-300  select-none"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        {/* UserMiniTab */}
        <UserMiniTab/>
    </div>

  )
}

export default DMsBody