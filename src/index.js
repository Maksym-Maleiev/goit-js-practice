// =========hoisting========

/*
let a = 1;
const b = 2;

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

var c = 3;

console.log('c:', c);
*/

// =========область видимості========

/*
{
  var x = 111;
  console.log('x:', x);
}

console.log('x:', x);

{
  let y = 222;
  console.log('y:', y);
}

console.log('y:', y);
*/

// =========cycle========

/*
for (var i = 0; i < 10; i += 1){
  console.log('hello:', i);
}

console.log('last i:', i);
*/

// =========const VS CONST========

/*
const PI = 3.14;

const a = 5;
const b = 10;
const c = a + b;

console.log('c:', c);

console.log('PI:', PI);
*/

/*
console.log(Number('25.7px'));

console.log('mango'.indexOf('nam'));

console.log('ManGO'.toLowerCase());

console.log('ManGO'.toUpperCase());
*/