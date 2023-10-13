import {AppBar, Toolbar, Typography, TextField} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {countriesReducer} from "../../redux/useSelectors";
import {filterCountries} from "../../redux/actions";

function Header({resultCounter}) {
    const dispatch = useDispatch();
    const countries = useSelector(countriesReducer);
    const [searchValue, setSearchValue] = useState('');

    const findCountry = (event) => {
        setSearchValue(event.target.value);
        let search = event.target.value.toLowerCase();
        const filteredCountries = countries.countries.filter((country) => {
            return country.name.official.toLowerCase().includes(search);
        });

        dispatch(filterCountries(filteredCountries));
    }

    return (
        <AppBar position="static" sx={{
            height: '90px',
            justifyContent: 'center'
        }}>
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    Countries: {resultCounter}
                </Typography>

                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Search..."
                    type="search"
                    sx={{
                        backgroundColor: 'white',
                        width: '250px',
                        border: 'none',
                        borderRadius: '10px'
                    }}
                    value={searchValue}
                    onChange={findCountry}
                />
            </Toolbar>
        </AppBar>
    )
}

export default Header;