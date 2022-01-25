/*
Lag et program som regner ut gjennomsnittet av tallene i et array
Eks. på praktisk bruksområde:
-Karaktersnitt
-Snitthøyde på rekrutter
*/

let tallArr = [48, 25, 92, 1, 37, 3, 89];

let l = tallArr.length;

let sum = 0;

for(let i=0; i<l; i++){
	sum += tallArr[i]
}

let gjsnitt = sum/l;

console.log("Gjennomsnitt: " + gjsnitt.toFixed(2))

/*
Oppgave til dere:
-Regn ut gjennomsnittet av andre tallmaterialer
-Skriv om koden slik at den bruker en while-løkke istedenfor en for-løkke
-Skriv om koden slik at den bruker en funksjon. Kall funksjonen for to ulike array med tall.
*/

// Som en funksjon
function gjennomsnitt(tallArr){
	let l = tallArr.length;

	let sum = 0;

	for(let i=0; i<l; i++){
		sum += tallArr[i]
	}

	let gjsnitt = sum/l;

	return gjsnitt
}

console.log("Gjennomsnitt: " + gjennomsnitt(tallArr).toFixed(2))
