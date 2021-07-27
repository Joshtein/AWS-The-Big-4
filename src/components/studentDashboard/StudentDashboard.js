import { Box, Grid, Hidden, makeStyles, Card, CardActions, CardContent, Avatar, CardHeader, TextField, Typography, Paper, Tabs, Tab, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import LandingNavbar from '../LandingNavbar';
import Copyright from '../_Copyright';
import PropTypes from 'prop-types';
import { SentimentDissatisfiedRounded } from '@material-ui/icons';

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
  ["Bahasa Inggris", "Bahasa Inggris"],
  ["Bahasa Indonesia", "Bahasa Indonesia"],
  ["Matematika", "Sejarah"],
  ["Fisika", "Kimia"],
  ["Kimia", "Sosiologi"],
  ["Biologi", "Ekonomi"]
]


function StudentDashboard(props) {
  const classes = useStyle();
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
      temp[mapel][semester] = parseInt(e.target.value)
      setScoreArray(temp);

      console.log(scoreArray);
      console.log(temp);
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
                  <Button color="primary" variant="contained">Save and Update Scores</Button>
                </Box>
              </CardActions>
            </Card>
          </Box>
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

export default connect(mapStateToProps)(StudentDashboard);