import React from "react";
import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className="navigation">
                <NavLink className="navigation__item" to="/numbers">Numbers page</NavLink>
                <NavLink className="navigation__item" to="/dogs">Dogs page</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">MM 2023</footer>
        </>
    )
}

export default Layout;