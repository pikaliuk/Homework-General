
/* арифметическое прогрессия

var n = 0;
var step = 3;

for (var i=0; i<100; i++) {
	console.log (n);
	n += step;
}*/


/*var n1 = 0;
var n2 = 1;     фибоначчи


for (var i=0; i<30; i++) {
	var n = n1 + n2;
	console.log(n);
	n1 = n2;
	n2 = n;
}*/  




/*
min = 1;
max = 7;


var random1 = Math.floor (Math.random() * (max - min) + min);

var random2 = Math.floor (Math.random() * (max - min) + min);



console.log ("бросок кубиков : ", random1, random2);*/

/*

function nameFunction () {
	let name = prompt ('введите имя');
console.log (name);
}

nameFunction();*/



/*function showMessage () {
	let name = prompt ('введите имя');
	return "Hello " + name;
     
}

var message = showMessage();
console.log (message);
*/



// function showMessage (text) {
// 	return "Hello " + text;
     
// }

// let name = prompt ('введите имя');


// var message = showMessage(name);
// console.log (message);


/*function min (a,b) {
	console.log(Math.min(a,b));
}

min (1,7);
min (7,2);
min (5,5);*/


function getRandom (min,max) {
	if (min == undefined) {
		 min = 0;
	}

	if (max == undefined) {
		 max = 100;
	}
return Math.floor (Math.random ()* (max -min) + min);


}


let newRandFunction = getRandom;

console.log(newRandFunction (0,100));
