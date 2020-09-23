import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from "date-fns/locale/fi";

import {useParams} from 'react-router';

// import axios from 'axios';
// const url = 'http://localhost:8080/matka/edit/';

function Edit () {
    let { id, mista, mihin, paiva, aika, auto, kuljettaja} = useParams();
    /* let paivaTemp = paiva.split('.')
    paiva =  paivaTemp[1] + '.' + paivaTemp[0] + '.' + paivaTemp[2] ;
 */

 console.log(paiva);

  const [booking, setValues] = useState({
      id: id,
      mista: mista,
      mihin:mihin,
      paiva: new Date(paiva),
      aika: aika,
      auto: auto,
      kuljettaja: kuljettaja
      
  });

  const [viesti, setViesti] = useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...booking,
       [e.target.name]: e.target.value
     });
   };


   const muutaPaiva = date => {
     setValues({
      ...booking,
      paiva: date
     });
   };

// Funktio painikkeen painallukselle
  const lisaaMatka = (e) => {
    e.preventDefault();
/*
    const matkaLomake = {
      'otsikko': matka.otsikko,
      'paiva':  matka.paiva.getFullYear() + '-' + (matka.paiva.getMonth() + 1) + '-' + matka.paiva.getDate(),
      'paikka': matka.paikka,
      'saa': matka.saa,
      'kuva': matka.kuva,
      'kuvaus': matka.kuvaus
    }

    axios.post(url +  matka.id, matkaLomake)
      .then(response => {
          if (response.status === 200) {
               setValues({
                  otsikko: '',
                  paiva: new Date(),
                  paikka: '',
                  saa: '',
                  kuvaus: '',
                  kuva: ''
              });
              setViesti('Muutos onnistui');
          } else {
              setViesti('Muutos ei onnistunut');
          }
      })
*/
    setViesti('Muutosta ei ole backissa');
  }




  return (
    <Paper style={ {padding:'10px', margin:'30px'} }>
    <form>
      <TextField label='Otsikko' name='otsikko' value={ matka.otsikko }
      onChange={ muutaSuurella } margin='normal' required fullWidth
      autoFocus />
      { /*
      <TextField label='Päivä' name='paiva' value={ matka.paiva }
      onChange={ muuta }  margin='normal' required fullWidth />
      */ }
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale}>
          <KeyboardDatePicker
              label='Päivä'
              cancelLabel='Peruuta'
              name='paiva'
              value={matka.paiva}
              onChange={muutaPaiva}
              fullWidth
              required
              color='primary'
              format='dd.MM.yyyy'
           />
      </MuiPickersUtilsProvider>
      <TextField label='Paikka' name='paikka' value={ matka.paikka }
      onChange={ muuta } margin='normal' required fullWidth />
      <TextField label='Sää' name='saa' value={ matka.saa }
      onChange={ muuta } margin='normal' required fullWidth />
      <TextField label='Kuvaus' name='kuvaus' value={ matka.kuvaus }
      onChange={ muuta } margin='normal' multiline rows='4' fullWidth />
      <Input accept='image/*' name='kuva' id='kuva' type='file'
        onChange={muutaKuva} style={ {display: 'none'} } />

      <InputLabel htmlFor='kuva'>
          Kuva
          <Button component='span' color='primary' style={ {marginLeft: 20, marginRight: 20} }>
              <AttachmentIcon />
          </Button>
          {kuvaNimi}
      </InputLabel>
      <div style={ {textAlign: 'center'} }>
        <Button onClick={lisaaMatka} variant='contained' color='primary' style={ {marginRight:20} }><CreateIcon /> Muokkaa</Button>
        <Button onClick={tyhjenna} variant='contained' color='secondary'><ClearIcon /> Tyhjennä</Button>
      </div>
    </form>
    <Typography style={ {marginTop: 20} }>{ viesti }</Typography>
    </Paper>
  );
}

export default Edit;
