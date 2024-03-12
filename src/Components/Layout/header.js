import { Dialog, DialogContent, Grid, TextField } from "@mui/material";
import * as React from 'react'; 
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Button, Tooltip } from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import AdbIcon from '@mui/icons-material/Adb';
import './index.scss'
import { Link, useNavigate } from "react-router-dom";
import { DataSaverOff } from "@mui/icons-material";
import shop from "../../Assets/shophose.jpg"

const pages = ['Products', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

   const handleNavigate=(page) => {
    navigate(page);
    }
  
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
          <Link to='/'>Shaharyar Traders</Link>  
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
                display: { xs: 'block', md: 'none',width: "90%" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className={`navitem ${window.location.pathname === page ? 'active' : ''}`} to={"/" + page.toLowerCase()}>{page}</Link></Typography>
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
                onClick={()=>handleNavigate("/products")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
            <Link className={`navitem ${window.location.pathname === '/products' ? 'active' : ''}`}>Products</Link>   
              </Button>

              <Button
                // key={page}
                onClick={()=>handleNavigate("/contact")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link className={`navitem ${window.location.pathname === '/contact' ? 'active' : ''}`} > Contact </Link>
              </Button>
       
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
        </Grid>
        </>

    )
}

export default Header;
