var Rx = require('rxjs/Rx');

var foo = Rx.Observable.create(function (observer) {
  //console.log(observer);
  console.log(observer)
});

foo.subscribe(function (x) {
  console.log(x);
});
foo.subscribe(function (y) {
  console.log(y);
});

function func(x) {
   foo.subscribe(function(x) {
        return x
    })
}

console.log(func(34));