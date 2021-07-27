import React, { useEffect, useState, Fragment } from 'react';
import { Box, Avatar, Card, makeStyles, CardContent, Typography, Grid, IconButton } from '@material-ui/core';
import { predictCase1, predictCase2 } from '../../AWSDependencies/api';
import { connect } from 'react-redux';
import FeaturedRecommendation from '../landing/_FeaturedRecommendation';
import { green, orange, deepOrange, red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyle = makeStyles((theme) => ({
  
    green: {
      color: theme.palette.getContrastText(green[600]),
      backgroundColor: green[600],
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  
    orange: {
      color: theme.palette.getContrastText(orange[800]),
      backgroundColor: orange[800],
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  
    deepOrange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    
    red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      width: theme.spacing(10),
      height: theme.spacing(10),
    },

    predictionScore: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
  }))

function RecommendationHero(props) {
  const [recList, setRecList] = useState([]);
  // 0: loading
  // 1: success
  // 2: error
  // 3: array kosong
  const [status, setStatus] = useState(0);
  const classes = useStyle();

  useEffect(() => {
    const elmnt = document.getElementById("result");
    elmnt.scrollIntoView({behavior: "smooth"});
    setStatus(0);
    if(props.res.recommendParams.universityName === null){
        const dataSent = {
            "userID": props.res.userData.userID,
            "major": props.res.recommendParams.majorName,
            "budget": props.res.recommendParams.budget
        }
        predictCase2(dataSent).then(data => {
        if (data.length > 0) {
            setRecList(data);
            setStatus(1);
        } else {
            setStatus(3);
        }
        }).catch(() => {
        setStatus(2);
        })
    }  
    else{
        const dataSent = {
            "userID": props.res.userData.userID,
            "major": props.res.recommendParams.majorName,
            "universityName": props.res.recommendParams.universityName,
            "budget": props.res.recommendParams.budget
        }
        predictCase1(dataSent).then(data => {
        let list = [];
        list.push(data);
        console.log(data);
        if (list.length > 0) {
            setRecList(list);
            setStatus(1);
        } else {
            setStatus(3);
        }
        }).catch(() => {
        setStatus(2);
        })
    };
  }, [props.res.recommendParams.reRender])

// loading: false,
//     userData: {},
//     recommendParams: {
//       updated: false,
//       majorName: "",
//       universityName: "",
//       budget: 0
//     },
//     error: ''
    
  return (
    <div id="result">
        <Grid container>
            <Grid item md={9}>
                <Box p={2} mt={1}>
                    <Typography variant="h5" paragraph align="center">
                        Top Recommendation: {props.res.recommendParams.majorName}
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
                        recList.map((rec, index) => {
                            return (
                            <Box mb={4} key={index}>
                                <Card>
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={7}>
                                            <Box p={2}>
                                                <Typography variant="h4">
                                                    {index + 1}. {rec.name}
                                                </Typography>
                                                <Typography variant="body1" color="textSecondary" paragraph>
                                                    {rec.univDesc || "No Description"}
                                                </Typography>
                                                <Typography variant="body2" color="textPrimary" paragraph>
                                                    Akreditasi Jurusan: {rec.accreditation || "No Accreditation"}
                                                </Typography>
                                            </Box>
                                            <Box p={2}>
                                                <Grid item xs={10}>
                                                    <IconButton>
                                                        <FavoriteIcon/>
                                                    </IconButton>
                                                    <IconButton>
                                                        <DeleteIcon/> 
                                                    </IconButton>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item md={5} className={classes.predictionScore}>
                                             <Box p={3}>
                                                <Typography variant="h6" color="textPrimary" align="center">
                                                    Prediction Score
                                                </Typography>
                                            </Box>
                                            <Box p={2}>
                                            {(rec.grade).length < 2 ?
                                                <Avatar size className={
                                                    rec.grade === "A" ? classes.green :
                                                    rec.grade === "B" ? classes.orange :
                                                    rec.grade === "C" ? classes.deepOrange :
                                                    classes.red
                                                }>
                                                    {rec.grade}
                                                </Avatar> :
                                                <Typography variant="subtitle2" color="error" align="center">
                                                    {rec.grade}
                                                </Typography>
                                            }
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

                    {
                    [2, 3].indexOf(status) != -1
                    ? <Typography align="center" variant="body1" color="textSecondary">
                        No recommendation to be shown...
                        </Typography>
                    : null
                    }
                </Box>
            </Grid>
            <Grid item md={3}>
            <Box p={3}>
                <FeaturedRecommendation/>
            </Box>
            </Grid>
        </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    res: state.user
  }
}

export default connect(mapStateToProps)(RecommendationHero);