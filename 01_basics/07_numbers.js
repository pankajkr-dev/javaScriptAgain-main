let x=55;
let y=55.55;
console.log(x,y);
//output: 55 55.55
console.log(typeof x);
//output: number
let z=999999999999999;
console.log(z);
//output: 999999999999999
let a=99999999999999999;
console.log(a);
//output: 100000000000000000
//intergers are accurage upto 15 digits


//for extra large and extra small numbers , we can use scientific notation

let b=9.99e-6;
console.log(b);
//output: 0.00000999
let c=999e6;
console.log(c);
//output: 999000000

//floating point numbers are not always accurate
let d=0.1+0.2;
console.log(d);
//output: 0.30000000000000004

//+ operator can be used for addition and concatenation
let e=1+2;
console.log(e);
//output: 3
let f='1'+'2';
console.log(f);
//output: 12 
let g=1+'2';
console.log(g);
//output: 12
let h='1'+2;
console.log(h);
//output: 12
let i='1'+2+3;
console.log(i);
//output: 123
let j=1+2+'3';
console.log(j);
//output: 33
let k=1+2+'3'+4+5;
console.log(k);
//output: 3345
let l="1"/"2";//with any operator other than +, javascript will try to convert the string to number
console.log(l);
//output: 0.5
let m="1"*"2";
console.log(m);
//output: 2
let n="1"-"2";
console.log(n);
//output: -1
let o="1"/"a";//if the string cannot be converted to number, it will return NaN
console.log(o);
//output: NaN
let p=1/"a";
console.log(p);
//output: NaN
let q="pankaj";
console.log(isNaN(q));
//output: true 
//typeof NaN is number
