import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));


function DrawerMUI () {

const classes = useStyles();
const [open, setOpen] = useState(false);

const handleOpen = () => { 
  setOpen(true); 
} 

const handleClose = () => { 
  setOpen(false); 
}

const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
      }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>
        <Typography variant='h5'  className={classes.title} >Taxi2Airport Booker </Typography> 
        </Toolbar>
      </AppBar>

      <Drawer value={ value } anchor='left' open={ open } onClick={ handleClose }>
      
      <List>
      <ListItem button component={ Link } to='/Varaa' >
        <ListItemIcon  ><HomeIcon /></ListItemIcon>
<ListItemText primary='Varaa matka' /> </ListItem>

<ListItem button component={ Link } to='/Bookings'>
        <ListItemIcon><HistoryIcon /></ListItemIcon>
<ListItemText primary='Kaikki matkat' /> </ListItem>



    </List>
      
      </Drawer>

   
   
    </div>
  );
}

export default DrawerMUI;
