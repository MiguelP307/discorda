import FriendsPage from "../MainDisplay/FriendsPage";
import FriendsHeader from "../MainHeader/FriendsHeader";
import DMsBody from "./Comps/DMsBody";
import DMsHeader from "./Comps/DMsHeader";
import { useState} from "react";



function DMs({users} : Users) {

  const [ headerButtonsState, setHeaderButtonsState ] = useState("Online");

  return (
      <div className="flex flex-col w-full h-full">

          {/* Header */}
          
            <div className="flex w-full h-14 z-50">
                <DMsHeader/>
                <FriendsHeader onChange={setHeaderButtonsState} state={headerButtonsState}/>
            </div>
          

          {/* Boddy */}
          
          <div className="flex h-full w-full overflow-hidden">
              <DMsBody users={users}/>

              {headerButtonsState === "Online" && (
                <FriendsPage users={users}/>
              )}
              
          </div>
      </div>
    
  )
}

export default DMs

