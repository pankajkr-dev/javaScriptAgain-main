// primitive datatype
// there are 7 primitive datatypes :string, number, boolean, null , undefined , symbol , BigInt

const score =100
const scoreValue=100.4

const isLogedIn= false
let userEmail;

const id= Symbol('123')
const anotherId= symbol('123')

console.log(id===anotherId);

// const bigNumber= 33228787839879487598847n


// Refrence(Non primitive)

//array, Objects, Functions

const hero=["ironman", "thor", "CaptainAmerica"];

let myObj={
    name:"Pankaj",
    age:21,
}

const myFunction=function(){
    console.log("hello world");
}

// we can know the datatype of any values using (typeof)
console.log(typeof myFunction);

console.log(typeof score);

console.log(typeof anotherId);

console.log(typeof id);

console.log(typeof myObj);

console.log(typeof scoreValue);