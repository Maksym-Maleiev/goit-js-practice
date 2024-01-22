// Example 1 - Індекс маси тіла

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

/*
function calcBMI(weight, height) {
  weight = weight.replace(',', '.');
  height = height.replace(',', '.');
  height = height ** 2;

  const weightNum = parseFloat(weight);
  const heightNum = parseFloat(height);

  const result = (weightNum / heightNum).toFixed(1);

  return result;
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
*/

// Example 2 - Найменше з чисел

// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

/*
function min(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
*/

/*
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
*/

/*
const min = (a, b) => Math.min(a, b); // якщо ф-ія в один рядок

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
*/

// Example 3 - Площа прямокутника

// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
  // 1.
  // const arr = dimensions.split(' ');
  // const a = arr[0];
  // const b = arr[1];

  // 2.
  // const arr = dimensions.split(' ');
  // const [a, b] = arr;

  // 3.
  const [a, b] = dimensions.split(' ');

  return a * b;
}

console.log(getRectArea('8 11')); //88
