const request = (url, callback) => {
  const myAjax = new XMLHttpRequest();
  myAjax.open("get", url);
  myAjax.onreadystatechange = () => {
    if (myAjax.readyState === 4) {
      callback(myAjax.response);
    }
  };
  myAjax.send;
};

const display = data => {
  console.log(data);
};

let url = "https://jsonplaceholder.typicode.com/users/1";
request(url, display);
