import React,  { useState, useEffect,useReducer }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DrawerMUI from './nav/DrawerMUI'
import Bookings from './components/bookings'
import Varaa from './components/varaa'
import lightBlue from '@material-ui/core/colors/lightBlue';
import Complete from './components/complete'
import  Upcoming from './components/upcoming'
import {fetchAll,fetchUpcoming,fetchHotels} from './components/fetch'
import {Context} from './context/dataObj'
import reducer from './reducer'
import axios from 'axios';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import {green} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  const url = 'http://localhost:8081';

  const [state,dispatch] =useReducer(reducer,[])
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState([]);
  const [upcomingData, setUpcoming]= useState([])

function fetchGlobal(){
  fetchAll().then((result)=> {
    setData(result)
  })
  .then( ()=>{
    fetchUpcoming().then((result)=> {
      setUpcoming(result)
    })
  })
}

 const onComplete = (id,e) => {
  const url = 'http://localhost:8081';
  axios.get(url + '/data/complete/' + id)
    .then(response => {
      if (response.status !== 200) {
        console.log("Response error onComplete()")
      }
    })
    .then( ()=>{
      fetchGlobal();
    })
}

 const remove = (id) =>  {
  axios.get(url+'/data/delete/'+id)   
  .then(response => {
      if (response.status === 200) {          
        let newList = upcomingData.filter((row) => row.id !== id);
        setUpcoming(newList);     
      }
  }).then( ()=>{
    fetchGlobal();
  }) 
}

if (data !=null){
  data.map((row) => { 
    if (row.complete == 0)
    {
     row.complete=<Button onClick={(e)=>onComplete(row.id, e)} style={{ textDecoration: 'none' }}color="secondary">Complete</Button>    
    } else if (row.complete == 1)
    {
      row.complete=<IconButton >
      <DoneIcon  style={{ color: green[500]}}/>
    </IconButton>
    }
})
}
    
  const theme = createMuiTheme({
    
    palette: {
      primary:{
        main: lightBlue[700], 
      },
      secondary: {
        main: '#11cb5f',
        second: 'red',
      },
      type: 'dark',
      } 
    });

    useEffect( () => {
      fetchGlobal();
        fetchHotels().then((result)=> {
          setHotels(result)
        })
     }, [])

  return (
    <BrowserRouter> 
    <MuiThemeProvider theme={ theme }> 
    <CssBaseline />
    <DrawerMUI />
    <Context.Provider value={{remove,data,hotels,upcomingData}}> 
    <Switch> 
    <Route exact path='/' render={ () => <Varaa  /> } />
    <Route path='/Bookings'  render={ () => <Bookings  />  } />
    <Route path='/Upcoming'  render={ () => <Upcoming  />  } />
    <Route path='/complete/:id' component={ Complete } />
  <Route render={ (props) => <Varaa  {...props} rows={hotels} />} /> 
    </Switch>
    </Context.Provider>
    </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
