import { Box, Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Title from './Title';
import FeaturedLoginCardImage from "../../assets/FeaturedRecommendation__Login.png"; 

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    minWidth: "280px",
    maxWidth: "360px",
  },
  
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    minHeight: "200px",
    width: "100%",
  }
}))

function FeaturedRecommendation(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Title>Featured Recommendation</Title>
      {
        props.status 
        ? <></>
        : <Card variant="outlined" classes={{root: classes.cardContainer}}>
            <CardMedia
              classes={{root: classes.image}}
              image={FeaturedLoginCardImage}
            />
            <CardContent>
              <Typography variant="body1" align="center" paragraph>
                You need to sign up for get the accurate university recommendation
              </Typography>
            </CardContent>
            <CardActions classes={{root: classes.content}}>
              <Button component={RouterLink} to="/login" color="primary">Sign in</Button>
            </CardActions>
          </Card>
      }
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    status: state.statusLoggedIn
  }
}

export default connect(mapStateToProps)(FeaturedRecommendation);