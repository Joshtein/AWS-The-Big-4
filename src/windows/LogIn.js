import React, {useState} from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserPool from '../AWSDependencies/UserPool';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { getUserData } from '../redux/coba';
import { getUniversityData } from '../redux/coba';
import { updateStatusLoggedIn } from '../redux/coba';
import { useHistory } from 'react-router-dom';
import Copyright from '../components/_Copyright';
import LandingNavbar from '../components/LandingNavbar';
import { Fragment } from 'react';

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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function LogIn({ resUser, resUniv, status, getUserData, getUniversityData, updateStatusLoggedIn }) {
  const classes = useStyles();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const updateUserId = (userId) => {      
  //   dispatch({
  //       type: UPDATE_USER_ID,
  //       payload: userId
  //   });
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    const user = new CognitoUser({
        Username: email,
        Pool: UserPool
    });
    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });

    user.authenticateUser(authDetails, {
        onSuccess: (data) => {
            console.log("onSuccess: ", data);
            const cognitoUser = UserPool.getCurrentUser();
            if (cognitoUser) {
                cognitoUser.getSession(async (err, session) => {
                if ( err ) {
                    console.error(err);
                }else{
                    cognitoUser.getUserAttributes((err, attributes) => {
                        if (err) {
                          console.error(err);
                        } else {
                          console.log(attributes);
                          
                          const univStatus = attributes[3].Value;
                          console.log(univStatus);

                          console.log(status);
                          updateStatusLoggedIn();

                          if(univStatus==='false'){
                            //fetch user data
                            const userId = attributes[1].Value;
                            getUserData(userId);
                            history.push('/')
                            }
                            else{
                            //fetch univ data
                            const univName = attributes[1].Value;
                            getUniversityData(univName);
                            history.push('/university-dashboard') //ganti ke univ dashboard nanti
                          }
                        }
                    });
                };
            });

            }else{
                console.log('Cognito User is null');
            }
        },
        onFailure: (err) => {
            console.error("onFailure: ", err);
            setErrorMessage(err.message);
        }
    });
  };

  return (
      <Fragment>
        <LandingNavbar/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value = {email}
                onChange = {(event) => {setEmail(event.target.value)}}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                value = {password}
                onChange = {(event) => {setPassword(event.target.value)}}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Sign In
              </Button>
              {errorMessage && <div className="error"> 
                <Grid container justifyContent="center">
                  <Grid item>
                    <Typography variant="body2" color="error" align="center">
                      {errorMessage} 
                    </Typography>
                  </Grid>
                </Grid>
              </div>}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={() => history.push('/signUp')}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    resUser: state.user,
    resUniv: state.univ,
    status: state.statusLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId) => dispatch(getUserData(userId)),
    getUniversityData: (univName) => dispatch(getUniversityData(univName)),
    updateStatusLoggedIn: () => dispatch(updateStatusLoggedIn())
  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
