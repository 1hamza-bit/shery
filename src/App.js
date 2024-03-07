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

function App() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Open the dialog when component mounts
    setOpen(true);

    // Clean up function to close the dialog when component unmounts
    return () => {
      setOpen(false);
    };
  }, []);


  return (
    <div className="App">
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
          path="/contact"
          element={<Contact />}
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
          <Grid item xs={6} sx={{ overflow: 'hidden' }}>
            {/* Add your image slideshow component here */}
            <img
              src={shop}
              alt="Slideshow"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>

          {/* Sign-up Form */}
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                // Add your email state and onChange handler here
              />
              <Button variant="contained" color="primary" type="submit">
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
