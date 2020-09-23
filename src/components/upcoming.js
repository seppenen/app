import React, {useEffect, useState, useContext} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';


import {Context} from '../context/dataObj'


/* const editIcon = (
    <IconButton onClick={() => test()}>
      <EditIcon  />
    </IconButton>
  );
  const deleteIcon = (
    <IconButton onClick={() => test()}>
      <DeleteForeverIcon  />
    </IconButton>
  ); */


      const columns = [
        { id: 'id', label: 'ID', minWidth: 30 },
        { id: 'mista', label: 'Mistä', minWidth: 100 },
        { id: 'mihin', label: 'Mihin', minWidth: 100 },
        { id: 'paiva', label: 'Päivä', minWidth: 100, align: 'right', },
        { id: 'aika', label: 'Aika', minWidth: 100, align: 'right', },
        { id: 'asiakas', label: 'Asiakas', minWidth: 100, align: 'right', },
        { id: 'auto', label: 'Auto', minWidth: 100 , align: 'right', },
        { id: 'kuljettaja', label: 'Kuljettaja', minWidth: 100,align: 'right', },
        { id: 'edit', label: '', maxWidth: 50, align: 'right', },
        { id: 'complete', label: 'Delete', maxWidth: 50, align: 'right', },
        
    
      ];

      const useStyles = makeStyles({  
        root: {
            marginTop: 30,
           margin: 'auto',
           minWidth: 1200,
        },
      });
      
   export default function Upcoming(){
    
    const {remove, upcomingData}=useContext(Context)
    const classes = useStyles();

    if (upcomingData){
      upcomingData.map((row) => {   
         row.complete=<Button variant="outlined" color="secondary" onClick={()=>remove(row.id)} style={{ textDecoration: 'none' }} >Delete</Button>          
    })
    }
    
    return (
       
      <Paper className={classes.paper}>
<Grid container spacing={0} justify="center" > 
<Typography variant='h5' style={{  textAlign:'center', paddingTop:20, margin: 'auto auto'}}>Upcoming transfers
        </Typography> 
</Grid>
         <TableContainer className={classes.root}>
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
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {upcomingData.map((row) => {
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
      </Paper>    
      );
   }
