

function SearchBar({userNum, statusName, setnewUsers, users} : any) {

    const getCurrentInput = (event) => {
        event.preventDefault();
        setnewUsers(searchUser(users,event.target.value));
    }

  return (
    <div className="flex flex-col">
          <div className="flex justify-center items-center my-4">
              <input 
                  className="rounded-md focus:outline-none p-2 w-full mx-10 pl-[10px] bg-zinc-800 text-gray-300 placeholder:text-gray-400 placeholder:text-lg cursor-text"
                  placeholder="Search" 
                  type="text"
                  onChange={getCurrentInput}
              />
          </div>
          <div className="flex justify-start items-center mx-10 my-4">
              <p className="text-[#9d9da9] font-medium">{statusName} - {userNum}</p>
          </div>
      </div>
  )
}

function searchUser(users : User[], chatInput : string) {

    let newUsers : User[] = [];
    

    users.map((user) => {

        const name = user.userNickname.toLowerCase();

        if(name.match(chatInput.toLowerCase()) != null)
            newUsers.push(user);
    })

    return newUsers;
}

export default SearchBar