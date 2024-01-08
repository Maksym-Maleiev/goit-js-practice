// Example 1 - Введення користувача та розгалуження


// Використовуючи конструкцію if..else та prompt, напиши код, який буде
// Запитувати: "Яка офіційна назва JavaScript?".
// Якщо користувач вводить ECMAScript, то показуй alert з рядком
// "Вірно!", інакше - "Не знаєте? ECMAScript!"

/*
const firstNameJs = prompt('Яка офіційна назва JavaScript?');

firstNameJs === 'ECMAScript' ? alert("Вірно!") : alert("Не знаєте? ECMAScript!");
*/

// Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера у
// вигляді рядка формату "14 год. 26 хв.".
// Якщо значення змінної хвилин дорівнює 0, то виводь рядок "14 год.",
// без хвилин.

const hours = 14;
const minutes = 26;
let timestring;

if (minutes === 0) {
  timestring = `${hours} год.`;
} else {
  timestring = `${hours} год. ${minutes} хв.`;
}

console.log(`timestring: ${timestring}`);