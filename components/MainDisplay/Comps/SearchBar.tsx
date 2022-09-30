
function SearchBar({userNum, statusName}) {
  return (
    <div className="flex flex-col">
          <div className="flex justify-center items-center my-4">
              <input 
                  className="rounded-md focus:outline-none p-2 w-full mx-10 pl-[10px] bg-zinc-800 text-gray-300 placeholder:text-gray-400 placeholder:text-lg cursor-text"
                  placeholder="Search" 
                  type="text"
              />
          </div>
          <div className="flex justify-start items-center mx-10 my-4">
              <p className="text-[#9d9da9] font-medium">{statusName} - {userNum}</p>
          </div>
      </div>
  )
}

export function searchUser() {

}

export default SearchBar