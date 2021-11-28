function fizzBuzz (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        alert('fizzBuzz');
    }
    else if (number % 3 === 0) {
        alert('fizz');
    }
    else if (number % 5 === 0) {
        alert('Buzz');
    }
    else { 
        alert(number);
    }
}

let number = +prompt('Введите число');

fizzBuzz(number);