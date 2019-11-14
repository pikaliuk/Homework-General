
/*cоздать функция, которая принимает как параметр анониную 
функцию  выводит на экран слово "Helo" и выполняет ее 
в том случае, если пользователь введет слово 'hi'*/



/*function showHello (text) {
	let userText = prompt ('Write hi,please')
	if (userText == 'hi') {
		text()
	}
	else {
		console.log('you are wrong(');
	}

}

showHello ( function () {
	alert ('Helo!');
});*/


// Задание номер 1

function  arrayDouble (a,b,c,d) {
	
	arr = [];
	arr.push (a,b,c,d);

	for(var i=0; i<arr.length; i++) {
    arr[i] *= 2;
}
	console.log (arr);
}

arrayDouble (10,1,1,1);



// Задание номер 3

let a = [[4,5,13],[-5,0,4], [12,-3,12]];

let b = [[5,8,0],[87,65,7],[-50,24,43]];
/*
let sumar = [];

for (let i=0; i < a.length; i++)  {
	sumar[i]= [];

	for (let j=0; j < a[i].length; j++) {
			sumar[i][j] = a[i][j]+b[i][j];
		}
	}

	console.log(sumar);*/




function SumMatrix(a,b)      
{   
    var matrix = a.length, n = a[0].length, C = [];
    for (var i = 0; i < matrix; i++)
     { C [ i ] = [];
       for (var j = 0; j < n; j++) C[ i ][j] = a[ i ][j]+b[ i ][j];
     }
    return C;
}


console.log(SumMatrix(a,b));


// Задание 2

 var obj = {
	bread: 25,
	milk: 30,
	chips: 50,
	water: 10,
	cucumbers: 42
}

// Вывод общей стоимомти покупок


let sum = 0;
for (let key in obj) {
  sum += obj[key];
}

console.log("Обща стоимость покупок: " + sum); 



/*let max = 0;

for (let key in obj) {
 max =  Math.max(obj[key]);
}

console.log(max);
*/

let m = 0;
for (let key in obj) {
m = Math.max(obj[key]);
}

console.log(m);


