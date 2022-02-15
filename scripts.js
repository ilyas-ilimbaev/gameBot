'use strict';

let number = 32;
let sayNumber;
let numberAttempts;
let question;

const gameBot = function (number) {
    sayNumber = prompt("Угадай число от 1 до 100");
    numberAttempts = 10;

    const game = function () {
        if (sayNumber == number) {
            question = alert("Поздравляю, Вы угадали!!!");
        } else if (sayNumber > number) {
            if(numberAttempts <= 1) {
                alert('Игра окончена');
            } else {
                sayNumber = prompt(`Загаданное число меньше, осталось попыток ${numberAttempts = --numberAttempts}`);
                game();
            }
        } else if (sayNumber > 0 && sayNumber < number) {
            if(numberAttempts <= 1) {
                alert('Игра окончена');
            } else {
                sayNumber = prompt(`Загаданное число больше, осталось попыток ${numberAttempts = --numberAttempts}`);
                game();
            }
        } else if(sayNumber === null) {
            alert('Игра окончена');
        } else if(isNumber(sayNumber) == false || sayNumber == 0) {
            console.log(numberAttempts);
            sayNumber = prompt("Введи число!");
            sayNumber = +sayNumber;
            game();
        } else {

        }
    };
    game();
};

gameBot(number);