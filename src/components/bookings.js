import React, {useState, useEffect,useContext} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Context} from '../context/dataObj'


      const columns = [
        { id: 'id', label: 'ID', minWidth: 30 },
        { id: 'mista', label: 'Mistä', minWidth: 100 },
        { id: 'mihin', label: 'Mihin', minWidth: 100 },
        { id: 'paiva', label: 'Päivä', minWidth: 100, align: 'right', },
        { id: 'aika', label: 'Aika', minWidth: 100, align: 'right', },
        { id: 'asiakas', label: 'Asiakas', minWidth: 100, align: 'right', },
        { id: 'auto', label: 'Auto', minWidth: 100 , align: 'right', },
        { id: 'kuljettaja', label: 'Kuljettaja', minWidth: 100,align: 'right', },
        { id: 'complete', label: 'Completed', minWidth: 100, align: 'right', },
          
      ];

      const useStyles = makeStyles({  
        root: {
            marginTop: 30,
           margin: 'auto',
           maxWidth: 1200,

        },
        link:{
          color: 'white',
        }
      });
      
   export default function Bookings(){
 
    const {data}=useContext(Context)
    const classes = useStyles();


    return (
        <Paper style={{ flexGrow: 1, maxWidth:1200, paddingTop:20, margin: '10px auto'}}>
        <Grid container spacing={2} justify="center" > 

         <TableContainer className={classes.root}>
              <Typography variant='h5' style={{ flexGrow: 1, textAlign:'center', margin: 20}}>All bookings </Typography> 
        <Table  >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }} >
                  {column.label}
                  
                </TableCell>
              ) ) }
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow hover key={row.id}>
                  
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                       
                      </TableCell>
                    );                  
                  })}              
                </TableRow>              
              );
            })}         
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Paper>
      
      );


   }
