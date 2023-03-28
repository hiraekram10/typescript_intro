var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('btn');
var add = function (val1, val2) {
    return val1 + val2;
};
button.addEventListener("click", function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal, +secondVal));
});
//Basic types
//1. string :string => "dog","cat"
//2. number :number=> 7, 0.5 , -3
//3. Boolean :boolean => ture false
//let person ="hira"
//person= "red" good
//person = 3 error
var user;
user = "hira";
//user =7  wrong
//Array
var arr = ["mango", "bnana"]; //type string array
// arr.push(3) //wrong
arr.push("blue");
var arr2 = [1, 8, 3, 15];
arr2.push(7);
//union operators just like or operator 
