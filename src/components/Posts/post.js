import {useParams, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postsReducer} from "../../redux/useSelectors";
import {fetchPosts} from "../../redux/actions";

function Post() {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector(postsReducer);
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);

    useEffect(() => {
        if (posts.posts?.length) {
            const post = posts.posts.find((post) => {
                return post.id === Number(id);
            });

            setPost(post);
        } else {
            dispatch(fetchPosts());
        }
    }, [id, posts.posts, dispatch]);

    return (
        <div className="post">
            {post && (
                <div className="post__container">
                    <h1 className="post__title">Post #{post.id} - {post.title}</h1>
                    <p className="post__body">{post.body}</p>
                    <button onClick={goBack} className="post__back">GO Back</button>
                </div>
            )}
            {posts.error && <div className="error posts__error">{posts.error}</div>}
        </div>
    )
}

export default Post;