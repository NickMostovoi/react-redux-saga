import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from './layout'
import Numbers from "../Numbers";
import Dogs from "../Dogs";
import Posts from "../Posts";
import Post from "../Posts/post";
import News from "../News";

function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="numbers" element={<Numbers />}/>
                <Route path="dogs" element={<Dogs />}/>
                <Route path="posts" element={<Posts />}/>
                <Route path="posts/:id" element={<Post />}/>
                <Route path="news" element={<News />}/>
                <Route path="*" />
            </Route>
        </Routes>
    )
}

export default Navigation;