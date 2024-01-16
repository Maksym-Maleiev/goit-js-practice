console.log('module_02.1');

// q-1
/* 
const clients = ['Mango', 'Poly', 'Ajax'];

for (const value of clients) {
  console.log(value);
}
*/

// q-2
/*
function fun() {
  console.log(Array.from(arguments));
}

console.log(Math.min(2, 4, 6, 7, 8));
console.log(fun(2, 5, 6, 8, 9));
*/

// q-3
/*
const arr = [1, 2, 4, 'ewrfew', undefined];

for (const value of arr) {
  if (isNaN(value)) {
    console.log(value);
  }
}
*/

// q-4
/*
const colors = ['red', 'green', 'blue'];

colors.splice(2, 0, 'purple');
console.log(colors);
*/

// q-5
/*
const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i += 1){
  console.log(colors[i]);

  colors[i] = `${colors[i]}_x`;
}

console.log(colors);
*/

// q-6
/*
function total (number) {
  let total = 0;

  for (let i = 1; i <= number; i += 1){
    total += i;
  }

  return total;
}

console.log(total(3));
*/

// q-7
/*
const clintsName = ['Pit', 'Nick', 'Tony'];

clintsName.push('');

console.log(clintsName);
*/

/*
const clintsName = ['Pit', 'Nick', 'Tony'];

console.log(clintsName.join('-'));
*/