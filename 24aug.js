// // timing events
// var sec = 1;
// function sayhi(){
//     console.log("hi",sec);
//     sec++;
//     if(sec == 6){
//         clearInterval(id);
//     }
// }
// var id = setInterval(sayhi,1000);

// // countdown timer
// var count = 10;
// function timer(){
//     console.log(count);
//     count--;
//     if(count == 0){
//         console.log("!! Timeup !!");
//         clearInterval(id);
//     }
// }
// var id = setInterval(timer,1000);

// let obj1 = { firstName: 'James' };
// let obj2 = {...obj1};
// obj2.firstName = 'John';
// console.log(obj1);

// function timer() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// console.log("Hello ninjas!");
// timer();

function change1(obj) {
  obj.name = "ninjas";
}
function change2(obj) {
  obj = { name: "changed" };
}

var obj = { name: "coding" };

change1(obj);
change2(obj);
console.log(obj.name);

var d = {h: 2, j: 3}

var e = d
var f = {...d}

console.log(e === d)
console.log(f === d)

var d = {h: 2, j: 3}

var e = d
var f = {...d, j: 4}

console.log(f.h)
console.log(f.j)
