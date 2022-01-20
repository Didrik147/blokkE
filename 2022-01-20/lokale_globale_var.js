let a = 2; //global variabel

function f(x){
	let b = 1; //lokal variabel
	let y = a*x + b;

	return y
}

let p = 3
let l = f(p)
console.log(l)
console.log(a) //går bra, siden a er global
console.log(b) //feilmelding, siden b er lokal