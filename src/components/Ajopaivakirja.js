import React from 'react';
import Typography from '@material-ui/core/Typography';


function Paivakirja (props){
 
	return (
		<div >
	{ /* näytettään objektin tiedot */ }
	<Typography color='primary'> Nimi: <br/></Typography>
	<Typography color='primary'>Rekisterinumero:  <br/></Typography>
	<Typography color='primary'>Matka:  <br/><br/></Typography>
	<Typography color='primary'>Tekija:  <br/></Typography>

</div>

		);
}

export default Paivakirja;  



