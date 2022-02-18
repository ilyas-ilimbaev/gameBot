'use strict';

let number;
let sayNumber;
let numberAttempts;
let question;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
};

const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
};

const gameBot = function (number) {

    number = getRandomNum(101);
    console.log(number);
    sayNumber = prompt("Угадай число от 1 до 100");
    numberAttempts = 10;

    const game = function () {
        if (sayNumber == number) {
            question = confirm("Поздравляю, Вы угадали!!! Хотите сыграть ещё раз?");
            if (question == true) {
                gameBot();
            } else {
                return false;
            }
        } else if (sayNumber > number) {
            if(numberAttempts <= 1) {
                question = confirm('Попытки закончились, хотите сыграть еще?');
                if (question == true) {
                    gameBot();
                } else {
                    return false;
                }
            } else {
                sayNumber = prompt(`Загаданное число меньше, осталось попыток ${numberAttempts = --numberAttempts}`);
                game();
            }
        } else if (sayNumber > 0 && sayNumber < number) {
            if(numberAttempts <= 1) {
                question = confirm('Попытки закончились, хотите сыграть еще?');              
                if (question == true) {
                    gameBot();
                } else {
                    return false;
                }
            } else {
                sayNumber = prompt(`Загаданное число больше, осталось попыток ${numberAttempts = --numberAttempts}`);
                game();
            }
        } else if(sayNumber === null) {
            alert('Игра окончена');
        } else if(isNumber(sayNumber) == false || sayNumber == 0) {
            console.log('Введено не число!');
            sayNumber = prompt("Введи число!");
            sayNumber = +sayNumber;
            game();
        } else {

        }
    };
    game();
};

gameBot(number);