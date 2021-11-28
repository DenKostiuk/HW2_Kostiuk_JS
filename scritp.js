let number1 = Math.floor(Math.random() * 100);
let number2 = +prompt('Введите число');

function comparisonNumbers (number1, number2) {
    if (number1 > number2) {
        alert(number1 + ' > ' + number2);
    } else if (number1 < number2) {
        alert(number1 + ' < ' + number2);
    } else if (number1 = number2) {
        alert(number1 + ' = ' + number2);
    }
}

comparisonNumbers(number1, number2);