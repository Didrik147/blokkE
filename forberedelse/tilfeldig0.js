//let tilfeldig = Math.random()
//let tilfeldig = Math.random()*6
//let tilfeldig = Math.floor(Math.random()*6)
//let tilfeldig = Math.floor(Math.random()*6) + 1

//console.log(tilfeldig)

function terning(){
	let kast = Math.floor(Math.random()*6) + 1
	return kast
}

for(let i=0; i<5; i++){
	console.log(terning())
}
