/* Lag et program som sjekket om et gitt tall er partall eller oddetall */
/*
let tall = 29;

if (tall%2 == 0){
	console.log("Tallet er partall");
}else{
	console.log("Tallet er oddetall");
}
*/

let uke = 42;

if (uke == 40){
	console.log("Det er høstferie!");
}else if (uke%2 == 0){
	console.log("Uke", uke, "er partall");
}else{
	console.log("Uke", uke, "er oddetall");
	console.log("Vi har IT1 mandag 1. økt");
}

/*
Oppgave til dere:
-Legg til andre fag dere kun har på partallsuker eller oddetallsuker
-Ta inn uketallet fra brukeren
-Oppgrader programmet slik at dersom brukeren skriver inn et ugyldig ukenummer, skal brukeren få beskjed om det
-Utvid programmet til å gjelde for andre ferier
*/