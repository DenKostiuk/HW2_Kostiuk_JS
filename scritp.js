function oddOrEven (number) {
    return (-1) ** number + 1 ? 'Четное' : 'Нечетное';
}

let number = +prompt('Введите число');

alert(oddOrEven(number));