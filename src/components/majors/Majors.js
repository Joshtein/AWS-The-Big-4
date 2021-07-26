import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import MajorsHero from './_MajorsHero';
import LandingNavbar from '../LandingNavbar';

const useStyle = makeStyles((style) => ({
  univInformation: {
    backgroundColor: "#f8f8f8",
  }
}))

function Majors() {
  const classes = useStyle();

  return (
    <Fragment>
      <LandingNavbar/>
      <MajorsHero/>

      <Box p={8} classes={{root: classes.univInformation}}>
        <Typography align="center" variant="h6" paragraph>
          Majors in Indonesia
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary">Hello World</Typography>
          </CardContent>
        </Card>
      </Box>
    </Fragment>
  )
};

export default Majors;