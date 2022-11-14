//This is being built as part of Capstone project.
//Header.js contains all the functionailities with respect to navigation in the application

import React from 'react';
import './Header.css';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { withStyles } from "@material-ui/core/styles";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const WhiteShoppingCartIcon = withStyles({
    root: {
      color: "white"
    }
  })(ShoppingCartRoundedIcon);

//The below code is for the navigation bar using material UI
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

function Header(){
        return(
            <div>
               <header className = "header">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar sx={{justifyContent: "space-between"}}>
                                <div className = "leftMost">
                                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                                        <WhiteShoppingCartIcon>
                                            <ShoppingCartRoundedIcon/>
                                        </WhiteShoppingCartIcon>
                                    </IconButton>
                                    <Typography noWrap component="div" sx={{ fontSize : 14, flexGrow: 1, display: { xs: 'none', sm:'block' } }}> upGrad E-shop </Typography>
                                </div>
                                
                                <div className = "middle">
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                
                                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
                                </Search>
                                </div>
                                
                                <div className='rightMost'>
                                    <Stack direction="row" spacing={2} >  
                                        <Button href="#" id = "login">Login</Button>
                                        <Button href= "#" id = "signUp">Sign Up</Button>
                                        <Button href="#" id = "home">Home</Button>
                                        <Button href="#" id = "addProduct">Add Product</Button>
                                        <Button id = "logout"> Logout </Button>
                                    </Stack>
                                </div>

                            </Toolbar>
                        </AppBar>
                    </Box>
                </header>
            </div>
        ) //closing braces for return
    
}

export default Header;