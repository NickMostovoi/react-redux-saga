import React from "react";
import {NavLink, Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <header className="navigation">
                <NavLink className="navigation__item" to="/numbers">Numbers page</NavLink>
                <NavLink className="navigation__item" to="/dogs">Dogs page</NavLink>
                <NavLink className="navigation__item" to="/posts">Posts page</NavLink>
                <NavLink className="navigation__item" to="/countries">Countries page</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">MM 2023</footer>
        </>
    )
}

export default Layout;