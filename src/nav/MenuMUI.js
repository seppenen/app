import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));


function MenuMUI () {


  const classes = useStyles();

const [anchorMenu, setMenuOpen] = useState(null);
const [anchorUser, setAnchorUser] = useState(null);

const handleMenu = (event) => { setMenuOpen(event.currentTarget); }
const hangleUser = (event) => { setAnchorUser(event.currentTarget); }

const handleClose = () => {
   setMenuOpen(null); 
   setAnchorUser(null);
   
  }

 const menuVasen = <Menu 
  anchorEl={ anchorMenu }
  open={ Boolean(anchorMenu) }
  onClose={ handleClose }>
 <MenuItem onClick={ handleClose }> 
 <ListItemIcon>
   <HomeIcon />
   </ListItemIcon> 
   <ListItemText primary='Sananlasku' />
 </MenuItem>

 <MenuItem onClick={ handleClose }>
    <ListItemIcon><CreateIcon /></ListItemIcon>
 <ListItemText primary='Lisää' /> </MenuItem>
 <MenuItem onClick={ handleClose }>
    <ListItemIcon><ListIcon /></ListItemIcon>
 <ListItemText primary='Listaa' /> </MenuItem>
 <MenuItem onClick={ handleClose }>
    <ListItemIcon><CloudQueueIcon /></ListItemIcon>
 <ListItemText primary='Sää' /> </MenuItem>
   </Menu>
   

   const menuOikea = <Menu 
   anchor='right'
   anchorEl={ anchorUser}
   open={ Boolean(anchorUser) }
   onClose={ handleClose }>
  <MenuItem onClick={ handleClose }> 
  <ListItemIcon>
    <AccountCircleIcon />
    </ListItemIcon> 
    <ListItemText primary='Omat tiedot' />
  </MenuItem>
 
  <MenuItem onClick={ handleClose }>
     <ListItemIcon><SettingsIcon /></ListItemIcon>
  <ListItemText primary='Asetukset' /> </MenuItem>
  <MenuItem onClick={ handleClose }>
     <ListItemIcon><ExitToAppIcon /></ListItemIcon>
  <ListItemText primary='Kirjaudu ulos' /> </MenuItem>

    </Menu>
    
   


  return (
    <div>
      <AppBar position='static'>
        <Toolbar >
          <IconButton onClick={handleMenu} color='inherit'>
            <MenuIcon />
          </IconButton>
           {menuVasen}
          <Typography variant='h5' className={classes.title} >Matkat</Typography>
          <IconButton  onClick={hangleUser}  color='inherit'>
            <AccountCircleIcon />
          </IconButton>
          {menuOikea}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  MenuMUI;
