// Лампочка

let Lightbulb = function (name) {

    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = 0.1973; //(Стоимость электроэнергии за 1Квт);
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени работает лампочка? , ч');
        } else {
            this.workTime = 0;
        };

        this.operation();
    };

    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;

        this.show();
    };

    this.show = function () {

        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка "' + this.name + '" не включена');
        } else {
            console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
        }
    };
};

let lightBulb = new Lightbulb('Кухня');
lightBulb.get();

let lightBulb2 = new Lightbulb('Коридор');
lightBulb2.get();

let lightBulb3 = new Lightbulb('Ванная');
lightBulb3.get();

let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;

console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');

// Чайник

let Teapot = function (name) {

    this.get = function () {
        this.name = name;
        this.power = +prompt("Введите мощность чайника, Вт:"); // Диапазон мощности в современных чайниках варьируется от 650 до 2400 Вт
        this.value = +prompt("Введите объем воды в чайнике, л");
        this.waterTemperature = 20; // 20 градусов;
        this.boilingTemperature = 100;

        if (confirm("Включить чайник?")) {
            this.teapotWork = true;
        } else {
            this.teapotWork = false;
        }

        this.timeBoiling()

    }

    this.timeBoiling = function () {

        this.energyNeeds = (this.value * 4200 / (this.value * this.waterTemperature)) * (this.boilingTemperature - this.waterTemperature);
        this.resultBoilingTime = (this.energyNeeds / this.power) / 60;

        console.log("Понадобится " + this.resultBoilingTime + " минут.");

    }


}
let teaPot = new Teapot("Чайник");
teaPot.get();


// Калькулятор

let Calculator = function (name) {

    this.get = function () {
        this.name = name;
        this.numA = +prompt("Введите число А");
        this.numB = +prompt("Введите число B");
        this.oper = prompt("Выберете оператор:+,-,/");

        if (this.oper == "+") {
            result = this.numA + this.numB;
        }
        if (this.oper == "-") {
            result = this.numA - this.numB;
        }
        if (this.oper == "/") {
            result = this.numA / this.numB;
        }
        console.log(result);
    }
}
let calc = new Calculator("Калькулятор");
calc.get(); 