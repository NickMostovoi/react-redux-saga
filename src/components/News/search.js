import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import { fetchNews} from "../../redux/actions";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, InputBase, styled} from "@mui/material";

function Search() {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const getNews = function(event) {
        const ENTER = 13;

        if (event.keyCode === ENTER) {
            let searchValue = event.target.value;

            dispatch(fetchNews(searchValue));
            searchValue = '';
        }
    };

    useEffect(() => {
        inputRef.current?.addEventListener('keydown', getNews);
    }, [inputRef.current, getNews]);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '20ch',
                '&:focus': {
                    width: '25ch',
                },
            },
        },
    }));

    return (
        <Search >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                ref={inputRef}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}

export default Search;