import React from 'react';
import Paper from '@material-ui/core/Paper';
import {useParams} from 'react-router';
import Grid from '@material-ui/core/Grid';

export default function Complete(){

    let { id } = useParams();
    console.log(id)


    return(
<Paper style={{ flexGrow: 1, maxWidth:1200, paddingTop:20, margin: '10px auto'}}>
<Grid container spacing={2} justify="center" > 
<h3>Booking ID {id} has been copmleted</h3>
</Grid>
   
</Paper>

      );
    }
