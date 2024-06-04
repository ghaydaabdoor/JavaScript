// excercise 1

/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

function LargerNum(x,y){
    if (x>y){
        return x; 
    }
    else{
        return y;
    }
}
let larg= LargerNum(10,20)
console.log(larg)

 /******* End Your Code ********* */

 /* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
// function product(a,b,c){
//     let pro=a*b*c;
//     if(a*b*c > 0){
//         let pos= `The sign is +`;
//         return pos;
//     }
//     else{
//         let neg=`The sign is -`;
//         return neg;
//     }
// }
// window.alert(product(3,-7,2))


 /******* End Your Code ********* */

 /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

// function SortDes (num1,num2,num3){
//     let DesOrder;
//     if(num1>num2 && num1>num3){
//         if(num2>num3){
//             DesOrder=[num1,num2,num3];
//         }
//         else{
//             DesOrder=[num1,num3,num2];
//         }
//     }
//     else if(num2>num1 && num2>num3){
//         if(num1>num3){
//             DesOrder=[num2,num1,num3];
//         }
//         else{
//             DesOrder=[num2,num3,num1];
//         }
//     }
//     else if(num3>num1 && num3>num2){
//         if(num1>num2){
//             DesOrder=[num3,num1,num2];
//         }
//         else{
//             DesOrder=[num3,num2,num1];
//         }
//     }
//     return DesOrder;
// }
// let SortDesEx=SortDes(0,-1,4);
// window.alert(`The Descending order of [0,-1,4] is: \n \n [${SortDesEx}]`)

 /******* End Your Code ********* */

 /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

// function largest(no1,no2,no3,no4,no5){
//     let LargestNum;
//     if (no1>no2 && no1>no3 && no1>no4 && no1>no5){
//         LargestNum=no1;
//     }
//     else if(no2>no1 && no2>no3 && no2>no4 && no2>no5){
//         LargestNum=no2;
//     }
//     else if(no3>no1 && no3>no2 && no3>no4 && no3>no5){
//         LargestNum=no3;
//     }
//     else if(no4>no1 && no4>no2 && no4>no3 && no4>no5){
//         LargestNum=no4;
//     }
//     else if(no5>no1 && no5>no2 && no5>no3 && no5>no4){
//         LargestNum=no5;
//     }
//     return LargestNum;
// }
// let LargestNumEx=largest(-5,-2,-6,0,-1);
// window.alert(`The Largest number of [-5,-2,-6,0,-1] is ${LargestNumEx}`)
 
// /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
 
function exc5(x,y){
if(x>y){
    document.write('Hello World')
}
else{
    window.alert("Goodbye")
}
}
exc5(15,5)

 /******* End Your Code ********* */

// excercise 2
/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
function RateFun(rate){
    if(rate<50){
        return "Fail";
    }
    else if( rate>=50 && rate<=59 ){
        return "E";
    }
    else if( rate>=60 && rate<=69 ){
        return "D";
    }
    else if( rate>=70 && rate<=79){
        return "C";
    }
    else if( rate>=80 && rate<=89){
        return "B"
    }
    else if( rate>=90 && rate<=100){
        return "A"
    }
}
console.log(RateFun(50));
console.log(RateFun(63));
console.log(RateFun(95));
console.log(RateFun(88));
console.log('__________________________')

// excercise 3
// 1. Write a JS code to print numbers from 1 to 10
let i;
for(i=1;i<11;i++){
    console.log(i)
}
console.log('__________________________')

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100]
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
    console.log(arr[i])
    }
}

console.log('__________________________')


  /*
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
    for (let z=1;z<=8;z++) {
        let numbers ='';
        for (let n=1;n<=z;n++) {
            numbers+=n+' ';
        }
        console.log(numbers);
    }


/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
function checkY (text){
    if(text.includes('y')){
        console.log('Yes it contains "y"')
    }
    else(console.log('No it does not include "y"'))
}
checkY('don’t know why')
