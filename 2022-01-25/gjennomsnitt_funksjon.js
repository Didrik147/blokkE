// Program som regner ut gjennomsnitt av et tallmateriale

let tallArr = [50, 39, 2, 98, 73, 9, 13];
//let tallArr = [1, 2, 3, 4, 5, 6];


function finnGjennomsnitt(array){
	let l = array.length;

	let sum = 0;
	let i = 0;

	while (i < l){
		//console.log(tallArr[i])
		sum += array[i];
		i += 1; //samme som i++, i = i + 1
	}

	let gjsnitt = sum/l;

	return gjsnitt
}


let gjsnitt = finnGjennomsnitt(tallArr)

console.log("Gjennomsnittet er " + gjsnitt)
