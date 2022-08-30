
function DMsHeader() {
  return (
    <div className="channel-dms-header">
        <input 
            className="rounded-md focus:outline-none p-1 pl-[7px] bg-zinc-800 text-gray-300 placeholder:text-gray-400 placeholder:text-sm cursor-text"
            placeholder=" Find or start a conversation" 
            type="text"
        />
    </div>
  )
}

export default DMsHeader