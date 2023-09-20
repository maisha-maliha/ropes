import react from 'react';


export default function CreatePost() {
    return (
        <div className='py-4 px-4 w-11/12 max-w-2xl my-5 mx-auto bg-cyan-900 '>
            {/* <div className='w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden col-start-1 col-end-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1694605547790-d7d1be3caab1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" />
            </div> */}
            <div className='col-start-2 col-end-6 w-full'>
                <form className='md:grid md:grid-cols-5' action='' method='POST'>
                    <input className='w-full mb-2 p-3 md:col-start-1 md:col-end-6 text-cyan-100 rounded focus:outline-none border-2 border-cyan-400 bg-cyan-900' type="text" name="title" placeholder='Post Title' />
                    <textarea className='w-full h-24 mb-2 p-3 md:col-start-1 md:col-end-6 text-cyan-100 rounded focus:outline-none border-2 border-cyan-400 bg-cyan-900' name="title" placeholder='Post Description'></textarea>
                    <select className='py-2 px-4 md:mb-0 mb-3 w-40 md:col-start-1 md:col-end-2 rounded text-slate-400 bg-cyan-950' name="community" id="">
                        <option value="profile">u/profile</option>
                        <option value="askanything">c/askanything</option>
                        <option value="gaming">c/gaming</option>
                        <option value="richpeoplegettingricher">c/richpeoplegettingricher</option>
                    </select>
                    <button className='py-2 px-6 md:mb-0 mb-2 md:col-start-5 md:col-end-6 rounded block text-xl bg-cyan-400 text-cyan-950' type='submit'>Post</button>
                </form> 
            </div>
        </div>
    );
}