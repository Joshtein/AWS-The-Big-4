import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getListOfMajorsInMajorGroup, getListOfUniversities } from '../../AWSDependencies/api';
import { connect } from 'react-redux';

function RecommendationCard(props) {
  const [uniList, setUniList] = useState([]);
  const [majorList, setMajorList] = useState([]);

  useEffect(() => {
    getListOfUniversities()
      .then(data => {
        setUniList([...data.map(uni => uni.universityName)]);
      })
      
    if (props.majorGroup) {
      getListOfMajorsInMajorGroup({majorGroup: props.majorGroup})
        .then(data => {
          setMajorList(data)
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

  return (
    <Card {...props}>
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
                renderInput={(params) => <TextField {...params} label="Major" variant="outlined" />}
              />
            </Box>

            <Box mb={3}>
              <Autocomplete
                options={uniList}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="University" variant="outlined" />}
              />
            </Box>

            <TextField label="Budget" variant="outlined" />
          </form>
        </CardContent>
        <CardActions style={{display: "flex", justifyContent: "center"}}>
          <Box p={3}>
            <Button color="primary" variant="contained">Get Recommendation!</Button>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    majorGroup: state?.userData?.majorGroup
  }
}

export default connect(mapStateToProps)(RecommendationCard);