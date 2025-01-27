const name="pankaj"
const number=25
const surName="kumar"
console.log(name+number) 
const fullName="       pankaj kumar           ";
let collegeName="vivekanand"
//output: pankaj25

const gameName= new String('pankaj-kr-com')
console.log(gameName[0]) 
//output: p
console.log(ganeName.__proto__);
//output: String

console.log(gameName.length);
//output: 12
console.log(gameName.toUpperCase());
//output: PANKAJ-KR-COM
console.log(gameName.toLowerCase());
//output: pankaj-kr-com
console.log(gameName.indexOf('kr'));
//output: 7
console.log(gameName.lastIndexOf('kr'));
//output: 7
console.log(gameName.charAt(7));
//output: k
console.log(gameName.slice(7,9));
//output: kr
//method-2
console.log(gameName.slice(7));
//output: kr-com
console.log(gameName[5]);
//output: j
console.log(gameName.substring(7,9));
//output: kr
console.log(ganeName.substr(7,2));
//output: kr
console.log(concat('pankaj','Kumar'));
//output: pankajKumar
conslle.log(fullName.trim());
//output: pankaj kumar
console.log(`the full lenth of the fullName is ${fullName.length} after triming the length is ${fullName.trim().length}`);
//output: the full lenth of the fullName is 22 after triming the length is 12
console.log(`the full lenth of the fullName is ${fullName.length} after triming the length is ${fullName.trimEnd().length}`);
//output: the full lenth of the fullName is 22 after triming the length is 20
console.log(collegeName.padStart(20,'*'));
//output: ********vivekanand
console.log(collegeName.padEnd(20,'*'));
//output: vivekanand********
console.log(collegeName.repeat(3));
//output: vivekanandvivekanandvivekanand
console.log(collegeName.replace('vivekanand','vivekanand institute of technology'));
//output: vivekanand institute of technology
console.log(collegeName);
//output: vivekanand
console.log
let text="the quick brown fox jumps over the lazy dog";
console.log(text.replaceAll('fox','cat'));
//output: the quick brown cat jumps over the lazy dog

let texts="a,b,c,d,e";
console.log(texts.split(','));
//output: [a,b,c,d,e]
console.log(texts.splits(''));
//output: [a, ,b, ,c, ,d, ,e]
console.log(texts.split('||'));
let x="Having Fun?"
console.log(slice(7,10));





 





