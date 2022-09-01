import { PlusCircleIcon, QuestionMarkCircleIcon, InboxIcon, UsersIcon } from "@heroicons/react/solid"

function FriendsHeader( {onChange}, state : string ) {

  const handleClick = (event) => {
    event.preventDefault();
    onChange(event.target.id);
    console.log(event.target.id);
}

  return (
    <div className="mainHeader">
      {/* Main Buttons*/}
      <div className="flex justify-items-center space-x-6">
        {/* Friends Tag */}
        <div className="flex justify-center items-center border-r space-x-2 px-6 border-zinc-600">
          <UsersIcon className="h-7 text-zinc-400"/>
          <p className="text-zinc-100 text-xl font-bold mt-[2px] cursor-default">Friends</p>
        </div>

          {/* Buttons */}
          <div className="flex justify-items-center space-x-5">
            {/* Online Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 rounded-md cursor-pointer px-2 text-lg ${state === "Online" && "bg-zinc-700"}`} id="Online" onClick={handleClick}>Online</p>
            </div>

            {/* All Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 rounded-md cursor-pointer px-2 text-lg ${state === "All" && "bg-zinc-700"}`} id="All" onClick={handleClick}>All</p>
            </div>

            {/* Pending Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 rounded-md cursor-pointer px-2 text-lg ${state === "Pending" && "bg-zinc-700"}`} id="Pending" onClick={handleClick}>Pending</p>
            </div>

            {/* Blocked Button */}
            <div>
              <p className={`p-[6px] text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 rounded-md cursor-pointer px-2 text-lg ${state === "Blocked" && "bg-zinc-700"}`} id="Blocked" onClick={handleClick}>Blocked</p>
            </div>

            {/* Add Friend */}
            <div>
              <p className={`p-[6px] text-white bg-green-700 rounded-md cursor-pointer px-2 text-lg ${state === "AddFriend" && "text-gree-700 bg-[#474750]"}`} id="AddFriend" onClick={handleClick}>Add Friend</p>
            </div>
        </div>
      </div>

      {/* Icons Div */}
      <div className="flex justify-items-center space-x-5">
        <PlusCircleIcon className="h-8 text-zinc-400 hover:text-zinc-200 cursor-pointer"/>
        
        <div className="flex justify-items-center border-l border-zinc-600 space-x-5 px-4">
          <InboxIcon className="h-8 text-zinc-400 hover:text-zinc-200 cursor-pointer"/>
          <QuestionMarkCircleIcon className="h-8 text-zinc-400 hover:text-zinc-200 cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default FriendsHeader