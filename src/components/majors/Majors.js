import { Avatar, Box, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import MajorsHero from './_MajorsHero';
import LandingNavbar from '../LandingNavbar';
import { green, orange, deepOrange, blue } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
  majorInformation: {
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

function Majors() {
  const classes = useStyle();

  return (
    <Fragment>
      <LandingNavbar/>
      <MajorsHero/>

      <Box p={8} classes={{root: classes.majorInformation}}>
        <Typography align="center" variant="h6" paragraph>
          Majors in Indonesia
        </Typography>
        <Box mb={4}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item md={7}>
                  <Box p={2}>
                    <Typography variant="h6">
                      1. Teknik Elektro
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                    Program Studi Teknik Elektro menyelenggarakan perkuliahan untuk program S1 Reguler dengan dua program studi yaitu Teknik Elektro  dan Teknik Komputer. Program Studi Teknik Elektro menekankan pengembangan Sumber Daya Manusia (SDM) di bidang elektronika, komputer, tenaga listrik, sistem kendali dan telekomunikasi. Lulusan dari program studi ini diharapkan dapat menjadi tenaga ahli Teknik Elektro yang berkualitas dan memiliki kemampuan untuk mengembangkan pengetahuan dan melakukan penelitian secara mandiri serta mampu bekerja dan menerapkannya pada industri yang sesuai.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={1}/>
                <Grid item md={4}>
                  <Box p={2}>
                    <Typography variant="overline">
                      Available Universities
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="ITB"
                          secondary="Budget: Rp 12.500.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UI"
                          secondary="Budget: Rp 7.000.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UGM"
                          secondary="Budget: Rp 8.300.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.orange}>C</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="ITS"
                          secondary="Budget: Rp 7.500.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.orange}>C</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UNPAD"
                          secondary="Budget: Rp 10.000.000,-"
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box mb={4}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item md={7}>
                  <Box p={2}>
                    <Typography variant="h6">
                      2. Teknik Industri
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                    Teknik Industri (Industrial Engineering) berhubungan dengan perancangan, perbaikan dan instalasi suatu sistem yang mengintegrasikan manusia, bahan, alat, informasi, dan energi untuk memproduksi barang atau jasa secara efisien dan efektif.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={1}/>
                <Grid item md={4}>
                  <Box p={2}>
                    <Typography variant="overline">
                      Available Universities
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="ITS"
                          secondary="Budget: Rp 7.500.000,-"
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box mb={4}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item md={7}>
                  <Box p={2}>
                    <Typography variant="h6">
                      3. Ilmu Komunikasi
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                    Departemen Ilmu Komunikasi bertujuan menghasilkan lulusan  berkualitas tinggi yang akan berkiprah sebagai tenaga profesional dan beretika moral dalam bidang ilmu dan praktek komunikasi, baik dalam kancah nasional maupun internasional.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={1}/>
                <Grid item md={4}>
                  <Box p={2}>
                    <Typography variant="overline">
                      Available Universities
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UI"
                          secondary="Budget: Rp 10.000.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UGM"
                          secondary="Budget: Rp 8.300.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.deepOrange}>B</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UNPAD"
                          secondary="Budget: Rp 7.000.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.deepOrange}>B</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UNDIP"
                          secondary="Budget: Rp 5.000.000,-"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.orange}>C</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary="UNSOED"
                          secondary="Budget: Rp 4.000.000,-"
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
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

export default Majors;