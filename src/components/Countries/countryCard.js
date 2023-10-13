import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";

function CountryCard({countries}) {
    return (
        <>
            {Boolean(countries.length) && countries.map((item, idx) => (
                <Grid item xs={2} sm={4} md={4} key={idx} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <Card sx={{width: 350}}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.flags.png}
                            alt="img"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {item.name.official}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Capital: {item.capital}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Start Of Week: {item.startOfWeek}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Population: {item.population}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Continents: {item.continents.join(', ')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Languages: {item.languages && Object.values(item.languages).join(', ')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Currencies: {item.currencies && Object.keys(item.currencies).join(', ')}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{mb: 5, justifyContent: 'center'}}>
                            <Button href={item.maps.googleMaps}>Open on map</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default CountryCard;