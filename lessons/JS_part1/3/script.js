// // function sayHello() {
// //     console.log("Hello");
// // }

// // function getFullName(user, age, user2) {
// //     if (age < 18 ){
// //         console.log("Hello");
// //     }else {
// //         console.log(user.first_name, user_lastname + " " + "Open");
// //     }
// // }
// // const age = prompt("Сколько вам лет?")

// // const user = {
// //     first_name: "John",
// //     last_name: "Barbaro"
// // }

// // getFullName(user, age);


// // const anonym = function (user){
// //     console.log(user, users)
// // }

// // anonym()

// // function numbers(numbers1, numbers2){
// //     if (numbers1 > numbers2){
// //         console.log("Frst higher");
// //     }else if (numbers1 < numbers2){
// //         console.log("First higher")
// //     }else{
// //         console.log("Second higher")
// //     }
// // }
// // const number = {
// //     numbers1: prompt("Number"),
// //     numbers2: prompt("Number")
// // }

// function getFullName(user, cb){
//     console.log(user.first_name, user.last_name)
// }
// function callBack(){
//     console.log("I am call back")
// }

// const user = {
//     first_name: "Jack",
//     last_name: "Barbaro"
// }

// getFullName(user, callBack())
const button = document.getElementById("button")
const input =  document.getElementById("input")

button.onclick = function () {
    console.log(input.value)
}