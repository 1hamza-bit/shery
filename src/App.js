import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Portfolio';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Components/Contact';
import Sitemap from './Components/Sitemap';
import React from 'react';
import { Button, Dialog, DialogContent, Grid, TextField, Typography } from '@mui/material';
import shop from "./Assets/shophose.jpg"
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';
import About from './Components/About';
import Privacy from './Components/Privacy';

const WhiteOutlinedInput = styled('input')({
  '&.MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
});

function App() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
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
        
      // Check if email is valid
      if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }
      let data = {
        name: "news",
        email: email,
        message: "newsss"
      }

      setLoading(true); // Set loader to true before making the request
      const response = await axios.post('https://backend-production-f667.up.railway.app/api/contact', data);
      console.log(response.data); // Assuming the response contains a success message
      // If needed, handle success message here
      setSuccess('Form is Submitted, Successfully'); // Set smessage
      setEmail("")
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred while submitting the form. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Set loader to false after request is complete
      setOpen(false)
    }

  }

  React.useEffect(() => {
    // Open the dialog when component mounts
    setOpen(true);

    // Clean up function to close the dialog when component unmounts
    return () => {
      setOpen(false);
    };
  }, []);

  const handleChange = (value) => {
    setEmail(value)
  }


  return (
    <div className="App">
       <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://shahzadtradingcompany.com",
            "logo": "%PUBLIC_URL%/favicon.png"
          }
          
        `}</script>
         <meta charSet="UTF-8" />
        <meta name="description" content="Supplier of hydraulic hoses, fittings, and accessories. Find high-quality hydraulic hoses for industrial applications. We offer hydraulic hose assembly services." />
        <meta name="keywords" content="Top hydraulic hose supplier in Pakistan, hydraulic hoses, hydraulic hose fittings, hydraulic hose assembly, hydraulic hose supplier, hydraulic hose manufacturer, hydraulic hose repair, hydraulic hose types, hydraulic hose specifications, hydraulic hose sizes, hydraulic hose pressure rating" />
        <meta name="author" content="Hamza Tahir" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shahzad Trading Company - Hydraulic Hoses Supplier</title>
      </Helmet>
      <header className="App-header">
      <Router>    
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
          path="/products"
          element={<Projects />}
        />
         <Route
          path="/about"
          element={<About />}
        />
          <Route
          path="/contact"
          element={<Contact />}
        />
          <Route
          path="/Privacy"
          element={<Privacy />}
        />
         <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        </Router>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" className="bg-grey productmodal">
      <DialogContent className="bg-grey">
        <Grid container spacing={2} sx={{ height: '400px' }}>
          {/* Image Slideshow */}
          <Grid item lg={6} md={6} sm={0} xs={0}  sx={{ overflow: 'hidden' }}>
            {/* Add your image slideshow component here */}
            <img
              src={shop}
              alt="Slideshow"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>

          {/* Sign-up Form */}
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: "7%"}}>
            <Typography variant="h6" gutterBottom>
              Sign in to our website to get emails about our fresh hydraulic hose stocklots
            </Typography>
            <form>
              <TextField
                label="Enter your email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={email}
                onChange={(e)=> handleChange(e.target.value)}
                InputProps={{
                  style: {
                    color: 'white',
                    borderColor: "white"
                  },
                  // inputComponent: WhiteOutlinedInput,
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                // Add your email state and onChange handler here
              />
              {error || success?
              <p style={{color: error ? "red" : "green"}}>{error ? error : success}</p> : null}
              <Button variant="contained" color="primary"  onClick={sendEmail}>
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
    </div>
  );
}

export default App;
