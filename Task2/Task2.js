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

    console.log('__________________________')
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

console.log('__________________________')


// Exercise 4
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune (Job,Location,PartName,ChildNum){
    let Fortune= `You will be a ${Job} in ${Location}, and married to ${PartName} with ${ChildNum} Kids`
    console.log(Fortune)
}
tellFortune ('software engineer','Jordan','Alice',3)
tellFortune ('doctor','Jordan','Anne',5)
console.log('__________________________')

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(PuppyAge){
    let DogAge= PuppyAge*7;
    console.log(`Your doggie is ${DogAge} years old in dog years!`)
}
calculateDogAge(1)

console.log('__________________________')

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(Age,AmountPerDay){
    let Amount=(100-Age)*AmountPerDay*365;
    console.log(`"You will need ${Amount} cups of tea to last you until the ripe old age of 100`)
}
calculateSupply(30, 3);

console.log('__________________________')

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
    console.log(`Hello ${name}`)
}
greet ('Adam')

console.log('__________________________')


/*
5
what is the error:
function double(cat) {
  return 2 * x;  it is a function of variable called 'cat' and the calcuation inside is using another variable called x
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
    return 2 * x ;
  }
  console.log(double1(5));

function double2 (x){
  return 2 * x;
}
console.log(double2(5));

function double3 (x)  {
    return 2 * x;
}
console.log(double3(5));

console.log('__________________________')
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num){
    let NumCubed=num*num*num;
    console.log(`${num} cubed = ${NumCubed}`)
}
cube(4)

console.log('__________________________')

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2){
    let NumsMultiply=num1*num2;
    console.log(`${num1} * ${num2} = ${NumsMultiply}`)
}
multiply(5,4)
multiply(3,4)

console.log('__________________________')

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(AgeDr){
    let YearsTill20=20-AgeDr;
    if (AgeDr>=20){
        return 'Yes you can'
    }
    else{
        return `please come back after ${YearsTill20} years to get one`
    }
}
console.log(canIGetADrivingLicense(21))
console.log(canIGetADrivingLicense(17))
console.log(canIGetADrivingLicense(20))

console.log('__________________________')

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1,str2){
    if(str1.length===str2.length){
        return 'true';
    }
    else{
        return 'false'
    }
}
console.log(sameLength("tree","clue"))
console.log(sameLength("tree","car"))

console.log('__________________________')

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(numA,numB){
    if (numA>numB){
        return numA;
    }
    else{
        return numB
    }
}
console.log(largerNubmer(5,6))
console.log(largerNubmer(5,3))

console.log('__________________________')

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(first,second,third){
    if(Math.min(first,second,third)==first){
        return first;
    }
    else if(Math.min(first,second,third)==second){
        return second;
    }
    if(Math.min(first,second,third)==third){
        return third;
    }
}
console.log(smallerNubmer(8,6,7))
console.log(smallerNubmer(5,99,34))
console.log(smallerNubmer(5,99,3))
console.log(smallerNubmer(5,3,3))

console.log('__________________________')

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(strA,strB,strC,strD,strE){
if(Math.min(strA.length,strB.length,strC.length,strD.length,strE.length)==strA.length){
    return strA;
}
else if(Math.min(strA.length,strB.length,strC.length,strD.length,strE.length)==strB.length){
    return strB;
}
else if(Math.min(strA.length,strB.length,strC.length,strD.length,strE.length)==strC.length){
    return strC;
}
else if(Math.min(strA.length,strB.length,strC.length,strD.length,strE.length)==strD.length){
    return strD;
}
else if(Math.min(strA.length,strB.length,strC.length,strD.length,strE.length)==strE.length){
    return strE;
}
}
console.log(shorterString("air","school","car","by","github"))
console.log(shorterString("air","tr","car","by","github"))
console.log(shorterString("by","tr","car","air","github"))
console.log(shorterString("air","by","car","school","github"))
console.log(shorterString("air","tr","by","car","github"))
console.log(shorterString("air","tr","car","github","by"))

console.log('__________________________')


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(strAA,strBB,strCC,strDD){
    if(Math.max(strAA.length,strBB.length,strCC.length,strDD.length)==strAA.length){
        return strAA;
    }
    if(Math.max(strAA.length,strBB.length,strCC.length,strDD.length)==strBB.length){
        return strBB;
    }
    if(Math.max(strAA.length,strBB.length,strCC.length,strDD.length)==strCC.length){
        return strCC;
    }
    if(Math.max(strAA.length,strBB.length,strCC.length,strDD.length)==strDD.length){
        return strDD;
    }
    }
    console.log(longerString("air","school","car","github"));
    console.log(longerString("air","schoo","car","github"));

    console.log('__________________________')

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(numb){
    if(numb %2 ==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(1));
console.log(isEven(2));

console.log('__________________________')


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(numbb){
    if(numbb %2 != 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isOdd(4));
console.log(isOdd(5));

console.log('__________________________')

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number){
    return Math.abs(number);
}
console.log(positive(4))
console.log(positive(-5))
console.log(positive(0))

console.log('__________________________')


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
 function fullName(firstName,lastName){
    return firstName + ' ' + lastName;
 }
 console.log(fullName("Adam","McCallen"))
 console.log(fullName("Alex", "Mercer"))

 console.log('__________________________')


 /*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1,n2,n3,n4,n5){
let sum= n1+n2+n3+n4+n5;
let avg=sum/5;
return avg;
}
console.log(average(1,2,3,4,5))
console.log(average(5,7,9,3,5))

console.log('__________________________')

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
return Math.random();
}

console.log(randomNumber());

console.log('__________________________')

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
    
function randomBetweenNumbers(max, min){
        return Math.random() * (max - min) + min;
    }

console.log(randomBetweenNumbers(1,8))

console.log('__________________________')


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(sc){
if (sc<=100 && sc>=95)
    return 'A';
if (sc<=94 && sc>=85)
    return 'B';
if (sc<=84 && sc>=70)
    return 'C';
if (sc<=69 && sc>=50)
    return 'D';
if (sc<=49 && sc>=0)
    return 'F';
}
console.log(scoreInUniversty(96))
console.log(scoreInUniversty(3))
console.log(scoreInUniversty(71))

console.log('__________________________')
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count=1;
let counter =function (){
    return count++;
}
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

console.log('__________________________')

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
    let PreviousCounter=counter()-1;
    let reset_string=`${PreviousCounter} and the counter reset now`;
    count=1;
    return reset_string;
}
console.log(counter())
console.log(counter())
console.log(resetCounter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(resetCounter())
console.log(counter())





