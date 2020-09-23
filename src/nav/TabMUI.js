import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import PaivakirjaApp from './../AjopaivakirjaApp'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Arvionti from './../components/ObjectHook'
import Fetch2 from './../components/fetchTehtava2'
import Lomake from './../Tehava5_2'
import DrawerMUI from './DrawerMUI'
import Tehtava5App from './../Tehtava5App'
import MenuMUI from './MenuMUI'


function TabMUI (props) {

 


    const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
      }
      
  return (
  

   
    <div >
      
<AppBar color='primary' position='static'>
<Tabs variant="fullWidth" value={ value }
onChange={ handleChange } >

<Tab label='Ajopäiväkirja' icon={<DriveEtaIcon />} /> 
<Tab label='Arviointi' icon={<CreateIcon />} /> 
<Tab label='Ruokahaku' icon={<FastfoodIcon />} />
<Tab label='Lomake' icon={<CreateIcon />} />
<Tab label='MenuMUI' icon={<ListIcon />} />
<Tab label='DrawerMUI' icon={<ListIcon />} />
<Tab label='Tehtävä 5' icon={<ListIcon />} />


</Tabs>
</AppBar>

{ value === 0 && <PaivakirjaApp /> }
{ value === 1 && <Arvionti /> }
{ value === 2 && <Fetch2 /> }
{ value === 3 && <Lomake  /> }
{ value === 4 && <MenuMUI  /> }
{ value === 5 && <DrawerMUI  /> }
{ value === 6 && <Tehtava5App  /> }

</div>

    
  );
}

export default TabMUI;
