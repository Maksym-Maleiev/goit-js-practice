console.log('module_05.1');

function sayHello() {
  console.log(this);
}

const obj1 = {
  name: 'Max',
};

const obj2 = {
  name: 'Dasha',
};

const greet1 = sayHello.bind(obj1);
setTimeout(greet1, 2000);

const greet2 = sayHello.bind(obj2);
setTimeout(greet2, 4000);
