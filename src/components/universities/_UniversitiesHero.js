import React from 'react';
import { Box, Button, Card, CardMedia, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import HeroImage from "../../assets/UniversitiesHero.png";

const useStyle = makeStyles((style) => ({
  hero: {
    height: "70vh",
  },

  hero_description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  hero_image: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
  }
}))

function UniversitiesHero() {
  const classes = useStyle();

  return (
    <Grid container classes={{root: classes.hero}}>
      <Hidden smDown>
        <Grid item md={6} className={classes.hero_image}/>
      </Hidden>
      <Grid item md={6} classes={{root: classes.hero_description}}>
        <Box p={8}>
          <Box mb={3}>
            <Typography variant="h4">
              Our University Database
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="body1">
              A list of recommended universities from us, Take a look below!
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
};

export default UniversitiesHero;