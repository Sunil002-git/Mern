// const add = require('./math')
// console.log(add(5,3));

// import {add, PI} from './math.js';
// console.log(add(2,3));

// Use cases of ES6 Modules
// 1. Default Export and import
// import greet from './greet.js';
// console.log(greet('node.js'));

// // 2. Named exports using aliases
// import {multiply as mul, divide as div} from './operations.js';
// console.log(mul(4,5));
// console.log(div(1,2));
// // 3. Dynamic Imports : Dynamic imports enable JavaScript to load modules at runtime instead of during initial execution.
// async function loadMathModule() {
//     const math = await import('./math.js');
//     console.log("Dynamic Imports Output: ");
//     console.log("Addition:", math.add(5, 3))
//     console.log("Multiplication: ", math.multiply(4,3));
// }
// loadMathModule();

// default + named exports
import Person, {greet1, node} from './person.js';

const user = new Person('Sunil')
console.log(user.sayhello());
console.log(greet1('Lucas'))
console.log(node(945))