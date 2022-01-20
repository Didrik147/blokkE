// Funksjon uten parametere og uten returverdi
function siHei1(){
	console.log("Hei")
}


siHei1()
siHei1()
siHei1()


// Funksjon med parametere, uten returverdi
function siHei2(navn){
	console.log("Hei", navn)
}

siHei2("Didrik")
siHei2("Thompson")
siHei2("Ada")

// Funksjon med parametere og returverdi
function siHei3(navn){
	let output = "Hei " + navn
	return output
}

// Funksjon uten parametere, med returverdi


let output = siHei3("Roest")
console.log(output)

console.log(siHei3("Bill"))
console.log(siHei3("Alan"))