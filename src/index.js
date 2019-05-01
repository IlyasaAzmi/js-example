import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//hoisting
a = 1;
var a;
console.log(a);

//scope
let b = 2;
{
  let c = 1;
  var d = 4;
  console.log(b);
}
{
  console.log(b);
  console.log(4);
}
