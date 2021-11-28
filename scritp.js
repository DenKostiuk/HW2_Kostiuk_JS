let numbers = [25, 1];
let project = 'проект';
let team = 'команда';
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';
let result = howMuch + ' ' + sentence + ' ' + project.slice(0, 1).toUpperCase() + project.slice(1) + ' ' + numbers[1] + ' ' + team.slice(0, 1).toUpperCase() + team.slice(1) + ' ' + numbers[0] + '.';

console.log(result) // --> собрать предложение