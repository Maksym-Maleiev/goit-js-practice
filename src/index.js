console.log('Module 1.2');

// ==== break ====

/*
for (let i = 0; i < 100; i += 1){
  console.log(i);
  
  if (i === 5) {
    console.log(i);
    break;
  }
}
*/

// ==== continue ====

/*
for (let i = 0; i < 100; i += 1) {
  if (i % 5 !== 0) {
    continue;
  }

  console.log(i);
}
*/

// ==== ternary ====

/*
const age = 18;
let alcohol;

if (age >= 18) {
  alcohol = 'free';
  console.log(`For you alcohol ${alcohol}`);
} else {
  alcohol = 'non';
  console.log(`For you - ${alcohol} alcohol!!!`);
}

  
console.log(alcohol = age >= 18 ? 'free' : 'non');
*/

// ==== slice ====

/*
const str = 'I love JS🤩';
const subString = str.slice(7, str.length);

console.log(subString); // JS🤩
*/

// ==== substring ====

/*
const str = 'I love JS🤩';
const subString = str.substring(7, str.length);

console.log(subString); // JS🤩
*/

// ==== substr ====

/*
const str = 'I love JS🤩';
const subString = str.substr(7, 3);

console.log(subString); // JS🤩
*/

// ==== example-1 ====

/*
const checkForSpam = (message) => {
  const strToLowerCase = message.toLowerCase();
  const result = strToLowerCase.includes('sale') || strToLowerCase.includes('spam');

  return result;
};

console.log(checkForSpam('lorem ipsum')); // false
console.log(checkForSpam('lorem sPam ipsum')); // true
console.log(checkForSpam('lorem sAlE ipsum')); // true
*/

// ==== example-2 ====

/*
const checkForSpam = (message) => {
  const words = ['spam', 'sale', 'dog', 'car'];
  const str = message.toLowerCase();
  let result = false;

  for (let i = 0; i < words.length; i += 1){
    const word = words[i]; // spam, sale

    if (str.includes(word)) {
      result = true;
      break;
    }
  }

  return result;
};

console.log(checkForSpam('lorem ipsum')); // false
console.log(checkForSpam('lorem sPam ipsum')); // true
console.log(checkForSpam('lorem sAlE ipsum')); // true
console.log(checkForSpam('lorem dOg ipsum')); // true
console.log(checkForSpam('lorem cAr ipsum')); // true
console.log(checkForSpam('lorem cat ipsum')); // false
*/

// ==== example-3 ====

const checkLogin = (userLogin) => {
  const logins = ['admin', 'root', 'user'];
  let result = false;

  for (const login of logins) { // for of метод
    if (userLogin === login) {
      result = true;
      break;
    }
  }

  return result;
};

console.log(checkLogin('lorem')); // false
console.log(checkLogin('admin')); // true
console.log(checkLogin('sale')); // false
console.log(checkLogin('root')); // true
console.log(checkLogin('user')); // true
console.log(checkLogin('cat')); // false