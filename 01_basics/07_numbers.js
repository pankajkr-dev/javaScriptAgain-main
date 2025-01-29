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

//infinity
var myNum=2;
var txt="";
while(myNum!=Infinity){
    myNum=myNum*myNum;
    txt=+myNum+"<br>";
}
console.log(txt);
//output: 4,16,256,65536,4294967296,18446744073709552000,Infinity

console.log(typeof Infinity);
//output: number

var myNumber=2/0;
console.log(myNumber);
//output: Infinity

//Number Methods

//toString() method
let r=123;
console.log(r.toString());
//output: 123
console.log(typeof r);
//output: number
console.log(typeof r.toString());
//output: string

//toExponential() method
let s=9.656;
console.log(s.toExponential());
//output: 9.656e+0
console.log(s.toExponential(2));
//output: 9.66e+0
console.log(s.toExponential(4));
//output: 9.6560e+0

//toFixed() method
let t=9.656;
console.log(t.toFixed());
//output: 10
console.log(t.toFixed(0));
//output: 10
console.log(t.toFixed(2));
//output: 9.66
console.log(t.toFixed(4));
//output: 9.6560


//toPrecision() method
let u=19.656;
console.log(u.toPrecision());
//output: 19.656
console.log(u.toPrecision(2));
//output: 19  
console.log(u.toPrecision(4));
//output: 19.66
console.log(u.toPrecision(6));
//output: 19.6560

//valueOf() method
let v=123;
console.log(v.valueOf());
//output: 123
console.log(typeof v.valueOf());
//output: number
let xx="pankaj";
console.log(xx.valueOf());
//output: pankaj
console.log(typeof xx.valueOf());
//output: string


//number() function
let yy="123";
console.log(Number(yy));
//output: 123
console.log(Number(true));
//output: 1
console.log(Number(false));
//output: 0
console.log(Number("10 20"));
//output: NaN
console.log(Number("10,20"));
//output: NaN
console.log(Number("10.20"));
//output: 10.20
//it also works of dates
console.log(Number(new Date("2017-09-30")));
//output: 1506729600000
console.log(Number(new Date("2017-09-30")));
//output: 1506729600000

//parseInt() function
let zz="10";
console.log(parseInt(zz));
//output: 10
let aaa="10.33";
console.log(parseInt(aaa));
//output: 10
let bbb="10 20 30";
console.log(parseInt(bbb));


//issaferInteger() method
let ccc=123;
console.log(Number.isSafeInteger(ccc));
//output: true
let ddd=12345678901234567890;
console.log(Number.isSafeInteger(ddd));


//number properties
console.log(Number.MAX_VALUE);
//output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
//output: 5e-324
console.log(Number.POSITIVE_INFINITY);
//output: Infinity
console.log(Number.NEGATIVE_INFINITY);
//output: -Infinity
console.log(Number.NaN);
//output: NaN
console.log(Number.EPSILON);
//output: 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER);
//output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
//output: -9007199254740991

