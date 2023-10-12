import React from "react";
import {Container, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {loadersReducer, newsReducer} from "../../redux/useSelectors";
import Header from "./header";
import NewsCard from "./newsCard";

function News() {
    const loader = useSelector(loadersReducer);
    const news = useSelector(newsReducer);

    return (
        <div className="news">
            <Header />

            <Container sx={{mt: 2.5}}>
                <Grid container spacing={2}>
                    <NewsCard news={news} />
                </Grid>
            </Container>

            {loader.showLoader && <div className="loader news__loader">Loading...</div>}
            {news.error && <div className="error news__error">{news.error}</div>}
        </div>
    );
}

export default News;