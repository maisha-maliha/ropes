import { Link } from "react-router-dom"
export default function Navbar(){

    return (
        <div className="bg-cyan-900 p-4">
            <div className="flex justify-between items-center">
                <div className="flex text-cyan-100">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                    <h1 className="text-bold text-xl md:text-2xl"> Ropes</h1>
                </div>
                <div>
                    <select className='py-2 px-4 md:mb-0 mb-3 md:w-60 w-36 md:col-start-1 md:col-end-2 rounded text-slate-400 bg-cyan-950' name="community" id="">
                        <option value="home"> Home</option>
                        <option value="u/profile"> u/profile</option>
                        <option value="c/askanything"> c/askanything </option>
                        <option value="c/gaming"> c/gaming </option>
                        <option value="c/richpeoplegettingricher">c/richpeoplegettingricher</option>
                    </select>
                </div>
                <div className="flex text-cyan-400">
                    <Link to='/u/fj/inbox'><svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" /></svg></Link>
                    <Link to='/u/dsrg'><svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg></Link>
                </div>
            </div>
        </div>
    )
}