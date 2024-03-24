import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress, Stack } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Send } from '@mui/icons-material';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [data, setData] = React.useState({});
  const [loader, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);


  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = async () => {
    // let data = {
    //   name: "hamza",
    //   message: "sd",
    //   email: "d"
    // }
    setError(''); // Reset error state
    try {
         // Check if any field is empty
    if (Object.values(data).some(value => value === '')) {
      setError('Please fill in all fields.');
      return;
    }
      // Check if email is valid
      if (!validateEmail(data.email)) {
        setError('Please enter a valid email address.');
        return;
      }

      setLoading(true); // Set loader to true before making the request
      const response = await axios.post('https://backend-production-f667.up.railway.app/api/contact', data);
      console.log(response.data); // Assuming the response contains a success message
      // If needed, handle success message here
      setSuccess('Form is Submitted, Successfully'); // Set smessage
      setData({})
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred while submitting the form. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Set loader to false after request is complete
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '', marginTop: "40px" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            // backgroundImage: 'url(https://img.freepik.com/premium-photo/blue-texture-background_464463-1141.jpg)',
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}
        >
          <div className='getin'>
            <p className='neon'> Get in touch with us</p>
            <Typography variant='h2' mt={3}>Send Message</Typography>
            <p>Do you have any inquiry or need some information feel free to send us a message</p>
            <Grid container spacing={2} component="" sx={{ height: '', marginTop: "10px", height: "auto !important" }}>
              <Grid item xs={11} sm={11} md={6} lg={6}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  variant='standard'
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={11} sm={11} md={6} lg={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  variant='standard'
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={11} sm={11} md={12} lg={12}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant='standard'
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div className='flex max-w-100 justify-end mt-6'>
              {loader ?
              <CircularProgress sx={{color: "white !important"}} />
              :
              <Button variant='outlined' sx={{minWidth: "151px !important"}} className='!border-white !text-white w-1/5 !flex align-center color-white !justify-evenly' onClick={sendEmail}>Send <Send /></Button>
              }
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className='info' elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
            }}
          >
            <Typography variant='h2' mt={3}>Call us</Typography>
            <p>Do you have any inquiry or need some information feel free to Call us</p>
            <p className='flex align-center p-1 phone'><LocalPhoneIcon /> : 03224594593</p>

            <Typography variant='h2' mt={3}>Send Email</Typography>
            <p>Do you have any inquiry or need some information feel free to Send us an Email</p>
            <p className='flex align-center p-1 phone'><EmailIcon /> : hamtah112@gmail.com</p>
            <Typography variant='h2' mt={4}>Track Us</Typography>
            <p>If you wish to visit our Shop in Lahore  head to our headquaters</p>
            <p className='flex align-center p-1 phone'><LocationOnIcon /> : 26 nishtar road Lahore</p>
          </Box>
        </Grid>
      </Grid>

      {error && error !== null ?
        <div id="toast-danger" class="fixed top-20 left-2 flex items-center w-full max-w-md p-4 mt-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ms-3 text-sm font-bold">{error}.</div>
          <button onClick={() => setError(null)} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        : null}

      {success && success !== null ?
       <div id="toast-success" class="fixed top-20 left-2 flex items-center w-full max-w-md p-4 mt-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
       <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
           </svg>
           <span class="sr-only">Check icon</span>
       </div>
          <div class="ms-3 text-sm font-bold">{success}.</div>
          <button onClick={() => setSuccess(null)} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        : null}
    </ThemeProvider>
  );
}