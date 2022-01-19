/* Lag en enkel kalkulator! */

let a = prompt("Skriv inn et tall:")
a = Number(a)

// Tar inn regneoperasjon
let regneoperasjon = prompt("Regneoperasjon")

let b = prompt("Skriv inn et tall til:")
b = Number(b)


if (regneoperasjon == "+"){
	console.log(a+b)
}else if(regneoperasjon == "-"){
	console.log(a-b)
}else{
	console.log("Regneoperasjonen du valgte er ikke implementert")
}

/* Oppgave til dere
-Legg til andre regneoperasjoner
*/