
// first task
let x= 250;
let zakat= 0.025*x;
console.log('Zakat=' + zakat)

// Array Tasks - 1
  // [ 1,7  9  45, ] ==> comma is missing between 7 and 9, and between 9 and 45, remove the final empty element
  let arr1= [1,7,9,45]
 console.log(arr1)

  // ["Str" "alex","moh" ==> comma is missing between Str and alex, closing square bracket is missing
  let arr2= ["Str","alex","moh"]
  console.log(arr2)

  // 'the','fox' 'over' lazy, 'dog',  ] ==> starting square bracket is missing, comma between fox and over is missing, and between over and lazy, lazy doesn't have quotation '', the last element is empty
  let arr3= ['the','fox','over','lazy','dog']
  console.log(arr3)

// Array Task - 2
  var fruits=["Tomato","Banana","Watermelon"]
  console.log(fruits)
  console.log('Index of "Banana" is ' + fruits.indexOf('Banana'))
  console.log('Index of "Tomato" is ' + fruits.indexOf('Tomato'))

// Array Task - 3
  Fav_food=['Kabseh','Pizza']
  Fav_sport=['Running','Tennis','Swimming']
  Fav_movie=['Shawshank Redemption','A beautiful mind']
  console.log('My favorite food, sports and movies, respectively:')
  console.log(Fav_food)
  console.log(Fav_sport)
  console.log(Fav_movie)

//Array Task - 4
  let arr_num=[1,4,5]
  let arr_letter=['t','u','g','x']
  let first_num= arr_num[0]
  let first_letter= arr_letter[0]
  console.log(`firstofArray([${arr_num}]) => ${first_num}`)
  console.log(`firstofArray([${arr_letter}]) => "${first_letter}"`)

// Array Task - 5  
  let last_num= arr_num[arr_num.length-1]
  let last_letter= arr_letter[arr_letter.length-1]
  console.log(`lastofArray([${arr_num}]) => ${last_num}`)
  console.log(`lastofArray([${arr_letter}]) => "${last_letter}"`)
 
// Array Task - 6
  var array = [0,5,7,9]
  array.shift();
  array.shift();
  array.shift();
  array.unshift(1,3,4,6,8)
  array.push(10)
  console.log(array)

// Array Task - 7
  var array2 = [5,9,-7,3.5]
  // push to add element at the end of array
  array2.push('50')
  console.log(array2)
  // pop to delete the last element of array
  array2.pop()
  console.log(array2)
  // Unshift to add element at the beginning of array
  array2.unshift('50');
  console.log(array2)
  // Shift to delete thie first element of array
  array2.shift()
  console.log(array2)

// Array Task - 8
  var arr_org = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  arr_org.sort(function  sorting(a,b){
  return a-b;
  }
  )
  console.log(arr_org)

