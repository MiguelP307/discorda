import ActiveNowTab from "./Comps/ActiveNowTab"
import FriendsTab from "./Comps/FriendsPage/FriendsTab";

function FriendsPage({users} : Users) {
  return (
    <div className="flex flex-grow h-full">
        <FriendsTab users={users}/>
        <ActiveNowTab/>
    </div>
  )
}

export default FriendsPage