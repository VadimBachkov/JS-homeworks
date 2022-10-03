// exercise 1

let x = [1, 2, 3, 4, 5];

document.write("Задание 1: " + x + "</br>");

// exercise 2

let i = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

while (i > -10 || i < -3) {
    console.log(i);
}
document.write("Задание 2: " + i + "</br>");

// exercise 3

let j = [];
let result;

for (j = 23; j <= 57; j++) {
    console.log(j);
}

document.write(result);

let a = 23;

while (a <= 57) {
    console.log(a);
    a++;
}

for (j = 23; j <= 57; j++) {
    result = 0;
    for (a = 23; a <= j; a++) {
        result += a;
    }
    console.log(result);
}

document.write("Задание 3 сумма массива равна: " + result + "</br>");

// exercise 4 

let arrN = [10, 20, 30, 50, 235, 3000];


for (let i = 0; i < arrN.length; i++) {
    let num = String(arrN[i]);
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
        console.log(num);
    }
    document.write("Задание 4 ответ: " + num + "</br>");
}

// exercise 5 
document.write("Задание 5 ответ:" + '</br>');

let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write(arr[i] + '<b>' + ' ' + "</br>");
    } else {
        document.write(arr[i] + ' ' + "</br>");
    }

}

//exercise 6 
document.write("Задание 6 ответ:" + '</br>');

let arr_6 = [1, 2, 3, 4, 5];

arr_6.push(6);

let lastItem = arr_6.length - 1;
console.log("Последний элемент массива:", arr_6[lastItem]);
document.write("Последний элемент массива:", arr_6[lastItem] + '</br>');

// exercise 7

let arr_7 = [];

let check = true;
let sum = 0;
while (check) {
    let num = prompt('Введите число', 0);
    if (num === '') {
        check = false;
    } else if (num === null || isNaN(num)) {
        check = false;
    } else {
        arr_7.push(Number(num));
    }

}

for (let e = 0; e < arr_7.length; e++) {
    sum += arr_7[e];
}

alert(sum);

document.write("Задание 7 ответ:" + sum);