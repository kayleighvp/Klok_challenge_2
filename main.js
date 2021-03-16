
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
		tijdTekst = 'PM'; // dagverschil aanduiding door gebruik van AM en PM
	}
   minuten = checkTijd(minuten);
   secondes = checkTijd(secondes);
  
  document.getElementById('tijd').innerHTML =
  uren + ':' + minuten + ':' + secondes + tijdTekst;
  
  if (uren < 12){
	  document.getElementById('melding').innerHTML = 'Good morning!';
  } else {
	  document.getElementById('melding').innerHTML = 'Good afternoon!';
  }
  
  if ( uren == 8 && minuten == 30)
	document.getElementById('melding').innerHTML = ' Time to wake up!';
  
  if ( uren == 22 && minuten == 15)
	  document.getElementById('melding').innerHTML = ' It is time to sleep!';
}
startTijd();
setInterval(startTijd, 1000);

function checkTijd(i) {
	if (i < 10) {i = '0' + i};  
	return i;
};


function kalenderDatum(){
	var datumMoment = new Date();
	var dag = datumMoment.getDate(); 
	var maand = datumMoment.getMonth()+1; // maanden beginnen bij 0 dus +1 toevoegen
	var jaar = datumMoment.getFullYear();
	
	document.getElementById('datum').innerHTML = dag + '/' + maand + '/' + jaar;
}
kalenderDatum();
setInterval(kalenderDatum, 1000);

// stopwatch toevoegen voor wanneer je moeten gaan slapen

//schema met tijden van eten en slapen aangeven

// document.getElementById('clock').innerHTML = today.getDate();


// array is meerdere variable samenvoegen.
// met Object kan je meer, het aanspreken is anders. grote verschil is . niet alleen variable instoppen maar ook een functie instoppen. Ook beginnen met een hoofdletter.
// met Date is een object met functies waar wij mee moeten werken.

// teller bouwen 
// var seconds = 0;
// function count(){
	// seconds++; // 1 optellen bij seconds
	// console.log(seconds);
	
// stel je wil elke secondes
// countt();

// setInterval(count, 1000);

	
// } // handig voor timers of stopwatch