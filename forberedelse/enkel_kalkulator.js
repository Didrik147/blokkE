let tall1 = prompt("Skriv inn et tall: ")
tall1 = Number(tall1)

let tall2 = prompt("Skriv inn et annet tall: ")
tall2 = Number(tall2)

let regneoperasjon = prompt("Velg regneoperasjon: ")

let resultat;

if (regneoperasjon == "+"){
	resultat = tall1 + tall2;
}else if(regneoperasjon == "-"){
	resultat = tall1 - tall2;
}else if(regneoperasjon == "*"){
	resultat = tall1 * tall2;
}else if(regneoperasjon == "/"){
	resultat = tall1 / tall2;
}

utskrift = tall1 + regneoperasjon + tall2 + "=" + resultat

console.log(utskrift)

document.write(utskrift)