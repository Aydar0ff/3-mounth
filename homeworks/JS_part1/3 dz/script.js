let num1 = prompt("number 1");
let num2 = prompt("number2");
num1 = +num1;
num2 = +num2
if(num1 < num2){
    alert("1 number is smaller");
}else if(num1 > num2){
    alert("2 number is smaller");
}else if(num1 === num2){
    alert("number 1 and number 2 are equal");
}else{
    alert("Sorry, but we don't understand you");
}