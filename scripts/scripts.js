

// if esle conditions
let a = 20;
let b = 30;
if (typeof a ==="number") {
    document.write("a is number and value of a is " + a );
} else {
  document.write("a is another primitive data type ");
}
//operators , operator precedence , comparision of data types,type cohersion
//===
let num = 20;
let _num = "20";
if (num===_num) {
  console.log("they are equal");
} else {
  console.log("they are not equal")
}
// && and ||
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;
if(num1<=20 && num2>=10){
 document.write("num1 and num2 are in between 9 and 21 ");
} else if(num3>50 || num4>60) {
  document.write("num1 and num2 are in between 9 and 21 ");

//set function uses elimate duplicates
let nums =[1,2,2,4];

console.log(new Set(nums))