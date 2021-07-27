import { Box, Grid, Hidden, makeStyles, Card, CardActions, CardContent, Avatar, CardHeader, TextField, Typography, CardMedia, Tabs, Tab, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import { useState } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import LandingNavbar from '../LandingNavbar';
import Copyright from '../_Copyright';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SentimentDissatisfiedRounded } from '@material-ui/icons';
import HeroImage from "../../assets/RecommendationHero.jpg";
import FeaturedLoginCardImage from "../../assets/FeaturedRecommendation__Login.png";
import { userUpdate } from '../../AWSDependencies/api'
import { getUserData } from '../../redux/coba';

// To Do:
// 1. Kalo belom login, tendang ke sign in
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  },

  actions: {
    display: "flex",
    justifyContent: "center"
  },

  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },

  cardHeroContainer: {
    width: "100%",
    height: "100%",
  },

  hero_image: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
  },

  hero_description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

function enumMajorGroup(key) {
  switch (key) {
    case 0:
      return "Saintek";
    case 1:
      return "Soshum";
    default:
      return "Saintek";
  }
}

const nullArray = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const mapelArray = [
  ["Matematika IPA", "Geografi"],
  ["Fisika", "Sejarah Minat"],
  ["Kimia", "Sosiologi"],
  ["Biologi", "Ekonomi"],
  ["Bahasa Inggris", "Bahasa Inggris"],
  ["Bahasa Indonesia", "Bahasa Indonesia"]
]

/*
{
        "uuid": "123456",
        "majorGroup": "Soshum",
        "subjects": [{
            "name": "Geografi",
            "score": 85
        },{
            "name": "Sejarah Minat",
            "score": 80
        },{
            "name": "Sosiologi",
            "score": 90
        },{
            "name": "Ekonomi",
            "score": 93
        },{
            "name": "Bahasa Inggris",
            "score": 92
        },{
            "name": "Bahasa Indonesia",
            "score": 85
        }]
    }
*/


function StudentDashboard(props) {
  const classes = useStyle();
  const history = useHistory();
  // 0 = saintek
  // 1 = soshum
  const [majorGroup, setMajorGroup] = useState(0);
  const [scoreArray, setScoreArray] = useState(nullArray);

  const handleMajorGroupState = (e, newValue) => {
    setMajorGroup(newValue);
  }

  const handleScoreArray = (mapel, semester) => {
    return function (e) {
      let temp = [...scoreArray];
      temp[mapel][semester] = parseFloat(e.target.value)
      setScoreArray(temp);

      console.log(scoreArray);
      console.log(temp);
    }
  }

  const userUpdateApi = async (dataSent) => {
    console.log(dataSent);
    const res = await userUpdate(dataSent);
    console.log("RESPOND :", res);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const majorGroupName = enumMajorGroup(majorGroup);
    if(majorGroup === 1){
      const dataSent = {
          "uuid": props.user.userData.userID,
          "majorGroup": majorGroupName,
          "subjects": [{
              "name": "Geografi",
              "score": (scoreArray[0].reduce((a, b) => a + b, 0))/5
          },{
              "name": "Sejarah Minat",
              "score": (scoreArray[1].reduce((a, b) => a + b, 0))/5
          },{
              "name": "Sosiologi",
              "score": (scoreArray[2].reduce((a, b) => a + b, 0))/5
          },{
              "name": "Ekonomi",
              "score": (scoreArray[3].reduce((a, b) => a + b, 0))/5
          },{
              "name": "Bahasa Inggris",
              "score": (scoreArray[4].reduce((a, b) => a + b, 0))/5
          },{
              "name": "Bahasa Indonesia",
              "score": (scoreArray[5].reduce((a, b) => a + b, 0))/5
          }]
      }
      //console.log(dataSent);
      userUpdateApi(dataSent);
      props.getUserData(props.user.userData.userID);
      history.push('/');
    }
    else{
      const dataSent = {
        "uuid": props.user.userData.userID,
        "majorGroup": majorGroupName,
        "subjects": [{
            "name": "Matematika IPA",
            "score": (scoreArray[0].reduce((a, b) => a + b, 0))/5
        },{
            "name": "Fisika",
            "score": (scoreArray[1].reduce((a, b) => a + b, 0))/5
        },{
            "name": "Kimia",
            "score": (scoreArray[2].reduce((a, b) => a + b, 0))/5
        },{
            "name": "Biologi",
            "score": (scoreArray[3].reduce((a, b) => a + b, 0))/5
        },{
            "name": "Bahasa Inggris",
            "score": (scoreArray[4].reduce((a, b) => a + b, 0))/5
        },{
            "name": "Bahasa Indonesia",
            "score": (scoreArray[5].reduce((a, b) => a + b, 0))/5
        }]
      }
      //console.log(dataSent);
      userUpdateApi(dataSent);
      props.getUserData(props.user.userData.userID);
      history.push('/');
    }
  }
  
  return (
    <Fragment>
      <LandingNavbar/>
      <Grid container classes={{root: classes.root}}>
        <Hidden smDown>
          <Grid item md={1}/>
        </Hidden>
        <Grid item md={3}>
          <Box width="100%" py={5}>
            <Card variant="outlined">
              <CardHeader
                avatar={<Avatar className={classes.purple}>{(props.user.userData.name || "ID").substring(0, 2).toUpperCase()}</Avatar>}
                title={props.user.userData.name || "No Name"}
                subheader={props.user.userData.email || "No Email"}
              />
            </Card>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid item md={1}/>
        </Hidden>

        <Grid item md={6}>
        {
          !props.status
          ? 
            <Box p={5} className={classes.hero_description}>
              <Card variant="outlined" className={classes.cardHeroContainer}>
                <CardMedia
                  className={classes.image}
                  image={FeaturedLoginCardImage}
                />
                <CardContent>
                  <Typography variant="body1" align="center" paragraph>
                    You need to sign up to get the accurate university recommendation
                  </Typography>
                </CardContent>
                <CardActions className={classes.content}>
                  <Button component={RouterLink} to="/login" color="primary">Sign in</Button>
                </CardActions>
              </Card>
            </Box>
          :
            <Box width="100%" py={5}>
              <Card variant="outlined">
                <CardContent>
                  <Box py={4}>
                    <Typography variant="h5" paragraph align="center">
                      Your High School Grades
                    </Typography>
                  </Box>
                  
                  {/* <Paper square> */}
                    <Tabs
                      value={majorGroup}
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                      onChange={handleMajorGroupState}
                      aria-label="Major Group Tabs"
                    >
                      <Tab label="Saintek" {...a11yProps(0)}/>
                      <Tab label="Soshum" {...a11yProps(1)}/>
                    </Tabs>
                    <Divider />

                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Sem 1</TableCell>
                            <TableCell>Sem 2</TableCell>
                            <TableCell>Sem 3</TableCell>
                            <TableCell>Sem 4</TableCell>
                            <TableCell>Sem 5</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            mapelArray.map((mapel, index) => {
                              return (
                                <TableRow key={index}>
                                  <TableCell><b>{mapel[majorGroup]}</b></TableCell>
                                  {[0, 1, 2, 3, 4].map(sem => <TableCell key={sem}> <TextField onChange={handleScoreArray(index, sem)}/> </TableCell>)}
                                </TableRow>
                              )
                            })
                          }
                          {/* <TableRow>
                            <TableCell><b>Bahasa Inggris</b></TableCell>
                            <TableCell> <TextField onChange={handleScoreArray(0, 1)}/> </TableCell>
                            <TableCell> <TextField onChange={handleScoreArray(0, 2)}/> </TableCell>
                            <TableCell> <TextField onChange={handleScoreArray(0, 3)}/> </TableCell>
                            <TableCell> <TextField onChange={handleScoreArray(0, 4)}/> </TableCell>
                            <TableCell> <TextField onChange={handleScoreArray(0, 5)}/> </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><b>Bahasa Indonesia</b></TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><b>{majorGroup === 0 ? "Matematika IPA" : "Geografi"}</b></TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><b>{majorGroup === 0 ? "Fisika" : "Sejarah Minat"}</b></TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><b>{majorGroup === 0 ? "Kimia" : "Sosiologi"}</b></TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><b>{majorGroup === 0 ? "Biologi" : "Ekonomi"}</b></TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                            <TableCell> <TextField/> </TableCell>
                          </TableRow> */}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  {/* </Paper> */}

                </CardContent>
                <CardActions>
                  <Box p={4} classes={{root: classes.actions}} width="100%">
                    <Button color="primary" variant="contained" onClick={onSubmit}>Save and Update Scores</Button>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          
        }
        </Grid>
        <Hidden smDown>
          <Grid item md={1}/>
        </Hidden>
      </Grid>
      <Copyright bgColor="#32499E" textColor="white"/>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    status: state.statusLoggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId) => dispatch(getUserData(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);