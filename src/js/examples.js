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

/*
const hours = 14;
const minutes = 26;
let timestring;

if (minutes === 0) {
  timestring = `${hours} год.`;
} else {
  timestring = `${hours} год. ${minutes} хв.`;
}

console.log(`timestring: ${timestring}`);
*/

// Example 3 - Розгалуження

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число",
// якщо в prompt користувач ввів число більше за нуль.
// Якщо було введено нуль, виводь у консоль рядок "Це нуль".
// Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

/*
const userInput = prompt('Уведіть число');
const userNumber = parseInt(userInput);

if (userNumber > 0) {
  console.log('Це позитивне число');
} else if (userNumber === 0) {
   console.log('Це нуль');
} else if (userNumber < 0) {
  console.log('Це від`ємне число');
} else {
  !isNaN(userNumber); // перевіряє є число числом чи ні
  console.log('Це взагалі не число!');
}

console.log(`userNumber: ${userNumber}`);
*/

// Example 4 - Вкладені розгалуження

// Напиши скрипт, який порівнює числа змінних a і b.
// Якщо обидва значення більше 100, виведи в консоль максимальне з них.
// Інакше у консолі має бути сума значення b та числа 512.

/*
const a = 120;
const b = 180;

console.log(a > 100 && b > 100 ? Math.max(a, b) : b + 512);
*/

// Example 5 - Форматування посилання (endsWith)

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ.
// Використовуй конструкцію if...else.

let link = 'https://my-site.com/about';

if (link.endsWith('/') !== link) {
  console.log(link + '/'); 
} else {

}
