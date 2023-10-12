import {AppBar, Toolbar, Typography} from "@mui/material";
import Search from "./search";
import React from "react";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    Find what interests you
                </Typography>

                <Search />
            </Toolbar>
        </AppBar>
    )
}

export default Header;