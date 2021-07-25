import React from 'react';
import { Box, Button, Card, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import HeroImage from "../../assets/HeroImage.png";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "80vh",
  },
  hero_image: {
    width: "100%",
    height: "100%"
  },
  hero_description_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  }
}))

function LandingHero() {
  const classes = useStyles();
  return (
    <Grid container classes={{root: classes.hero}}>
      <Grid item md={6} className={classes.hero_description_container}>
        <Box p={8}>
          <Box mb={3}>
            <Typography variant="h4">
              Welcome to CollegeUp!
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="p">
              Get the best recommendation to your dream university, for free.
            </Typography>
          </Box>
          <Button component={RouterLink} to="/calculator" color="primary" variant="contained">
            Get Started &ndash; Predict Now!
          </Button>
        </Box>
      </Grid>
      <Grid item md={6} mdDown style={{height: "100%"}}>
        <Card style={{height: "100%"}}>
          <CardMedia 
            image={HeroImage} 
            title="HeroImage"
            className={classes.hero_image}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default LandingHero; 