class Dog {
    constructor(weight, height, color) {
        this.weight = weight;
        this.heightStep = height;
        this.color = color;
    }
}

const rex = new Dog(
    10,
    3,
    'pink'
)
console.log(rex)

const sharik = new Dog(
    20,
    1,
    'black'
)
console.log(sharik)

class Animal {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voiceText = voiceText;
    }
}

class Bear extends Animal {
    constructor(type, gender, color, voiceText, height, weight) {
        super(type, gender, color, voiceText);
        this.height = height;
        this.weight = weight;
    }
    purpose(){
        console.log(`Bear weight: ${this.weight};\nBear color: ${this.color};\nBear voice: ${this.voiceText}.`)
    }
}

const Misha = new Bear(
    'wild',
    'male',
    'brown',
    'aaaarrr',
    3,
    100
)
console.log(Misha)
Misha.purpose()

class Rabbit extends Animal{
    constructor(type, gender, color, voiceText, height, weight, earLenght, speed) {
        super(type, gender, color, voiceText);
        this.height = height;
        this.weight = weight;
        this.earLenght = earLenght;
        this.speed = speed;
    }
}

const Baks = new Rabbit(
    'ret',
    'male',
    'grey',
    'фцк фцк фцк',
    2,
    60,
    20,
    '41 км/ч'
)
console.log(Baks)

// class school {
//     // constructor(weight, building, door, window, clss, color, teacher, students, floor, cars, tree, friends, shop, )
// }

class Both {
    constructor(weight, color, height, people, door){
        this.weight = weight;
        this.color = color;
        this.height = height;
        this.people = people;
        this.door = door;
    }
}

class home extends Both{

    constructor(weight, color, height, people, door,light, floor, phone, laptop){
        super(weight, color, height, people, door)
        this.light = light;
        this.floor = floor;
        this.phone = phone;
        this.laptop = laptop;
    }

}
const Myhome = new Both(
    10,
    "white and black",
    2,
    3,
    5,
    6,
    6,
    3,
    2
)

console.log();

class school extends Both{
    constructor(weight, color, height, people, door, ipohone, laptop, window, building, teacher, dog, table, chair, glass, flor){
        super(weight, color, height, people, door,)
    this.iphone = iphone;
    this.laptop = laptop;
    this.window = window;
    this.building = building;
    this.teacher = teacher;
    this.dog = dog;
    this.table = table;
    this.chair = chair;
    this.glass = glass;
    this.floor = floor; 
    }

}
const school1 = new school (
    2,
    "black",
    6,
    7,
    10,
    12,
    3,
    34,
    5,
    3,
    34,
    100,
    23,
    4,
    6
)
let boss = 25;
console.log(Boss);