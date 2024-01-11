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

/*
let link = 'https://my-site.com/about';

link.endsWith('/') ? link : link += "/";

// другий варіант рішення

// if (link[link.length - 1] !== '/') link += '/';

console.log(link);
*/

// Example 6 - Форматування посилання (includes та логічне «І»)

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку,
// якщо в link є підрядок "my-site".Використовуй конструкцію if...else.

/*
let link = 'https://my-site.com/about';

if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
} else {
  link;
}

// другий варіает

// if (!link.endsWith('/') && link.includes('my-site')) link += '/';

console.log(link);
*/

// Example 7 - Форматування посилання (тернарний оператор)

// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор.

/*
let link = 'https://my-site.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }

link.includes('my-site') && !link.endsWith('/') ? link += '/' : link; 

console.log(link);
*/

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
// Якщо значення змінної hours:

/*
const hours = 25;
let message;

if (hours < 17) {
  message = 'Pending';
} else if (hours >= 17 && hours <= 24) {
  message = 'Expires';
} else {
  message = 'Overdue';
}

console.log(`message: ${message}`);
*/

// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту.
// Використовуй конструкцію if...else.

/*
const daysUntilDeadline = -1;
let message;

if (daysUntilDeadline === 0) {
  message = 'Сьогодні';
} else if (daysUntilDeadline === 1) {
  message = 'Завтра';
} else if (daysUntilDeadline === 2) {
  message = 'Післязавтра';
} else if (daysUntilDeadline >= 3) {
  message = 'Дата у майбутньому';
} else {
  !isNaN(daysUntilDeadline);
  daysUntilDeadline < 0;
  message = 'Це взагалі не число або некоректно введені дані';
}

console.log(`message: ${message}`);
*/

// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

/*
const daysUntilDeadline = 2;

switch (daysUntilDeadline) {
  case 0: {
    console.log('Сьогодні');
    break;
  }

  case 1: {
    console.log('Завтра');
    break;
  }

  case 2: {
    console.log('Післязавтра');
    break;
  }

  case 3: {
    console.log('Дата у майбутньому');
    }
    
  default:
    console.log('Це взагалі не число або некоректно введені дані');
}
*/

// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням
// від min до max, але тільки якщо число кратне 5.

/*
const max = 100;
const min = 20;
let message;

for (let i = min; i < max; i += 1){
  if (i % 5 === 0) {
    console.log('number:', i);
  }
}
*/

// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt
// та логувати результат у консоль браузера.

// - Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// - В іншому випадку вивести рядок "Я вас не знаю"

// Пароль перевіряти так:

// - Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// - Інакше виводити рядок "Невірний пароль"

const login = prompt('Введіть логін');
let input;

if (input === 'Адмін') {
  const password = prompt('Введіть пароль');
  console.log('login:', login);
} else if (password === 'Я адмін') {
  console.log('Вітаю!');
} else {
  console.log('Невірний пароль');
} 
} else {
  if (!input || input === null) {
    console.log('Скасовано');
  } else {
    console.log('Я вас не знаю');
  }
}