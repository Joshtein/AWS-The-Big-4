import { Avatar, Box, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react';
import UniversitiesHero from './_UniversitiesHero';
import LandingNavbar from '../LandingNavbar';
import { useEffect } from 'react';
import { getListOfUniversities } from '../../AWSDependencies/api';
import { green, orange, deepOrange, blue } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
  univInformation: {
    backgroundColor: "#f8f8f8",
  },

  green: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
  },

  orange: {
    color: theme.palette.getContrastText(orange[800]),
    backgroundColor: orange[800],
  },

  deepOrange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
}))

function Universities() {
  // univList = [
  //   {
  //     universityName: string,
  //     desc: string,
  //     majorGroup: [
  //       {
  //         name: "saintek" || "soshum",
  //         majors: [{
  //           score: int,
  //           accreditation: string,
  //           majorName: string,
  //           budget: int,
  //           subjects: [{
  //             name: string
  //             weight: int
  //           }]
  //         }]
  //       }, ...
  //     ]
  //   }, ...
  // ] 

  const [univList, setUnivList] = useState([]);
  // 0: loading
  // 1: success
  // 2: error
  // 3: array kosong
  const [status, setStatus] = useState(0);
  const classes = useStyle();

  useEffect(() => {
    getListOfUniversities().then(data => {
      setUnivList(data);
      setStatus(1);
    })
  }, [])

  return (
    <Fragment>
      <LandingNavbar/>
      <UniversitiesHero/>

      <Box p={8} classes={{root: classes.univInformation}}>
        <Typography align="center" variant="h5" paragraph>
          Universities in Indonesia
        </Typography>
        
        {
          status === 0
          ? <Typography align="center" variant="body1" color="textSecondary">
              Please wait, fetching data from server...
            </Typography>
          : null
        }

        {
          status === 1
          ? <Fragment>
            {
              univList.map((univ, index) => {
                return (
                  <Box mb={4} key={index}>
                    <Card>
                      <CardContent>
                        <Grid container>
                          <Grid item md={5}>
                            <Box p={2}>
                              <Typography variant="h6">
                                {index + 1}. {univ.universityName}
                              </Typography>
                              <Typography variant="body1" color="textSecondary" paragraph>
                                {univ.desc || "No Description"}
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item md={1}/>
                          
                          <Grid item md={6}>
                            <Box p={2}>
                              <Typography variant="body1">
                                <b>Available Majors</b>
                              </Typography>
                              <Grid container>
                                {univ.majorGroup.map((major, index) => {
                                  return (
                                    <Grid item key={index} md={6}>
                                      <Typography variant="overline">
                                        {major.name} {/* Saintek || Soshum*/}
                                      </Typography>
                                      
                                        {
                                          major.majors.length > 0 
                                          ? <List dense>
                                              {major.majors.map((data, index) => {
                                                return (
                                                  <ListItem key={index}>
                                                    <ListItemAvatar>
                                                      <Avatar className={
                                                        data.accreditation === "A" ? classes.green :
                                                        data.accreditation === "B" ? classes.deepOrange :
                                                        data.accreditation === "C" ? classes.orange :
                                                        classes.blue
                                                      }>
                                                        {data.accreditation}
                                                      </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText 
                                                      primary={data.majorName}
                                                      secondary={`Budget: Rp${(data.budget).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')},-`}
                                                    />
                                                  </ListItem>
                                                )
                                              })}
                                            </List>
                                          : <Typography variant="caption" color="textSecondary"><br/>No data available in this category</Typography>
                                        }                                        
                                    </Grid>
                                  )
                                })}
                              </Grid>
                            </Box>
                          </Grid>
                        
                        </Grid>
                      </CardContent>
                    </Card>
                  </Box>
                )
              })
            }
          </Fragment>
          : null
        }
        
      </Box>

      {/* <Card>
          <CardContent>
            <Grid container>
              <Grid item md={7}>
                <Box p={2}>
                  <Typography variant="h6">
                    1. ITB
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias accusamus dicta ducimus eaque possimus omnis veniam soluta, voluptatem, quo, sint nemo itaque nisi perferendis praesentium. Dolores explicabo rerum quis.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={1}/>
              <Grid item md={4}>
                <Box p={2}>
                  <Typography variant="overline">
                    Available Majors
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar variant="square">A</Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary="Teknik Elektro"
                        secondary="Accreditation: A"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card> */}

    </Fragment>
  )
};

export default Universities;