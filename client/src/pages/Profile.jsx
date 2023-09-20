import ProfileInfo from '../components/ProfileInfo';
import CreatePost from '../components/CreatePost';
import PostFilter from '../components/PostFilter';
import PostContainer from '../components/PostContainer';

export default function Profile(){
    return (
        <div>
            <ProfileInfo/>
            <CreatePost/>
            <PostFilter/>
            <PostContainer/>
        </div>
    )
}