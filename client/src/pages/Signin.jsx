export default function Signup(){
    return (
        <div className="w-full h-full flex justify-center items-center">
            <form className="md:pt-60 pt-10 w-60 h-60" method="post" action="/signin">
            <h2 className="text-2xl font-bold text-cyan-400">SIGN IN</h2>
                <label className="text-xl font-bold text-cyan-400">username:</label>
                <input type="text" name="username" className="w-full my-2 p-2 text-cyan-100 rounded focus:outline-none border-2 border-cyan-400 bg-cyan-900"/>
                <label className="text-xl font-bold text-cyan-400">password</label>
                <input type="password" name="password" className="w-full my-2 p-2 text-cyan-100 rounded focus:outline-none border-2 border-cyan-400 bg-cyan-900"/>
                <button  className="bg-cyan-400 py-2 px-4 text-cyan-900 font-medium">Sign In</button>
            </form>
        </div>
    )
}