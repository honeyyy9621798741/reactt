
// const, let and var

var myName = "John";
// console.log(myName);


const myNameObj = [];
myNameObj.push("John");
// console.log(myNameObj);
// Value cannot be modified using const

let myName2 = "John";
// console.log(myName2);
myName2 = "Alex";
// console.log(myName2);

// BLOCK SCOPE

{
    var num = 5;
}

// console.log(num);

// String interpolation

let firstName = "Aparna";
let lastName = "Tijo";
// let fullName = firstName + " " + lastName;
let fullName = `${firstName} ${lastName}`;

// console.log(fullName);


// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// ARROW FUNCTION
let addTwoNumbers = (num1, num2) => {
        return num1 + num2;
}

// REST AND SPREAD OPERATOR are applicable in Objects and array in JS

let arr = [5, 10, 15, 20, 25];
// Spread
console.log(...arr);

let newArr = [...arr, 30, 35, 40, 45];
console.log(...newArr);



// Rest
// Used in functions

let letMaxOfTwoNums = (...nums) => {
    let maximum = Number.MIN_VALUE;
    for(let number of nums){
        maximum = Math.max(maximum, nums);
    }

    return maximum;
}

// console.log(letMaxOfTwoNums(4, 6, 2, 9));


let obj = {
    name: "John",
    age: 24,
    city: "New York",
};

let obj2 = {...obj,
    county: "India",
    favouriteSong: "Stay"
};
console.log(obj2);