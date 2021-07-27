import React from 'react';
import { Fragment } from 'react';
import LandingNavbar from '../LandingNavbar';
import {Link as RouterLink} from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import HeroImage from "../../assets/RecommendationHero.jpg";
import FeaturedLoginCardImage from "../../assets/FeaturedRecommendation__Login.png";
import { connect } from 'react-redux';
import RecommendationCard from './_RecommendationCard';
import RecommendationHero from './_RecommendationHero';


const useStyles = makeStyles((theme) => ({
  recommendation_info: {
    backgroundColor: "#f8f8f8",
  },

  hero: {
    height: "100vh",
  },

  hero_description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  hero_image: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
  },

  cardHeroContainer: {
    width: "100%",
    height: "100%",
  },
  
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    minHeight: "280px",
    width: "100%",
  }
}))

function Recommendation(props) {
  const classes = useStyles();
  console.log(props.status);

  return (
    <Fragment>
      <LandingNavbar/>
      <Grid container classes={{root: classes.hero}}>
      <Grid item md={6}>
        <Box p={8} className={classes.hero_description}>
        {
          props.status
          ? <RecommendationCard variant="outlined" classes={{root: classes.cardHeroContainer}}/>
          : <Card variant="outlined" classes={{root: classes.cardHeroContainer}}>
              <CardMedia
                classes={{root: classes.image}}
                image={FeaturedLoginCardImage}
              />
              <CardContent>
                <Typography variant="body1" align="center" paragraph>
                  You need to sign up to get the accurate university recommendation
                </Typography>
              </CardContent>
              <CardActions classes={{root: classes.content}}>
                <Button component={RouterLink} to="/login" color="primary">Sign in</Button>
              </CardActions>
            </Card>
        }
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid item md={6} className={classes.hero_image}/>
      </Hidden>
    </Grid>
    <Box p={8} className={classes.hero_description} >
      {
        props.user.recommendParams.updated
        ? 
        <RecommendationHero variant="outlined" classes={{root: classes.cardHeroContainer}}/>
        : 
        null
      }
    </Box>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    status: state.statusLoggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(Recommendation);