
var order;

var name = prompt ('Ваше Имя:');

var lastname = prompt ('Ваша Фамилия');

var act = prompt ('Укажите Выступление');

var theatre = prompt ('Укажите театр');


var sector = prompt ('Укажите сектор');

var row = prompt ('Укажите ряд');

var seat = prompt ('Укажите место');

var time = prompt ('Укажите время');



order = "Имя: " + name;

order += "\nФамилия: " + lastname;

order += "\nВыступление: " + act;

order += "\nТеатр: "  + theatre

order += "\nСектор: "  + sector

order += "\nРяд: "  + row;

order += "\nМесто: "  + seat;

order += "\nВремя: "  + time;


console.log(order);


var first = prompt ('Введите первое число');
var second = prompt ('Введите втрое число');

console.log(first * second);

