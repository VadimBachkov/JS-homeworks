//exercise 1

for (i = 1; i <= 50; i++) {
    console.log(i);
}

for (i = 35; i >= 8; i--) {
    console.log(i);
}

//exercise 2 
document.write("Задание 2 ответ:");

let x = 89;

while (x >= 11) {
    document.write(x, "</br>");
    x--;
}

//exercise 3

let sum = 0;

for (j = 0; j <= 100; j++) {
    sum = sum + j;
    console.log(sum);
}

document.write("Задание 3 ответ:" + sum + "</br>");

// exercise 4

let r;

for (i = 0; i <= 3; i++) {
    sum = 0;
    for (r = 0; r <= i; r++)
        sum += r;
    console.log(sum);
}

document.write("Задание 4 ответ:" + sum + "</br>");

// exercise 5
document.write("Задание 5 через for:");

for (i = 8; i <= 56; i = i + 2) {
    console.log(i);
    document.write(i + "</br>");
}

document.write("Задание 5 через while:" + "</br>");

i = 8;
while (i <= 56) {
    document.write(i + "</br>");
    i = i + 2;
}

// exercise 6 
document.write("Задание 6 :" + "</br>");

let table;

for (i = 2; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        table = i * j;
        document.write(i, "*", j, "=", table, "<br />");
    }
    document.write("<br />");
}

// exercise 7 
document.write("Задание 7 :" + "</br>");

let n = 1000; let s = 0;

while (n / 2 >= 50) {
    n = n / 2;
    s++;
}
document.write("Ответ:" + s + "</br>");