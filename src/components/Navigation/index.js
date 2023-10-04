import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from './layout'
import Numbers from "../Numbers";
import Dogs from "../Dogs";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="numbers" element={<Numbers />}/>
                <Route path="dogs" element={<Dogs />}/>
            </Route>
        </Routes>
    )
}

export default Navigation;