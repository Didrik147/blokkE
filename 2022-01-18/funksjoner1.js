//Enlinjet kommentar

/* Flerlinjer
kommentar */

// Funksjon som regner ut volum av en kule
function volumKule(r){
	const pi = Math.PI;

	let V = (4/3)*pi*r**3;

	return V
}

// Funksjon som regner ut areal av et rektangel
function arealRektangel(l, b){
	return l*b
}

//console.log(arealRektangel(3,7))


//console.log(volumKule(5))

/*
Oppgaver til dere:
-Lag tilsvarende funksjoner for areal/omkrets/volum/overflateareal av ulike geometriske figurer

-Lag en passende utskrift der dere runder av svaret
*/

let r = 7; //radius i cm

let V = volumKule(r);


console.log("Volumet av en kule med radius", r, "cm er")
console.log(V.toFixed(1), "cm**3")