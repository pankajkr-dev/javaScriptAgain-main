const myarr=[1,2,3,4,5,6,7,8,9,10];
const myHeroes=['superman','batman','spiderman','ironman','thor','hulk','captain'];

const myArr2=new Array(1,2,3,4,5);
console.log(myArr2);
//output: [1,2,3,4,5]
console.log(myHeroes);
//output: ['superman','batman','spiderman','ironman','thor','hulk','captain']
console.log(myHeroes[0]);
//output: superman
console.log(myarr[9]);
//output: 10
console.log(myarr[10]);
//output: undefined
console.log(myarr.length);
//output: 10

// Array Methods

const fruints=["banana", "Orange", "Apple", "Mango"]
let size = fruints.length;
console.log(size);
//output: 4

const fruits=["banana", "Orange", "Apple", "Mango"]
let fruitsString = fruits.toString();
console.log(fruitsString);
//output: banana,Orange,Apple,Mango

const fruitss=["banana", "Orange", "Apple", "Mango"]
let at=fruitss.at(2);
console.log(at);
//output: Apple

const accessElement=["banana", "Orange", "Apple", "Mango"]
let element=accessElement[1];
console.log(element);
//output: Orange

const join=["banana", "Orange", "Apple", "Mango"]
let joinElement=join.join("***");
console.log(joinElement);
//output: banana***Orange***Apple***Mango

const pop=["banana", "Orange", "Apple", "Mango"]  
let popelement=pop.pop()
console.log(popelement);
//output: banbna, orange, apple

const push=["watermellon", "Apple", "Mango"]
let pushElement=push.push("kiwi")
console.log(pushElement);








