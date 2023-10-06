import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPosts} from "../../redux/actions";
import {postsReducer} from "../../redux/useSelectors";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(postsReducer);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div className="posts">
            {posts.posts &&
                <ul>
                    {posts.posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`} className="posts__link">{post.title}</Link>
                        </li>
                    ))}
                </ul>
            }
            {posts.error && <div className="error posts__error">{posts.error}</div>}
        </div>
    );
}

export default Posts;