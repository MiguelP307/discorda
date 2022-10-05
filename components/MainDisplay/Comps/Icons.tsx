
function Icons({Icon,UID}:any) {
  return (
    <div className="flex rounded-full h-12 w-12 justify-center items-center bg-zinc-700" id={UID} >
          <div className="z-10 relative" id={UID}>
            <Icon className="h-8 hover:text-white z-10 text-zinc-400 active:hidden"/>
          </div>
    </div>
  )
}

export default Icons