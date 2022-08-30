import { MinusCircleIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/solid";
import Image from "next/image";
import UserMiniTab from "../../UserMiniTab";



function DMsBody({ users } : Users) {
  return (
    <div className="flex flex-col w-72 h-full">
        <div className="channel-dms-body">


            {/*Buttons*/}
            <div className="flex flex-col w-full gap-1">
                <div className="channel-dms-button">
                    <UserIcon className="channel-dms-icons"/>
                    <p className="channel-dms-button-text">Friends</p>
                </div>
                <div className="channel-dms-button">
                    <ShoppingCartIcon className="channel-dms-icons"/>
                    <p className="channel-dms-button-text">Store</p>
                </div>
            </div>
            

            {/*DMs Tab*/}
            <div className="w-full">


                {/*Add DM */}
                <div className="flex justify-between items-center w-full group">
                    <p className="text-zinc-400 text-md mx-2 font-medium group-hover:brightness-125">DIRECT MESSAGES</p>
                    <p className="text-zinc-200 text-3xl mb-2 cursor-pointer">+</p>
                </div>

                {/*LastDms */}
                <div className="flex flex-col gap-1">
                    {
                        users.map(user => (
                            <div className="flex items-center space-x-3 mx-2">
                                <div className="relative mt-1">
                                    <Image
                                        className="relative rounded-full"
                                        src={user.userImage}
                                        width={40}
                                        height={40}
                                    />
                                    <div className="absolute bottom-[2px] right-[-3px] bg-zinc-700 rounded-full">
                                        <MinusCircleIcon className="h-[23px] p-[2px] text-red-600"/>
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-lg">{user.userNickname}</p>
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