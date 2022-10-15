import React, {useState} from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Drawercomp from './Drawercomp';
const Header = () => {

const [value, setValue] = useState(0)
const theme = useTheme()
const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <React.Fragment>
        <AppBar sx = {{background : '#063970'}}>
            <Toolbar>
                <Typography variant='h6' sx = {{mr: 2, }}>
                    Shoppie
                </Typography>
                <ShoppingCartCheckoutIcon/>
                {
                    isMatch ? 
                    (<Drawercomp/>) 
                    : 
                    
                    (
                    <>
                        <Tabs  sx = {{ml: 'auto'}} value= {value}   onChange={(e, value)=>{setValue(value)}}>
                        <Tab label = 'Products'/>
                            <Tab label = 'Home'/>
                            <Tab label = 'About'/>
                            <Tab label = 'Home'/>
                            <Tab label = 'About'/>
                        </Tabs>
                        <Button variant='contained' sx = {{ml: 'auto'}}>LogIn</Button>
                        <Button variant='contained' sx = {{ml: '10px'}}>SignUp</Button>
                    </>
                    )
                }
   
            </Toolbar>  
        </AppBar>
    </React.Fragment>
    
  )
}

export default Header; 