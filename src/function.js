//function declaration
function hello(name) {
  console.log("Hello " + name);
  console.log(name);
}

hello("mario");

function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3);
console.log(result);

//function expression
const hello2 = function(name) {
  console.log("hello " + name);
};
hello2("bross");

//arrow function
const hello3 = name => {
  console.log("hello " + name);
};
hello3("ok");

const multiply2 = (a, b = 1) => a * b;
console.log(multiply2(3));

//IIFE
(function() {
  console.log("auto execute");
})();
