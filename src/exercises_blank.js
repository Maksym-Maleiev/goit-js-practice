// Example 1 - Базові операції з масивом
// - Створіть масив genres з елементами Jazz і Blues.
// - Додайте "Рок-н-рол" в кінець.
// - Виведіть у консоль перший елемент масиву.
// - Виведіть у консоль останній елемент масиву.
// Код має працювати для масиву довільної довжини.
// - Видаліть перший елемент і виведіть його в консоль.
// - Вставте "Country" і "Reggae" на початок масиву.

/*
const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-рол');

const lastIndex = genres.length - 1;

console.log(genres[0]);
console.log(genres[lastIndex]);

genres.shift();
console.log(genres[0]);

genres.unshift('Country', 'Reggae');
console.log(genres);
*/

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення
// Площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values
// як рядки.
// Значення гарантовано розділені пропуском.
// Для обчислення необхідно помножити їх одне одного.
// S = a × b, де S - площа; a, b - Довжина і ширина.

/*
const values = '8 11';
const strToArray = values.split(" ");

const a = Number(strToArray[0]);
const b = Number(strToArray[1]);

const s = a * b;

console.log('S', s);
*/

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок
// у форматі номер_елемента: значення_елемента:
// 1: 🍎
// 2: 🍇
// 3: 🍑
// ...
// Нумерація елементів має починатися з першого.

/*
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i += 1){
  const number = i + 1;
  console.log(`${number}: ${fruits[i]}`);
}
*/

/*
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

fruits.forEach((value, idx, arr) => {
  const number = idx + 1;
  console.log(`${number}: ${value}`);
})
*/

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль
// Ім'я та телефонний номер користувача.
// Jacob - 89001234567
// William - 89001112233
// ...
// У змінних names та phones зберігаються
// Рядки імен і телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках
// Вказують на відповідність. Кількість імен та телефонів
// гарантовано однакове.

/*
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArr = names.split(',');
const phonesArr = phones.split(',');

for (let i = 0; i < namesArr.length; i += 1){
  console.log(`${namesArr[i]} - ${phonesArr[i]}`);
}
*/

// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка
// Крім першого та останнього.
// Результуючий рядок не повинен починатися
// чи закінчуватися пробельним символом.
// Скрипт повинен працювати для будь-якого рядка.

/*
const string = 'Welcome to the future';

const stringArr = string.split(" ");
const first = stringArr.shift();
const last = stringArr.pop();

const newString = stringArr.join(' ');
console.log(newString);
console.log(`"${newString}"`);
*/

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок
// (Зворотний порядок букв) і виводить її в консоль.

/*
const string = 'Welcome to the future';
const strArr = string.split('');
const reversedArr = strArr.reverse();
const newString = reversedArr.join('');

console.log(newString);
*/

// -------------------------

/*
const string = 'Welcome to the future';
const strArr = string.split('');

let result = '';
for (let i = strArr.length - 1; i >= 0; i -= 1){
  result += strArr[i];
}

console.log(result);
*/

// -------------------------

/*
const string = 'Welcome to the future';
const reverse = string.split('').reverse().join('');

console.log(reverse);
*/

// Example 7 - Сортування масиву з циклом
// Напиши скрипт сортування масиву рядків
// в алфавітному порядку за першою літерою елемента.

/*
const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

for (let i = 0; i < langs.length; i += 1) {
  for (let j = i + 1; j < langs.length; j += 1) {
    console.log(langs[i], langs[j]);

    if (langs[i][0] > langs[j][0]) {
       const tmp = langs[i];
    langs[i] = langs[j];
    langs[j] = tmp;
    }
  }
}

console.log(langs);
*/

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві.
// Код має працювати для будь-якого масиву чисел.
// Використовуй цикл на вирішення завдання.

/*
const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];
let max = numbers[0];

for (const number of numbers) {
  if (number < min) {
    min = number;
  }

  if (number > max) {
    max = number;
  }
}

console.log(min); // 1
console.log(max); // 94
*/

// extra - зробити реверс кожного слова не змінюючи порядок слів
// 1. розбити масив слів
// 2.1 розбити кожне слово масив символів
// 2.2 реверснути
// 2.3 зібрати слово в один рядок
// 3. зібрати текст із масиву слів

const string = 'Welcome to the future';

