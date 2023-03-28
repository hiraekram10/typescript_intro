const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement
const button = document.getElementById('btn')!

const add = function (val1:number,val2:number){
    return val1 + val2
}
button.addEventListener("click",function(){
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal , +secondVal))
})

//Basic types
//1. string :string => "dog","cat"
//2. number :number=> 7, 0.5 , -3
//3. Boolean :boolean => ture false


//let person ="hira"
//person= "red" good
//person = 3 error

let user:string;
user = "hira"
//user =7  wrong


//Array


const arr:string[] = ["mango","bnana"] //type string array
// arr.push(3) //wrong
arr.push("blue")

const arr2:number[] = [1,8,3,15]
arr2.push(7)

//union operators just like or operator 
const arr3 :boolean[] = [true]
arr3.push(false)

