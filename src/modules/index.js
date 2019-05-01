// import { sum, multiply as mp } from "./lib";
import profile from "./profile";
import * as lib from "./lib";

console.log(lib.sum(1, 2, 3));
console.log(lib.multiply(4, 2));

const johnProfile = new profile("john", "doe", "john@mail.com");
console.log(johnProfile.display());
