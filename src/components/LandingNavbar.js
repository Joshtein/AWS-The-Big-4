import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navbar_link_item: {
    color: "inherit",
    textDecoration: "inherit",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function LandingNavbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar classes={{root: classes.navbar}}>
        <RouterLink to="/" className={classes.navbar_link_item}>
          <Typography variant="h6">
            CollegeUp
          </Typography>
        </RouterLink>
        
        <div className={classes.navbar_links_wrapper}>
          <Button component={RouterLink} to="/recommendation" color="inherit" classes={{root: classes.navbar_link_item}}>
            Recommendation
          </Button>
          <Button component={RouterLink} to="/universities" color="inherit" classes={{root: classes.navbar_link_item}}>
            Universities
          </Button>
          <Button component={RouterLink} to="/majors" color="inherit" classes={{root: classes.navbar_link_item}}> 
            Majors
          </Button>
          <Button component={RouterLink} to="/login" color="inherit" classes={{root: classes.navbar_link_item}}>
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default LandingNavbar;