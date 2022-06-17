

// // console.log(notif);

// // let clintAge = 19;

// // if (clintAge > 18){
// //     console.log("You can visit our site");
// // }else if (clintAge < 18 && clintAge > 0){
// //     console.log("Sorry, u can't visit our site");
// // } else {
// //     console.log("try again");
// // }
// let choose = confirm("Are you 18 years old or older?");
// console.log(choose);

// let answerText = "";

// if (choose === true) {
//   let clientText = prompt("Type yor age");
//   clientText = +clientText;

//   if (clientText > 18 || clientText === 18) {
//     answerText = "You can visit our site";
//   } else if (clientText < 18 && clientText >= 0) {
//     answerText = "Sorry, You can't visit our site";
//   } else {
//     answerText = "try again";
//   }
// } else {
//   answerText = "Sorry, You can't visit our site";
// }

// alert(answerText);
// console.log(answerText);

let choose = confirm("Are you 18 years old or older?");
console.log(choose);

let answerText = "";

if (choose === true) {
  let clientText = prompt("Type yor age");
  clientText = +clientText;

  if (clientText > 18 || clientText === 18) {
    answerText = "You can visit our site";
  } else if (clientText < 18 && clientText >= 0) {
    answerText = "Sorry, You can't visit our site";
  } else {
    answerText = "try again";
  }
} else {
  answerText = "Sorry, You can't visit our site";
}

alert(answerText);
console.log(answerText);

// let a = 10;
// let b = 20;

// console.log(a ,b);

// let c = a;
// a = b;
// b = c;

// console.log(a ,b)




