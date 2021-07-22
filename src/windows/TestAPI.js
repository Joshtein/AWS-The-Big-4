import React from 'react';
import * as api from  '../AWSDependencies/api'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function DeployAPI() {
    const classes = useStyles();
    const apiFunc = async () => {
        const dataSent = {
            "userID": "d2256497003a4798b4968ff70b1c68fe",
            "major": "Teknik Elektro",
            "budget": 30000000
        };
        const res = await api.predictCase2(dataSent);
        console.log("RESPOND :", res);
    }
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Button variant="contained" onClick={() => { apiFunc() }}>GAS</Button>
                </form>
            </div>
        </Container>
    );
}
