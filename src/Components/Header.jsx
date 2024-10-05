import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import Logo from '../Images/Logo.jpg'
import React from 'react'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const pages = ['about us', 'category', 'blog', 'contact'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: '0px 0px '}}>
        <Container maxWidth="xl" sx={{ px: { lg: '40px', md: '30px', sm: '20px', xs: '16px' }, m: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <img src={Logo} height={"80px"} width={"120px"} alt="" />
          </Box>
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
                display: { xs: 'block', md: 'none',},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex',} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', fontFamily:'"Prosto One", system-ui', display: 'block', textTransform: 'uppercase', fontSize: '16px', margin: '0', padding: '40px 20px',lineHeight:'0px ' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: '20px' }}><SearchIcon sx={{'&:hover':{color:'#dd1a18'},transition:'0.5s', color: '#000' }} /></Box>
            <Box sx={{ mr: '20px' }}><FavoriteBorderIcon sx={{'&:hover':{color:'#dd1a18'},transition:'0.5s', color: '#000' }} /></Box>
            <Box sx={{ mr: '20px' }}><PersonOutlineIcon sx={{'&:hover':{color:'#dd1a18'},transition:'0.5s', color: '#000' }} /></Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header