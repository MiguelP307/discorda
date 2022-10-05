import { useState } from "react";

function AddFriendTab({visible, setVisible} : any) {

  const [ activeButton, setActiveButton ] = useState(false);

  const closePopUp = (event) => {
      event.preventDefault();
      console.log(event.target.id);
      setVisible(false);
      setActiveButton(false);
  }

  const handleOnChange = (event) => {
    event.preventDefault();

    if(event.target.value != "")
      setActiveButton(true);
    else
      setActiveButton(false);
  }

  if(!visible) return null;

  return (
      <div className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-md z-50 flex justify-center items-center" >
        <div className="fixed w-screen h-screen z-50" onClick={closePopUp}></div>

          <div className="flex flex-col w-1/2 h-1/4 bg-[#474750] shadow-lg shadow-black rounded-2xl z-50">
            <div className="flex flex-col m-3 p-2 space-x-2 space-y-3">
              <p className="text-zinc-200 font-bold text-5xl ml-2 select-none">ADD FRIEND</p>
              <p className="text-zinc-400 text-xl m-2 select-none">You can search your friends with their Discord Tag!</p>
            </div>
            
            {/*Search Bar */}
            <div className="flex justify-center items-center h-20 bg-zinc-800 rounded-lg mx-4">
                
                <input 
                    className="focus:outline-none m-1 p-2 w-full h-full pl-[10px] bg-zinc-800 text-gray-300 placeholder:text-gray-400placeholder:text-2xl cursor-text text-2xl"
                    placeholder="Friend's Discord Tag..." 
                    type="text"
                    onChange={handleOnChange}
                />
                <button className={`rounded-md bg-[#1a5fcf] h-[60px] text-xl font-semibold whitespace-nowrap mx-2 p-3 text-zinc-200 hover:bg-[#164ba1] active:bg-[#113571]  duration-200 ${activeButton === false && "cursor-not-allowed brightness-50"} select-none`} type="submit">
                  Send Friend Request
                </button>
            </div>
        </div>
      </div>
  )
  
  
}

export default AddFriendTab