const p1 = () => console.log("process 1");
const p2 = () => {
  setTimeout(() => console.log("process 2"), 10);
};
const p3 = () => console.log("process 3");

p1();
p2();
p3();
