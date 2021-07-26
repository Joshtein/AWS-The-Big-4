import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getListOfMajorsInMajorGroup, getListOfUniversities } from '../../AWSDependencies/api';
import { connect } from 'react-redux';
import { updateRecommendationParams } from '../../redux/coba';

function RecommendationCard(props) {
  const [uniList, setUniList] = useState([]);
  const [majorList, setMajorList] = useState([]);
  const [majorName, setMajorName] = useState(null);
  const [universityName, setUniversityName] = useState(null);
  const [budget, setBudget] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

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

            <TextField label="Budget" variant="outlined" value={budget} onChange={(event) => {setBudget(event.target.value)}}  />
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
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    res: state.user.userData,
    rec: state.user.recommendParams.reRender
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRecommendationParams: (params) => dispatch(updateRecommendationParams(params))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecommendationCard);