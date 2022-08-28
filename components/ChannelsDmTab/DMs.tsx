import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";


function DMs() {
  return (
    <div className="channel-dms-tab">
        {/* Header */}
        <div className="channel-dms-header">
            <input 
                className="rounded-md focus:outline-none pl-[7px] bg-zinc-800 text-gray-300 placeholder:text-gray-400 placeholder:text-sm cursor-pointer"
                placeholder=" Find or start a conversation..." 
                type="text"
            />
        </div>
        {/* Boddy */}
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
                    <p className="text-zinc-400 text-md group-hover:brightness-125">DIRECT MESSAGES</p>
                    <p className="text-zinc-200 text-3xl mb-2 cursor-pointer">+</p>
                </div>

                {/*LastDms */}
            </div>
        </div>

    </div>
  )
}

export default DMs

