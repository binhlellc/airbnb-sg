// All the codes below are examples of bad practices
// according to the airbnb stylying guide.
// Try to come up with a better solution to fix the code before 
// looking at the answer at https://github.com/airbnb/javascript

// -------------- REFERENCE --------------

// 2.1
var a = 1;
var b = 2;

// -------------- OBJECTS --------------

// 3.3
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// 3.4
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// 3.7
console.log(object.hasOwnProperty(key));

// 3.8 very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); 
delete copy.a;

// 3.8
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); 

// -------------- ARRAY --------------

// 4.2
const someStack = [];
someStack[someStack.length] = 'abracadabra';

// 4.3
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// 4.5
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const arr = Array.prototype.slice.call(arrLike);

// 4.6
const baz = [...foo].map(bar);

// -------------- DESTRUCTURING --------------

// 5.1
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// 5.1
const arr = [1, 2, 3, 4];

const first = arr[0];
const second = arr[1];

// 5.3
function processInput(input) {
  //...
  return [left, right, top, bottom];
}

// -------------- STRING --------------

// 6.2
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

  // 6.3
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// -------------- FUNCTIONS --------------

// 7.1
function foo() {
  // ...
}

// 7.1
const foo = function () {
  // ...
};

// 7.4
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// 7.5
function foo(name, options, arguments) {
  // ...
}

// 7.6
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// 7.7 Really bad
function handleThings(opts) {
  opts = opts || {};
  // ...
}

// 7.7 
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// 7.8
var b = 1;

function count(a = b++) {
  console.log(a);
}

// 7.9
function handleThings(opts = {}, name) {
  // ...
}

// 7.10
var add = new Function('a', 'b', 'return a + b');

// 7.10
var subtract = Function('a', 'b', 'return a - b');

// 7.12
function f1(obj) {
  obj.key = 1;
}

// 7.13
function f1(a) {
  a = 1;
  // ...
}

// 7.13
function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// 7.14
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// 7.14
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// -------------- ARROW FUNCTIONS --------------

// 8.1
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// -------------- CLASSES & CONSTRUCTOR --------------

// 9.1
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// 9.5
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// 9.7
class Foo {
  bar() {
    console.log(bar);
  }
}

// -------------- MODULES --------------

// 10.1
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// 10.2
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// 10.4
import foo from 'foo';
import { named1, named2 } from 'foo';

// 10.10
import foo from './foo.js';
import bar from './bar.jsx';
import baz from './baz/index.jsx';

// -------------- ITERATORS AND GENERATORS --------------

// 11.1
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// 11.1
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// 11.3
function * foo() {
  // ...
}

// -------------- PROPERTIES --------------

// 12.3
const binary = Math.pow(2, 10);

// -------------- VARIABLES --------------

// 13.5
(function example() {
  let a = b = c = 1;
}());

// 13.5
const array = [1, 2, 3];
let num = 1;
num++;
--num;

// 13.7
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// 13.7
const foo
  = 'superLongLongLongLongLongLongLongLongString';