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
import { Stack } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Send } from '@mui/icons-material';

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
                fullWidth
                label="Name"
                  variant='standard'
                />
              </Grid>
              <Grid item xs={11} sm={11} md={6} lg={6}>
                <TextField
                fullWidth
                label="Email"
                  variant='standard'
                />
              </Grid>
              <Grid item xs={11} sm={11} md={12} lg={12}>
                <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                  variant='standard'
                />
              </Grid>
            </Grid>
            <div className='flex max-w-100 justify-end mt-6'>
              <Button variant='outlined' className='!border-white !text-white w-1/5 !flex align-center color-white !justify-evenly'>Send <Send /></Button>
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
    </ThemeProvider>
  );
}