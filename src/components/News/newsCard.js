import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
import React from "react";

function NewsCard({news}) {
    const getFormattedDate = (publicationDate) => {
        const date = new Date(publicationDate);
        const year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        if (month <= 9) {
            month = `0${month}`;
        }

        if (day <= 9) {
            day = `0${day}`;
        }

        return `${year}.${month}.${day}`;
    };

    return (
        <>
            {news.news && news.news.map((item, idx) => (
                <Grid item xs={2} sm={4} md={4} key={idx} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <Card sx={{maxWidth: 360}}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.urlToImage}
                            alt="img"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{mb: 10, justifyContent: 'center'}}>
                            <Button href={item.url}>Open article</Button>
                        </CardActions>

                        <CardContent sx={{
                                position: 'absolute',
                                bottom: 0
                            }}
                        >
                            <Typography>
                                {getFormattedDate(item.publishedAt)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.author}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default NewsCard;