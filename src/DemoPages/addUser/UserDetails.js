import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const axios = require('axios').default;


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0d5aaf',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function UserForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
    axios.get('http://hawkaidata.net/ui/login.html', {
        params: {
        //   ID: 0
        }
      })
      .then(function (response) {
    //    window.location.replace("");
    //     <Suspense fallback={
    //       <div className="loader-container">
    //           <div className="loader-container-inner">
    //               <h6 className="mt-3">
    //                   Please wait while we load all the Dashboards examples
    //                   <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
    //               </h6>
    //           </div>
    //       </div>
    //   }>
    //       <Route path="/dashboards/basic" component={Dashboards}/>
    //   </Suspense>
    
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });  
 }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
          {/* <ContactMailIcon /> */}
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Add User
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input
          id="firstName"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="LastName">Last Name</InputLabel>
        <Input
          id="iLastName"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">E-mail</InputLabel>
        <Input
          id="input-with-icon-adornment"
          style = {{'width':'380px'}}
          startAdornment={
            <InputAdornment position="start">
              <EmailRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            style = {{'width':'380px'}}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            </Grid>
            <Grid item xs={12}>
            {/* <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="re-password">Re-Password</InputLabel>
          <Input
            id="re-password"
            type={'password'}
            style = {{'width':'380px'}}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add User
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}