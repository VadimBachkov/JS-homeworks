//Exercise 2

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;

a1 = 5 % 3;
a2 = 3 % 5;
a3 = 5 + '3';
a4 = '5' - 3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5 - 98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = +"123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0;

console.log(typeof a1, typeof a2, typeof a3, typeof a4, typeof a5, typeof a6, typeof a7, typeof a8, typeof a9, typeof a10, typeof a11, typeof a12, typeof a13, typeof a14, typeof a15, typeof a16, typeof a17, typeof a18);

//Exercise 3

let heigth_3 = 23, width = 10, SPryam;

SPryam = heigth_3 * width;

console.log("S прямоугольника:" + SPryam);

//Exercise 4

let height_4 = 10, d = a7, VCilindra;

VCilindra = 3.14 * ((d / 2) ** 2) * height_4;

console.log("V цилиндра:", VCilindra);

//Exercise 5

let r = 5, SKruga;

SKruga = 3.14 * r ** 2;

console.log("S круга:" + SKruga);


//Exercise 6

let a_6 = 5, b_6 = 7, height_6 = 10, STrap;

STrap = ((a_6 + b_6) / 2) * height_6;

console.log("S трапеции:" + STrap);

//Exercise 7

let S = 2000000, p = 10, years = 5, Pereplata;

Pereplata = (S / years) * (p / 100) * years;

console.log("Переплата по кредиту:" + Pereplata);

//Exercise 8

let a_8 = 8, b_8 = 3, x;

// a+2(x-b)=16

x = (16 + b_8 * 2 - a_8) / 2;
console.log(x);

//b(x+15)=a+6x

x = (a_8 - 15 * b_8) / (b_8 - 6);
console.log(x);

// x+2x+ax+bx=23780
