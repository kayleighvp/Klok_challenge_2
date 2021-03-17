function startTijd() {
  var tijdmoment = new Date();
  var uren = tijdmoment.getHours();
  var minuten = tijdmoment.getMinutes();
  var secondes = tijdmoment.getSeconds();
  
  var tijdTekst = 'AM';
	if(uren == 0){
		uren = 12;
	}
	if(uren > 12){
		// uren = uren + 12;
		tijdTekst = 'PM'; // dagverschil aanduiding door gebruik van AM en PM.
	}
   minuten = checkTijd(minuten);
   secondes = checkTijd(secondes);
  
  document.getElementById('tijd').innerHTML = uren + ':' + minuten + ':' + secondes + tijdTekst; //actuele tijd weergave.
  
  if (uren < 12){
	  document.getElementById('melding').innerHTML = 'Good morning!'; // begroeting dat het ochtend is.
  } else {
	  document.getElementById('melding').innerHTML = 'Good afternoon!'; // begroeting dat het middag is.
  }
  
  if ( uren == 8 && minuten == 30)
	document.getElementById('melding').innerHTML = ' Time to wake up!'; // wekker om 8:30 als het tijd is om wakker te worden.
  
  if ( uren == 22 && minuten == 15)
	  document.getElementById('melding').innerHTML = ' It is time to sleep!'; // wekker om 22:15 als het tijd is om te slapen.
}
startTijd();
setInterval(startTijd, 1000);

function checkTijd(i) {
	if (i < 10){
		i = '0' + i;
	return i;
	}
} // een 0 wordt toegevoegd als de secondes of minuten nog onder de tien vallen zodat er 2 nummers worden weergegeven.

function kalenderDatum(){
	var datumMoment = new Date();
	var dag = datumMoment.getDate(); // geeft de dag aan in een getal.
	var maand = datumMoment.getMonth()+1; // maanden beginnen bij 0 dus +1 toevoegen voor goede maand.
	var jaar = datumMoment.getFullYear(); // geeft het jaartal aan waar we ons nu in bevinden.
	
	document.getElementById('datum').innerHTML = dag + '/' + maand + '/' + jaar;
}
kalenderDatum();
setInterval(kalenderDatum, 1000);

