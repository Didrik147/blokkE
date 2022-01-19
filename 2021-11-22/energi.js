/* Lag et program som regner ut potensiell og kinetisk energi */

//Kommentar på én linje

/* Denne kommentaren
kan gå over
flere linjer */

let m = 2; //masse i kg
console.log("Massen er", m, "kg");

const g = 9.81; //tyngdeakselerasjon i m/s**2
console.log("Tyngdeakselerasjonen er", g, "m/s**2")

let h = 5; //høyde i m
console.log("Høyden er", h, "m")

// Regner ut potensiell energi
let Ep = m*g*h;

console.log("Den potensielle energien er", Math.round(Ep), "J")

document.write("Den potensielle energien er " + Math.round(Ep) + " J")

/* Oppgave til dere:
1) Lag et program som regner ut kinetisk energi
til en bil på 1400 kg som kjører 80 km/h.

2) Lag et program som regner om km/h til m/s

3) Jobb med blandede oppgaver
*/

// Linjeskift (kan også bruke \n)
console.log()

m = 1400
console.log("Bilen veier", m, "kg")

let v = 80 // km/h

// Gjør om til m/s ved å dele på 3.6
v = v/3.6 // m/s

//Vi kan runde av til et bestemt antall desimaler ved å bruke .toFixed()
console.log("Farten er", v.toFixed(2), "m/s")

// Regner ut kinetisk energi
let Ek = 0.5*m*v**2 // J
Ek = Ek/1000 //kJ

// Vi kan runde av svaret til nærmeste heltall ved å bruke Math.round()
console.log("Den kinetiske energien er", Math.round(Ek), "kJ")