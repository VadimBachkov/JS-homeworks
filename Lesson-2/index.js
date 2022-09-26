// Exercise 1

let name, age, city, phone, email, company, message1;

//name = prompt("Ваше имя", "Vadim");
//age = prompt("Возраст", "24");
//city = prompt("Город проживания", "Minsk");
//phone = prompt("Телефон", "+12345567889");
//email = prompt("Почта", "12323153@gmail.com");
//company = prompt("Компания", "'Epam'"); 
//document.write("Меня зовут " + name +". Мне "+ age+ " лет. Я проживаю в городе "+ city+ " и работаю в компании "+ company+ 
//". Мои контактные данные: "+ phone+ " "+ email); 

//Exercise 2

let year = 2022 - age;

document.write("<br />" + name + " родился в " + year + "году");

//Exercise 3 

let str = "888888";

if (str[0] + str[1] + str[2] === str[3] + str[4] + str[5]) {
    console.log("Да");
} else {
    console.log("Нет");
}

//Exercise 4 

let a = 1;

if (a > 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

a = 0;

if (a > 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

a = -3;

if (a > 0) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Exercise 5

let a_5 = 10, b_5 = 2, sum, min, pr, del;

sum = a_5 + b_5;
min = a_5 - b_5;
pr = a_5 * b_5;
del = a_5 / b_5;

console.log(sum, min, pr, del);

if (sum > 1) {
    sum = sum * sum;
}

//Exercise 6

if (a_5 > 2 && a_5 < 11 || b_5 >= 6 && b_5 < 14) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Exercise 7

let n = 50;

if (n <= 15) {
    console.log("Число находится в первой четверти");
}

if (n > 15 && n <= 30) {
    console.log("Число находится во второй четверти");
}

if (n > 30 && n <= 45) {
    console.log("Число находится в третьей четверти");
}

if (n > 45 && n <= 59) {
    console.log("Число находится в четвертой четверти");
}

//Exercise 8

let day = 14;

if (day <= 10) {
    console.log("Первая декада месяца");
}
if (day > 10 && day <= 20) {
    console.log("Вторая декада месяца");
}
if (day > 20 && day <= 31) {
    console.log("Третья декада месяца");
}