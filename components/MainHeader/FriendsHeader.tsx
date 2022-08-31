import { PlusCircleIcon, QuestionMarkCircleIcon, InboxIcon, UsersIcon } from "@heroicons/react/solid"


function FriendsHeader() {
  return (
    <div className="mainHeader">

      {/* Main Buttons*/}
      <div className="flex justify-items-center">
        {/* Friends Tag */}
        <div>
          <UsersIcon className="channel-dms-icons"/>
        </div>

          {/* Buttons */}
          <div>
            {/* Online Button */}
            <div>

            </div>

            {/* All Button */}
            <div>

            </div>

            {/* Pending Button */}
            <div>

            </div>

            {/* Blocked Button */}
            <div>

            </div>

            {/* Add Friend */}
            <div>

            </div>
        </div>
      </div>

      {/* Icons Div */}
      <div className="flex justify-items-center">
        <PlusCircleIcon className="channel-dms-icons"/>
        
        <div className="flex justify-items-center">
          <InboxIcon className="channel-dms-icons"/>
          <QuestionMarkCircleIcon className="channel-dms-icons"/>
        </div>
      </div>
    </div>
  )
}

export default FriendsHeader