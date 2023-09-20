import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CommunityProfile from '../components/CommunityProfile';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
import MainLayout from '../pages/layout/MainLayout';
import Inbox from '../pages/inbox';

export default function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path ='/' element ={ <MainLayout/> } >
                    <Route index element ={ <Home/> } />
                    <Route path ='signin' element ={ <Signin/> } />
                    <Route path ='sigup' element ={ <Signup/> } />
                    <Route path ='u/:username'>
                        <Route index element ={ <Profile/> } />
                        <Route path ='inbox' element ={ <Inbox/> } />
                        <Route path ='settings' element ={ <Settings/> } />
                        <Route path ='admin' element ={ <Admin/> } />
                    </Route>
                    <Route path ='c/:community' element ={ <CommunityProfile/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}