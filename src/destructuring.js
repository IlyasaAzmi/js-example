//Object
const user = {
  firstName: "John",
  lastName: "Angel",
  country: "Indonesia",
  language: "bahasa",
  links: {
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    web: {
      blog: "https://blog.com"
    }
  }
};

// let firstName = user.firstName;
// let lastName = user.lastName;
let { firstName, lastName, language: lang } = user;
let { twitter, facebook } = user.links.social;
console.log(firstName, lastName, lang, twitter, facebook);

//array
let myArray = [1, 2, 3, [4.1, 4.2, 4.3]];
// let a = myArray[0];
// let b = myArray[1];
// let c = myArray[2];
const [a, b, c, [d, e, f]] = myArray;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(`f = ${f}`);

//function parameter
function fullname({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(fullname(user));
