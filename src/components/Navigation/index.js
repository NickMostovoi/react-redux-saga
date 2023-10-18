import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from './layout'
import Jokes from "../Jokes";
import Dogs from "../Dogs";
import Posts from "../Posts";
import Post from "../Posts/post";
import Countries from "../Countries";

function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="jokes" element={<Jokes />}/>
                <Route path="dogs" element={<Dogs />}/>
                <Route path="posts" element={<Posts />}/>
                <Route path="posts/:id" element={<Post />}/>
                <Route path="countries" element={<Countries />}/>
                <Route path="*" />
            </Route>
        </Routes>
    )
}

export default Navigation;