import { MinusCircleIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react";
import Icons from "./Icons"
import SearchBar from "./SearchBar";


function PendingTab({users} : Users) {

    let initialUser : User[] = users;

    const [ newUsers, setnewUsers ] = useState(initialUser);

    function pendingRequests() {

        return newUsers.length;
    }
    
  return (
    <div className="flex flex-col flex-grow bg-[#474750]">

      <SearchBar userNum={pendingRequests()} statusName="PENDING" setnewUsers={setnewUsers} users={users} />

        {/* Friends List Online */}
      <div className="flex flex-col overflow-scroll">
          {
              newUsers.map(user => (
                  <div className="flex justify-end items-center mx-10 border-t-[1.9px] group border-[#54545e] hover:bg-[#595965] rounded-lg md:justify-between cursor-pointer" key={user.userID}>
                      <div className="hidden md:inline-flex relative items-center p-2 space-x-4 overflow-hidden whitespace-nowrap">
                          {/*Pfp */}
                          <div className="flex">
                              <div className="relative mt-1">
                                  <Image
                                      className="absolute rounded-full"
                                      src={user.userImage}
                                      width={46}
                                      height={46}
                                  />
                                  <div className="absolute bottom-[2px] right-[-3px] bg-[#474750] group-hover:bg-[#595965] rounded-full">
                                      <MinusCircleIcon className="h-[23px] p-[2px] text-red-600"/>
                                  </div>
                              </div>
                          </div>

                          {/*Name and Status */}
                          <div className="flex flex-col overflow-x-hidden">
                              <div className="flex items-center gap-1">
                                  <p className="text-zinc-200 text-xl font-bold">{user.userNickname}</p>
                                  <p className="opacity-0 group-hover:opacity-100 text-zinc-300 text-lg font-medium mt-[2px]">{user.userID}</p>
                              </div>
                              <p className="text-zinc-400 font-medium">Outgoing Friend Request</p>
                          </div>
                      </div>
                      
                      {/*Icons */}
                      <div className="flex justify-end items-center p-2 z-10 space-x-3 mr-1 bg-[#474750] group-hover:bg-[#595965]">
                          <Icons Icon={XIcon}/>
                      </div>
                      
                        
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default PendingTab