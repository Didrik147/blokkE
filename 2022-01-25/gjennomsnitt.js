// Program som regner ut gjennomsnitt av et tallmateriale

let tallArr = [50, 39, 2, 98, 73, 9, 13];
//let tallArr = [1, 2, 3, 4, 5, 6];

let l = tallArr.length;

let sum = 0;

for(let i = 0; i < l; i++){
	//console.log(tallArr[i])
	sum += tallArr[i];
}

//console.log(sum)

let gjsnitt = sum/l;

console.log("Gjennomsnittet er " + gjsnitt.toFixed(2))

/*
Oppgave til dere:
-Skriv om programmet slik at det bruker en while-løkke istedenfor en for-løkke
-Skriv om programmet slik at det bruker en funksjon
-Utfordring: Lag et program som regner ut median
-Jobb med oppgaver i 3E
*/