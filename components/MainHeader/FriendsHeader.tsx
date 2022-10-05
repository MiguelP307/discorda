import { PlusCircleIcon, QuestionMarkCircleIcon, InboxIcon, UsersIcon } from "@heroicons/react/solid"



function FriendsHeader( {onChange, state, setVisible} : any) {

  const popupClick = (event) => {
    event.preventDefault();
    setVisible(true);
  }


  const handleClick = (event) => {
    event.preventDefault();
    onChange(event.target.id);
  }

  return (
    <div className="mainHeader">
      {/* Main Buttons*/}
      <div className="flex justify-items-center space-x-6">
        {/* Friends Tag */}
        <div className="flex justify-center items-center border-r space-x-2 px-6 border-zinc-600">
          <UsersIcon className="h-7 text-zinc-400 select-none"/>
          <p className="text-zinc-100 text-xl font-bold mt-[2px] cursor-default select-none">Friends</p>
        </div>

          {/* Buttons */}
          <div className="flex justify-items-center space-x-5">
            {/* Online Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 duration-150 rounded-md cursor-pointer px-2 text-lg ${state === "Online" && "bg-zinc-700 text-zinc-200"} select-none`} id="Online" onClick={handleClick}>Online</p>
            </div>

            {/* All Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 duration-150 rounded-md cursor-pointer px-2 text-lg ${state === "All" && "bg-zinc-700 text-zinc-200"} select-none`} id="All" onClick={handleClick}>All</p>
            </div>

            {/* Pending Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 duration-150 rounded-md cursor-pointer px-2 text-lg ${state === "Pending" && "bg-zinc-700 text-zinc-200"} select-none`} id="Pending" onClick={handleClick}>Pending</p>
            </div>

            {/* Blocked Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 duration-150 rounded-md cursor-pointer px-2 text-lg ${state === "Blocked" && "bg-zinc-700 text-zinc-200"} select-none`} id="Blocked" onClick={handleClick}>Blocked</p>
            </div>

            {/* Add Friend */}
            <div className="ease-in-out hover:scale-105 duration-300">
              <p className="p-[6px] text-white bg-green-700 rounded-md cursor-pointer px-2 text-lg select-none" id="AddFriend" onClick={popupClick}>Add Friend</p>
            </div>
        </div>
      </div>

      {/* Icons Div */}
      <div className="flex justify-items-center space-x-5">
        <PlusCircleIcon className="h-8 text-zinc-400 hover:text-zinc-200 cursor-pointer select-none"/>
        
        <div className="flex justify-items-center border-l border-zinc-600 space-x-5 px-4">
          <InboxIcon className="h-8 text-zinc-400 hover:text-zinc-200 cursor-pointer select-none"/>
          <QuestionMarkCircleIcon className="h-8 text-zinc-400 hover:text-zinc-200 cursor-pointer select-none"/>
        </div>
      </div>
    </div>
  ) 
}

export default FriendsHeader