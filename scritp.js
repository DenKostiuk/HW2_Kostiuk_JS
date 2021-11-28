let str1 = prompt('Напишите что вам нравится изучать.');
let str2 = prompt('Что еще вам нравится изучать?');
let str3 = str1.slice(0, 21);
let result = str3 + `Front-end, ` + str2;

function comparisonString (str2, str3) {
    if (str1.toLowerCase().includes(str2.toLowerCase())) {
        alert(result = str3 + `Front-end`);
    } else {
        alert(result);
    }
}
comparisonString(str2, str3);

console.log(str1.toLowerCase().includes(str2.toLowerCase()));
