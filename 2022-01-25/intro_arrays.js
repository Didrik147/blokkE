// Vi skal lære om arrays

let array1 = [5, 9, 4, 2, 8, 4]

console.log(array1)
console.log(array1[0])

let biler = ["Lada", "Subaru", "Mazda", "Volkswagen"]

console.log(biler)
console.log(biler[0])
console.log(biler[1])
console.log(biler[2])
console.log(biler[3])

//pop fjerner siste verdi
biler.pop()
console.log(biler)

// shift fjerner første verdi
biler.shift()
console.log(biler)

//push legger til verdi til sist i arrayet
biler.push("Toyota")
console.log(biler)

//unshift legger til verdi ved start av arrayet
biler.unshift("Tesla")
console.log(biler)

//splice kan brukes til å fjerne eller legge til elementer andre steder enn midten av et array
biler.splice(2, 0, "Honda")
console.log(biler)

// fjerner bilene fra og med index 2. Fjerner 3 biler
biler.splice(2, 3)
console.log(biler)

let lengde = biler.length;
console.log("Antall bilmerker: " + lengde)

let programmering = ["JavaScript", "C++", "Python", "Java", "Fortran"]

console.log(programmering)

// Ønsker å skrive ut alle elementene i arrayet på hver sin linje
for(let i = 0; i < programmering.length; i++){
	console.log(programmering[i])
}

/*
Oppgave til dere:
-Lek dere med arrays. Lag ulike typer arrays, og utforsk de ulike kommandoene
-Gjør oppgavene i 3E
-Prøv: Lag et program som regner ut gjennomsnittet av tallene i et array
-Utfordring: Lag et program som regner ut median av et tallmateriale
*/