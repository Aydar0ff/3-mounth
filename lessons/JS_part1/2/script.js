let first = 100,
    second = 1000,
    third = 900;

const listOfValue = [100, 1000, 900];
listOfValue[1] = 1900;
listOfValue.push("text");

let summ = listOfValue[0] + listOfValue[1] + listOfValue[2];

listOfValue[4] = "added";

console.log(listOfValue);
console.log(summ);
console.log(listOfValue.length);

let mayBeCopied = listOfValue;

mayBeCopied[4] = 1999;
console.log(mayBeCopied);
console.log(listOfValue);

for(let i = 0; i < 3; i++){
    console.log(i + ". Hello")
}

let noob = 1;
for(let i = 0; i <= 10; i++){
    noob = i + noob;
}
console.log(noob)

for(let i = 0; listOfValue.length; i++){
    console.log(listOfValue[i]);
}

for(let key in listOfValue){
    console.log(key + ":", listOfValue[key]);
}

// const listOfNumber = [100, 300, 200, 500];
// let abc = listOfNumber[0];
// for(let i = abc + listOfNumber.length); 