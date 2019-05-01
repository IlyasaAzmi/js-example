/*Promise
  Pending (sedang dalam proses)
  Fullfilled (sukses)
  Rejected (gagal)
*/

//Promise Creator
const janji = () =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("promise resolved");
    }, 10);
    //reject('promise rejected)
  });

//Promise Consumer
janji().then(value => console.log(value));
// .catch(err => console.log(err))
