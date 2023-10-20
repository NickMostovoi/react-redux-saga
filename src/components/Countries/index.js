import React, {useEffect, useState} from "react";
import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {countriesReducer, loadersReducer} from "../../redux/useSelectors";
import Header from "./header";
import CountryCard from "./countryCard";
import {fetchCountries} from "../../redux/actions";

function Countries() {
    const dispatch = useDispatch();
    const loader = useSelector(loadersReducer);
    const countries = useSelector(countriesReducer);
    const [countriesForRender, setCountriesForRender] = useState([]);
    const [resultCounter, setResultCounter] = useState(0);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch])

    useEffect(() => {
        if (countries.filteredCountries) {
            setCountriesForRender(countries.filteredCountries)
            setResultCounter(countries.filteredCountries.length)
        } else {
            setCountriesForRender(countries.countries)
            setResultCounter(countries.countries.length)
        }
    }, [countries]);

    return (
        <div className="countries">
            <Header resultCounter={resultCounter} />

            <Container sx={{mt: 2.5, mb: 6}}>
                <Grid container spacing={2}>
                    <CountryCard countries={countriesForRender} />
                </Grid>
            </Container>

            {loader.showLoader && <div className="loader news__loader">Loading...</div>}
            {countries.error && <div className="error news__error">{countries.error}</div>}
        </div>
    );
}

export default Countries;