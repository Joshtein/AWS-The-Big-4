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
import { userCreate } from  '../AWSDependencies/api';
import { useHistory } from 'react-router-dom';
import Copyright from '../components/_Copyright';
import { Fragment } from 'react';
import LandingNavbar from '../components/LandingNavbar';
import { getUserData } from '../redux/coba';
import { updateStatusLoggedIn } from '../redux/coba';

const crypto = require("crypto");
const generateUUID = () => crypto.randomBytes(16).toString("hex");

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

function SignUp({ resUser, getUserData, updateStatusLoggedIn }) {
  const classes = useStyles();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const uuid = generateUUID();
  const [errorMessage, setErrorMessage] = useState("");

  const userCreateApi = async () => {
    const dataSent = {
        "uuid": uuid,
        "name": firstName + " " + lastName,
        "email": email
    };
    console.log(dataSent);
    //setClick(true);
    const res = await userCreate(dataSent);
    console.log("RESPOND :", res);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const univStatus = {
            Name: "custom:univStatus",
            Value: "false"
        };
    const uniqueId = {
            Name: "custom:uniqueId",
            Value: uuid
        };
    UserPool.signUp(email, password, [univStatus, uniqueId], null, (err, data)=> {
        if(err){
            console.error(err);
            setErrorMessage("Password length at least eight characters with a minimum of one uppercase character, symbol, and number.");
        }
        else{
          (async function() {
            await userCreateApi();;
            await getUserData(uuid);;
            await updateStatusLoggedIn();
            history.push('/student-dashboard');
          })();
        }
        console.log(data);
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  value = {firstName}
                  onChange = {(event) => {setFirstName(event.target.value)}}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value = {lastName}
                  onChange = {(event) => {setLastName(event.target.value)}}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value = {email}
                  onChange = {(event) => {setEmail(event.target.value)}}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Sign Up
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
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2" onClick={() => history.push('/login')}>
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    resUser: state.user,
    status: state.statusLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId) => dispatch(getUserData(userId)),
    updateStatusLoggedIn: () => dispatch(updateStatusLoggedIn())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);