/* Vi ønsker å lage et program som finner Fibonacci tallene */


let tallA = 0;
let tallB = 1;

let tallF = tallA + tallB;
console.log("Noen fibonaccitall:")
console.log(tallA)
console.log(tallB)
console.log(tallF)

// Initialiserer tellevariabelen
let i = 0;

/* Variabel for forholdet mellom to påfølgnede
fibonaccitall */
let forhold;

while (i < 20){
	//Oppdaterer tallene
	tallA = tallB;
	tallB = tallF;

	// Regner ut det neste fibonaccitallet
	tallF = tallA + tallB;

	//Skriver ut til konsoll
	console.log(tallF)

	//Regner ut forhold
	forhold = tallF/tallB

	// Inkrementerer tellevariabelen
	i += 1;
}

console.log("Forholdet mellom to påfølgende fibonaccitall blir", forhold)
console.log("Forholdet går mot det gylne snitt! (phi, φ)")