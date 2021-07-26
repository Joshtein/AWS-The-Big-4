import React from 'react';
import { connect } from 'react-redux'
import { Box, Button, Card, CardMedia, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import HeroImage from "../../assets/HeroImage.png";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "80vh",
  },
  hero_image: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
  },
  hero_description_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  }
}))

function LandingHero({status}) {
  const classes = useStyles();
  const route = ((status === false) ? "/login" : "/recommendation");
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
            <Typography variant="body1">
              Get the best recommendation to your dream university, for free.
            </Typography>
          </Box>
          <Button component={RouterLink} to={route} color="primary" variant="contained">
            Get Started &ndash; Predict Now!
          </Button>
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid item md={6} className={classes.hero_image}/>
      </Hidden>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    status: state.statusLoggedIn
  }
}

export default connect(mapStateToProps)(LandingHero); 