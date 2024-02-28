import { Dialog, DialogContent, Grid, TextField } from "@mui/material";
import * as React from 'react'; 
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Button, Tooltip } from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import AdbIcon from '@mui/icons-material/Adb';
import './index.css'
import { Link } from "react-router-dom";
import { DataSaverOff } from "@mui/icons-material";

const pages = ['Products', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Open the dialog when component mounts
    setOpen(true);

    // Clean up function to close the dialog when component unmounts
    return () => {
      setOpen(false);
    };
  }, []);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <>
        <Grid>
        <AppBar position="static" className="header">
      <Container  fullWidth>
        <Toolbar disableGutters className="toolbar">
          <DataSaverOff sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <Link to='/'>Shahzad Trading</Link>  
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/'>Shahzad Traders</Link>  
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: "end", display: { xs: 'none', md: 'flex' } }}>
          
              <Button
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link to="/products"> Products </Link>
              </Button>

              <Button
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link to="/contact"> Contact </Link>
              </Button>
       
          </Box>

          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" className="bg-grey">
      <DialogContent className="bg-grey">
        <Grid container spacing={2} sx={{ height: '400px' }}>
          {/* Image Slideshow */}
          <Grid item xs={6} sx={{ overflow: 'hidden' }}>
            {/* Add your image slideshow component here */}
            <img
              src="https://via.placeholder.com/500x400"
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
        </Toolbar>
      </Container>
    </AppBar>
        </Grid>
        </>

    )
}

export default Header;
