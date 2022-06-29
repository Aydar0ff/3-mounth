//es5 and es6

//string expression - интерполяция строк

const first_name = "jack";
const second_name = "Barboro";

console.log("Full Name:" + first_name + ' ' + second_name);
console.log(`Full Name: ${first_name} ${second_name}`);

const getFullName = (user) => {
    // return "FirstName:" + user.first_name + "\n" + "LastName" + " " + user.second_name
    return `FirstName: ${user.first_name}\nLastName: ${user.second_name}`
}

const user = {
    first_name: 'Atay',
    second_name: 'Bravo'
}

// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass]

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)

const obj = {
    username: "Beka",
    age: 17,
    last_name: "Bektur",
    full_name: "Beka Teka"
}

const obj2 = [{...obj2}]
// console.log(obj2)

//деструктуризация

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key1: "VALUE1"
        },
        {
            key2: 'value2'
        }
    ]
}

const {data} = props;

// console.log(data)
// onSubmit();

console.log( 482 % 219)
