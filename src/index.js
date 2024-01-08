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