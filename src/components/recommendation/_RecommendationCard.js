import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography, Grid, makeStyles, Avatar, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getListOfMajorsInMajorGroup, getListOfUniversities } from '../../AWSDependencies/api';
import { connect } from 'react-redux';
import { updateRecommendationParams } from '../../redux/coba';
import { green, orange, deepOrange, red } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
  
  green: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  orange: {
    color: theme.palette.getContrastText(orange[800]),
    backgroundColor: orange[800],
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  deepOrange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  predictionScore: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
  },

  grade: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
},
}))


function RecommendationCard(props) {
  const [uniList, setUniList] = useState([]);
  const [majorList, setMajorList] = useState([]);
  const [majorName, setMajorName] = useState(null);
  const [universityName, setUniversityName] = useState(null);
  const [budget, setBudget] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyle();

  useEffect(() => {
    getListOfUniversities()
      .then(data => {
        setUniList([...data.map(uni => uni.universityName)]);
      })
    if (props.res.majorGroup) {
      getListOfMajorsInMajorGroup({majorGroup: props.res.majorGroup})
        .then(data => {
          setMajorList([...data.map(major => major.majorName)])
        })
    } else {
      (async function() {
        let saintek = await getListOfMajorsInMajorGroup({majorGroup: "Saintek"});
        let soshum = await getListOfMajorsInMajorGroup({majorGroup: "Soshum"});

        saintek = [...saintek.map(major => major.majorName)];
        soshum = [...soshum.map(major => major.majorName)];
        
        setMajorList([...saintek, ...soshum]);
      })();
    }
  }, [])

  const  onSubmit = (event) => {
    event.preventDefault();
    if((majorName === null) || (majorName === "")){
      setErrorMessage("Fill required fields!");
    }
    else{
      setErrorMessage("");
      const params = {
        updated: true,
        reRender: !props.rec,
        majorName: majorName,
        universityName: universityName,
        budget: budget
      }
      props.updateRecommendationParams(params);
    }
  }

  return (
    <Card className={props.classes.root} variant={props.variant}>
      <Box p={2}>
        <CardContent>
          <Typography variant="h5" paragraph>
            University Recommendation
          </Typography>
          <Typography variant="body2" paragraph>
            Choose your preferred major and/or university
          </Typography>
          
          <form noValidate autoComplete="off">
            <Box my={3}>
              <Autocomplete
                options={majorList}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {setMajorName(value)}}
                renderInput={(params) => <TextField {...params} label="Major" variant="outlined" required={true} />}
              />
            </Box>

            <Box mb={3}>
              <Autocomplete
                options={uniList}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {setUniversityName(value)}}
                renderInput={(params) => <TextField {...params} label="University" variant="outlined" />}
              />
            </Box>

            <TextField label="Budget" variant="outlined" value={budget} onChange={(event) => {setBudget(event.target.value)}} InputProps={{startAdornment: <InputAdornment position="start">Rp</InputAdornment>,}} />
          </form>
        </CardContent>
        <CardActions style={{display: "flex", justifyContent: "center"}}>
          <Box p={3}>
            <Button color="primary" variant="contained" onClick={onSubmit}>Get Recommendation!</Button>
            {errorMessage && <div className="error"> 
              <Box p={1}>
                <Grid container justifyContent="center" spacing={5}>
                  <Grid item>
                    <Typography variant="body2" color="error" align="center">
                      {errorMessage} 
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </div>}
          </Box>
        </CardActions>
      </Box>
      {
        props.updateStatus
        ?
        <Box p={1} width="100%"> 
            <Typography variant="h6" align="center">
              Keterangan Hasil Prediksi
            </Typography>
            <Grid container className={classes.grade}>
              <Grid item md={6} className={classes.predictionScore} >
                <Box p={2}>
                  <Avatar className={classes.green}>
                    A
                  </Avatar>
                </Box>
                <Box p={2}>
                  <Typography variant="body2" align="left">
                    Sangat mungkin
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6} className={classes.predictionScore} >
                <Box p={2}>
                  <Avatar className={classes.orange}>
                    B
                  </Avatar>
                </Box>
                <Box p={2}>
                  <Typography variant="body2" align="left">
                    Di atas rata-rata
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6} className={classes.predictionScore}>
                <Box p={2}>
                  <Avatar className={classes.deepOrange}>
                    C
                  </Avatar>
                </Box>
                <Box p={2}>
                  <Typography variant="body2" align="left">
                    Minimum
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6} className={classes.predictionScore}>
                <Box p={2}>
                  <Avatar className={classes.red}>
                    F
                  </Avatar>
                </Box>
                <Box p={2}>
                  <Typography variant="body2" align="left">
                    Tidak memenuhi syarat minimum
                  </Typography>
                </Box>
            </Grid>
          </Grid>
        </Box>
        :
        null
      }
  </Card>
  );
}

const mapStateToProps = state => {
  return {
    res: state.user.userData,
    rec: state.user.recommendParams.reRender,
    updateStatus: state.user.recommendParams.updated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecommendationParams: (params) => dispatch(updateRecommendationParams(params))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecommendationCard);