import React from 'react';
import { TextField, makeStyles, Grid, Button, Box } from '@material-ui/core';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    itb_news: {
        display: "flex",
        flexDirection: "column",
        width: '100%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        width: '40%',
    },
}))

export default function News() {
  const classes = useStyles();
//   const route = ((status === false) ? "/login" : "/recommendation");
  return (
    <Grid container spacing={2} className={classes.itb_news}>
        <Title>Create News</Title>
        <Grid item>
            <TextField
                id="outlined-multiline-static"
                label="Input News Title Here"
                fullWidth
                variant="outlined"
            />
        </Grid>
        <Grid item>
            <TextField
                id="outlined-multiline-static"
                label="Input News Content Here"
                multiline
                rows={5}
                fullWidth
                variant="outlined"
            />
        </Grid>
        <Grid item>
            <TextField
                id="outlined-multiline-static"
                label="Input News Link Here"
                fullWidth
                variant="outlined"
            />
        </Grid>
        <Box textAlign='center'>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Add News
            </Button>
        </Box>
    </Grid>
  )
}

