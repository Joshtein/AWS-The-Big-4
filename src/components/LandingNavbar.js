import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Divider, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, Dashboard, Feedback, School, Work } from '@material-ui/icons';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  navbar_link_item: {
    color: "inherit",
    textDecoration: "inherit",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  navbar_link_list_item: {
    color: "inherit",
    textDecoration: "inherit",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  navbar_links_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));

function LandingNavbar(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  }
  return (
    <AppBar position="static">
      <Toolbar classes={{root: classes.navbar}}>
        <div className={classes.navbar_links_wrapper}>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <RouterLink to="/" className={classes.navbar_link_item}>
            <Typography variant="h6">
              CollegeUp
            </Typography>
          </RouterLink>
        </div>
        
        <div className={classes.navbar_links_wrapper}>
          <Hidden smDown>
            <Button component={RouterLink} to="/recommendation" color="inherit" classes={{root: classes.navbar_link_item}}>
              Recommendation
            </Button>
            <Button component={RouterLink} to="/universities" color="inherit" classes={{root: classes.navbar_link_item}}>
              Universities
            </Button>
            <Button component={RouterLink} to="/majors" color="inherit" classes={{root: classes.navbar_link_item}}> 
              Majors
            </Button>
            {
              props.status
              ? <>
                  <Button component={RouterLink} to="/student-dashboard" color="inherit" classes={{root: classes.navbar_link_item}}>
                    Dashboard
                  </Button>
                  <Button component={RouterLink} to="/logout" color="inherit" classes={{root: classes.navbar_link_item}}>
                    Logout
                  </Button>
                </>
              : <Button component={RouterLink} to="/login" color="inherit" classes={{root: classes.navbar_link_item}}>
                  Login
                </Button>
            }
          </Hidden>
        </div>
      </Toolbar>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Divider/>
        <Box p={4}/>
        <Divider/>
        <List component="nav">
          <ListItem button component={RouterLink} to="/recommendation" classes={{root: classes.navbar_link_list_item}}>
            <ListItemIcon children={<Feedback/>}/>
            <ListItemText primary="Recommendation"/>
          </ListItem>
          <ListItem button component={RouterLink} to="/universities" classes={{root: classes.navbar_link_list_item}}>
            <ListItemIcon children={<School/>}/>
            <ListItemText primary="Universities"/>
          </ListItem>
          <ListItem button component={RouterLink} to="/majors" classes={{root: classes.navbar_link_list_item}}>
            <ListItemIcon children={<Work/>}/>
            <ListItemText primary="Majors"/>
          </ListItem>
          {
            props.status
            ? <>
                <ListItem button component={RouterLink} to="/student-dashboard" classes={{root: classes.navbar_link_list_item}}>
                  <ListItemIcon children={<Dashboard/>}/>
                  <ListItemText primary="Dashboard"/>
                </ListItem>
                <ListItem button component={RouterLink} to="/logout" classes={{root: classes.navbar_link_list_item}}>
                  <ListItemIcon children={<AccountCircle/>}/>
                  <ListItemText primary="Logout"/>
                </ListItem>
              </>
            : <ListItem button component={RouterLink} to="/login" classes={{root: classes.navbar_link_list_item}}>
                <ListItemIcon children={<AccountCircle/>}/>
                <ListItemText primary="Login"/>
              </ListItem>
          }
        </List>
      </SwipeableDrawer>
    </AppBar>
  )
}

const mapStateToProps = state => {
  return {
    status: state.statusLoggedIn
  }
}

export default connect(mapStateToProps)(LandingNavbar);