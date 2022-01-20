// Funksjon uten parametere og returverdi
function siHei1(){
	console.log("Hei")
}

/*
siHei1()
siHei1()
siHei1()
*/

// Funksjon med parametere, uten returverdi
function siHei2(navn){
	console.log("Hei", navn)
}

/*
siHei2("Didrik")
siHei2("Thompson")
siHei2("Ada")
*/

// Funksjon med parametere og returverdi
function siHei3(navn){
	let output = "Hei " + navn
	return output
}

console.log(siHei3("Roest"))
console.log(siHei3("Turing"))
console.log(siHei3("Linus"))