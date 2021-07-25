import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LandingNavbar from '../LandingNavbar';
import LandingHero from './_LandingHero';
import { Box, Grid } from '@material-ui/core';
import News from './_News';
import FeaturedRecommendation from './_FeaturedRecommendation';

function Landing() {
  return (
    <div>
      <LandingNavbar/>
      <LandingHero/>
      <Box p={6}>
        <Grid container>
          <Grid item md={7}>
            <Box p={2}>
              <News/>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box p={2}>
              <FeaturedRecommendation/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}


export default Landing;