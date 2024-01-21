console.log('module 02.2');

// ==== arrow function ====
const x = 5;
let y = 6;

function fn1(x) {
  console.log('fn1:', x);

  return 7;
}

const fn3 = function (x) {
  console.log('fn3:', x);

  return 8;
};

const fn2 = x => {
  console.log('fn2:', x);

  return 9;
};

fn1(10);
fn2(20);
fn3(30);

console.log('x:', x);
console.log('y:', y); // 6
