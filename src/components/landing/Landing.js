import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LandingNavbar from '../LandingNavbar';
import LandingHero from './_LandingHero';
import { Box, Grid } from '@material-ui/core';
import News from './_News';
import FeaturedRecommendation from './_FeaturedRecommendation';
import { Fragment } from 'react';
import Copyright from '../_Copyright';

const useStyles = makeStyles((theme) => ({
  landingInformation: {
    backgroundColor: "#f8f8f8",
  }
}))

function Landing() {
  const classes = useStyles();

  return (
    <Fragment>
      <LandingNavbar/>
      <LandingHero/>
      
      <Box p={4} classes={{root: classes.landingInformation}}>
        <Grid container>
          <Grid item md={7}>
            <Box p={4}>
              <News/>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box p={4}>
              <FeaturedRecommendation/>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Copyright bgColor="#32499E" textColor="white"/>
    </Fragment>
  )
}


export default Landing;