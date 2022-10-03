// exercise 1

function ex_1(x, y, del) {
    result = (x - y) / del;
}
ex_1(8, 4, 2);
document.write("Задание 1 ответ:" + result + "</br>");

// exercise 2

function ex_2(x) {
    cube = Math.pow(x, 3);
    squere = x ** x;
}
ex_2(2);

document.write("Задание 2 ответ:" + "куб числа " + cube + " квадрат числа " + squere + "</br>");

// exercise 3

function ex_3(a, b) {
    max = Math.max(a, b);
    min = Math.min(a, b);
}
ex_3(7, 14);

document.write("Задание 3 ответ:" + "max = " + max + " min = " + min + "</br>");

// exercise 4 
let arr_4 = []; let i; let x; let y;

function ex_4(arr_4) {
    let x = prompt('Введите первое число');
    let y = prompt('Введите второе число');
    for (let i = x; i < y; i++) {
        arr_4.push(i);
    }

    return arr_4[i];

}
ex_4(arr_4);

function ex_4_1(arr_4) {
    console.log(arr_4);
    document.write("Задание 4 ответ:" + ex_4(arr_4) + "</br>");
}
ex_4_1(arr_4);

// exercise 5 
let s = 0;

function isEven(s) {
    if (s % 2 === 0) {
        return true
    } else {
        return false
    }
}
isEven(8);

document.write("Задание 5 ответ:" + isEven(8) + "</br>");

// exercise 6

arr_6 = [10, 30, 40, 50, 70, 8, 11, 12, 13, 48];

function ex_6(arr_6) {
    for (i = 0; i < arr_6.length; i++) {
        if (!isEven(arr_6[i])) {
            arr_6.splice(i, 1);
            i--;
        }
    }
    return arr_6;
}

document.write("Задание 6 ответ: ", ex_6(arr_6) + "</br>");

// exercise 9 
let j = 10;

function fib(j) {
    let arr = [0, 1];
    for (let i = 2; i < j  + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[j]
}
document.write("Задание 9 числа Фибоначи ответ: ", fib(j));