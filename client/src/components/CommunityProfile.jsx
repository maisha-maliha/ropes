export default function CommunityProfile(){
    return (
        <div className="md:p-10 p-4 mt-20 md:pt-20 max-w-2xl w-11/12 mx-auto bg-cyan-400 text-cyan-950">
            <div className="md:relative flex md:flex-row flex-col md:justify-between items-center">
                <div className=" order-2 py-2 px-8 w-28 text-cyan-100 text-xl font-bold rounded bg-cyan-950">JOIN</div>
                <div className=" order-1 w-40 h-40 mb-5 rounded-full overflow-hidden md:absolute md:-top-36 md:left-52">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"/>
                </div>
                <div className=" order-3 font-normal text-xl p-2"> <span className="font-bold">2,22,222</span> followers</div>
            </div>
            <div className="flex flex-col items-center my-4">
                <h2 className="font-bold text-4xl">Ask Anything</h2>
                <p className="font-bold text-cyan-900">c/askanything</p>
            </div>
            <div>
                <p>
                    This group is all about answering your unanswered questions from expert to amatures from people all around the world.
                </p>
            </div>
        </div>
    )
}