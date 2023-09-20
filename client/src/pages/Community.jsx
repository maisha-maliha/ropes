import CommunityProfile from '../components/CommunityProfile';
import CreatePost from '../components/CreatePost';
import PostFilter from '../components/PostFilter';
import PostContainer from '../components/PostContainer';

export default function Profile(){
    return (
        <div>
            <CommunityProfile/>
            <CreatePost/>
            <PostFilter/>
            <PostContainer/>
        </div>
    )
}