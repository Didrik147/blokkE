/*
Vi ønsker å lage et program som simulerer et terningkast.
Tips til kommandoer:
Math.random()
Math.floor()
*/

/*
console.log(Math.random())
console.log(Math.floor(5.8))
console.log(Math.floor(2.1))
console.log(Math.floor(0.99999999))
*/

//let tilfeldig = Math.random();
//let tilfeldig = Math.floor(Math.random()*6);
//let tilfeldig = Math.floor(Math.random()*6) + 1;


//console.log(tilfeldig)


function terning(sider){
	//return Math.floor(Math.random()*sider) + 1;
	let kast = Math.floor(Math.random()*sider) + 1;
	return kast;
}

//console.log(terning(6))

/*
let i = 0;

while (i < 5){
	console.log(i)
	i++;
}

for(let i=0; i<5; i++){
	console.log(i)
}
*/

//let tekst = ""

for(let i=0; i<5; i++){
	console.log(terning(6))
	//tekst += terning(6)
	//tekst += ", "
}

//console.log(tekst)

//Jobb med oppgaver knytte til funksjoner (3D)

/* Utfordring:
-Sjekk om to terninger ble like
-Sjekk om tre terninger ble like
-Regn ut summen av antall øyne på terningene
-Lag et enkelt Yatzy spill
*/