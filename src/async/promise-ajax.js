const request = url => {
  return new Promise((resolved, reject) => {
    const myAjax = new XMLHttpRequest();
    myAjax.open("get", url);
    myAjax.onreadystatechange = () => {
      if (myAjax.readyState === 4) {
        resolved(myAjax.response);
      }
    };
    myAjax.send;
  });
};

const display = data => {
  console.log(data);
};

let url = "https://jsonplaceholder.typicode.com/users/1";
request(url).then(value => display(value));
