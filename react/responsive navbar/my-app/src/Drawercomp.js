import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Drawercomp = () => {
    const [opendrawer, setOpendrawer] = useState(false)
    
  return (
    <React.Fragment>
        <Drawer open = {opendrawer} onClose = {()=>setOpendrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Login</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={()=> setOpendrawer(!opendrawer)} sx={{color:'white', ml:'auto'}}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>

  )
}

export default Drawercomp