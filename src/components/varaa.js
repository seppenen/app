import React, {
  useState, useContext, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {
  makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import {
  Button
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Upcoming from './upcoming'
import axios from 'axios';
import {Context} from '../context/dataObj'
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),

    },

    formControl: {

      minWidth: '100%',
    },
    paper: {
      maxWidth: 1200,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),

    },
    textField: {
      paddingTop: theme.spacing(2),
      width: 300,
    },
    button: {
      marginTop: theme.spacing(2),

      width: 100,

    },
    table: {
      marginTop: 30,
      margin: 'auto',
      maxWidth: 1200,
    },
  }),
);


export default function Varaa() {

  const [hotel, setHotel] = React.useState(''); 
  const classes = useStyles();
  const {hotels} = useContext(Context)

  const [data, setValues] = useState({
    mista: '',
    mihin: '',
    paiva: new Date(),
    aika: new Date(),
    etunimi: '',
    sukunimi: '',
    auto: '',
    kuljettaja: '',
    complete: 0
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setValues({
      ...data,
      paiva: date

    });
    console.log(date)
  };

  const handleTimeChange = (time) => {
    setValues({
      ...data,
      aika: time
    });
  };


  const handleHotelChange = (event) => {
    setHotel(event.target.value);

  };


  const addBooking = (e) => {
    e.preventDefault();


    const formData = {
      mista: hotel,
      mihin: 'Lentokenttä',
      paiva: data.paiva.getDate() + '.' + (data.paiva.getMonth() + 1) + '.' + data.paiva.getFullYear(),
      aika: data.aika,
      asiakas: data.etunimi + ' ' + data.sukunimi,
      auto: 'zhz-949',
      kuljettaja: 'antti holma',
      complete: 0
    }
    const url = 'http://localhost:8081';

    axios.post(url + '/varaus/add', formData)
      .then(response => {

        if (response.status === 200) {
          setValues({
            mista: '',
            mihin: '',
            paiva: new Date(),
            aika: new Date(),
            auto: '',
            etunimi: '',
            sukunimi: '',
            kujettaja: '',
            complete: 0,
          });
        } else {
          console.log("NOT ok")
        }
      })
  }

  const muuta = (e) => {
    setValues({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  console.log(hotels)


  return (
    <div>

      <Paper className={classes.paper}>
        <Grid container spacing={2} justify="center" >

          <Typography variant='h5' style={{ flexGrow: 2, textAlign: 'center', margin: 'auto auto' }}>Book a transfer to the airport

        </Typography>
          <form className={classes.root} noValidate autoComplete="off">

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel name="hotel" id="hotel">Select Hotel</InputLabel>
              <Select
                labelId="hotel"
                id="hotel"
                value={hotel}
                onChange={(e) => handleHotelChange(e)}
              >
                <MenuItem value="">
                  Select a hotel
          </MenuItem>

                {hotels.map((row) => (
                  <MenuItem key={row.id} value={row.nimi}>{row.nimi}</MenuItem>

                ))
                }

              </Select>

            </FormControl>

            <Grid container justify="space-between">
              <TextField className={classes.textField} id="outlined-basic" onChange={muuta} value={data.etunimi} name="etunimi" label="Firstname" variant="outlined" />

              <TextField className={classes.textField} id="outlined-basic" onChange={muuta} value={data.sukunimi} name="sukunimi" label="Lastname" variant="outlined" />
            </Grid>
            <Grid container justify="space-between">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePicker
                  label='Päivä'

                  disableToolbar
                  variant="inline"
                  format='dd.MM.yyyy'
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={data.paiva}
                  autoOk={true}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"

                  ampm={false}
                  label="Time"
                  value={data.aika}
                  onChange={handleTimeChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />

              </MuiPickersUtilsProvider>

            </Grid>
            <Button className={classes.button} variant="outlined" onClick={addBooking}>Lisää</Button>
          </form>

        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2} justify="center" >

          <Upcoming />

        </Grid>
      </Paper>

    </div>

  )
}
