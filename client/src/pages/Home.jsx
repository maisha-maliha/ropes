import CreatePost from '../components/CreatePost';
import PostFilter from '../components/PostFilter';
import PostContainer from '../components/PostContainer';

export default function Home(){
    return (
        <div>
            <CreatePost/>
            <PostFilter/>
            <PostContainer/>
        </div>
    )
}