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
                <Route path="react-redux-saga/jokes" element={<Jokes />}/>
                <Route path="react-redux-saga/dogs" element={<Dogs />}/>
                <Route path="react-redux-saga/posts" element={<Posts />}/>
                <Route path="react-redux-saga/posts/:id" element={<Post />}/>
                <Route path="react-redux-saga/countries" element={<Countries />}/>
                <Route path="*" />
            </Route>
        </Routes>
    )
}

export default Navigation;