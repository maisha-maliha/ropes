export default function ProfileInfo(){
    return (
        <div className="p-4 max-w-2xl w-11/12 mx-auto my-4 grid grid-cols-1 md:grid-cols-6 justify-items-center bg-cyan-400 text-cyan-950">
            <div className='w-40 h-40 md:ml-6 rounded-full overflow-hidden md:col-start-1 md:col-end-3'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1694215685811-62b2972e3f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" />
            </div>
            <div className="flex justify-between mt-4 md:col-start-3 md:col-end-7">
                <div className="mr-2 text-xl">
                    <div className="font-bold">Name</div>
                    <div className="mb-2">Maisha Maliha tabassum mim</div>
                    <div className="font-bold">Likes</div>
                    <div className="mb-2">240</div>
                </div>
                <div className="ml-2 text-xl">
                    <div className="font-bold">UserName</div>
                    <div className="mb-2">_maisha</div>
                    <div className="font-bold">Birthday</div>
                    <div className="mb-2">29/07/2000</div>
                </div>
            </div>
        </div>
    )
}