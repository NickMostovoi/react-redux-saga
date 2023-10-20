import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPosts, changeSortOrder} from "../../redux/actions";
import {sortedPostsSelector} from "../../redux/useSelectors";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(sortedPostsSelector);
    const [showPosts, setShowPosts] = useState(false);

    useEffect(() => {
        if (posts.length) {
            setShowPosts(true)
        }
    }, [posts])

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    const onSort = () => {
        dispatch(changeSortOrder());
    }

    return (
        <div className="posts">
            {showPosts && <button className="posts__sort" onClick={onSort}>&#9650; &#9660;</button>}
            {showPosts &&
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`} className="posts__link">{post.id} - {post.title}</Link>
                        </li>
                    ))}
                </ul>
            }
            {posts.error && <div className="error posts__error">{posts.error}</div>}
        </div>
    );
}

export default Posts;