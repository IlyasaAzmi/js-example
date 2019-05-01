let str = "Hello";
let newStr = str;
newStr = "Holla";
console.log(newStr);
console.log(str);

let num = 10;
let newNum = num;
newNum = 12;
console.log(newNum);
console.log(num);

const book = {
  title: "Javascript Advance",
  author: "John Doe"
};

// const newBook = book;
const newBook = { ...book };
newBook.title = "Update Javascript Title";
console.log(newBook);
console.log(book);

const hobbies = ["music", "dancing", "football"];
// const newHobbies = hobbies;
const newHobbies = [...hobbies];
newHobbies.push("coding");
console.log(newHobbies);
console.log(hobbies);

const sum = (a, b, c) => a * b * c;
const number = [2, 4, 3];
const result = sum(...number);
console.log(result);

const sum2 = (...allNums) => {
  let total = 0;
  allNums.forEach(num => (total = total + num));
  return total;
};

const result2 = sum2(2, 4, 5, 7, 1);
console.log(result2);
