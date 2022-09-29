
function AddFriendTab({visible, setVisible} : any) {

  const closePopUp = (event) => {
      event.preventDefault();
      console.log(event.target.id);
      setVisible(false);
  }

  if(!visible) return null;

  return (
      <div className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-md z-50 flex justify-center items-center" >
        <div className="fixed w-screen h-screen z-50" onClick={closePopUp}></div>

        <div className="flex flex-col w-1/2 h-1/4 bg-[#474750] shadow-lg shadow-black rounded-3xl z-50">
          <div className="flex flex-col m-3 p-2 space-x-2 space-y-3">
            <p className="text-zinc-200 font-bold text-5xl ml-2">ADD FRIEND</p>
            <p className="text-zinc-400 text-xl m-2">You can search your friends with their Discord Tag!</p>
          </div>
          
          {/*Search Bar */}
                <div className="flex justify-center items-center">
                    <input 
                        className="rounded-md focus:outline-none p-2 w-full h-20 mx-6 pl-[10px] bg-zinc-800 text-gray-300 placeholder:text-gray-400 placeholder:text-2xl cursor-text"
                        placeholder="Friend's Discord Tag..." 
                        type="text"
                    />
                </div>
        </div>
      </div>
  )
  
  
}

export default AddFriendTab