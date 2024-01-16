// Assignment -> Search for array methods and send an example for each one of them

//push --> use to add elements at the end of array
let names = ['shimaa','habiba','tasneem']
names.push('eman')
console.log(names) //['shimaa', 'habiba', 'tasneem', 'eman']

//pop --> remove the last element in array
let furits = ['apple','orange','banana']
furits.pop()
console.log(furits) //['apple', 'orange']

//shift --> remove the first element from array
let languages = ['english','arabic','french']
languages.shift()
console.log(languages) //['arabic', 'french']

//unshift --> add elements at the beginnin of array
languages.unshift('Turkish')
console.log(languages)  // ['Turkish', 'arabic', 'french']

// concat -->  combine between two arrays
let array_concat = names.concat(languages)
console.log(array_concat) //['shimaa', 'habiba', 'tasneem', 'eman', 'Turkish', 'arabic', 'french']

//slice  (position from it start sicing , end --> not include end )
let Countries = ['Algeria','Andorra', 'Angola' ,'Argentina' , 'Armenia' ,'Australia']
console.log(Countries.slice(2,4)) // ['Angola', 'Argentina']

//splice (position that new element will add in , delete count -->number of element need to remove to add new element , value of new element)
//splice make new array
let courseName = ['full-Stack','Front-End','Back-End']
// courseName.splice(0,0,'UI/UX','Design')
//console.log(courseName) // ['UI/UX', 'Design', 'full-Stack', 'Front-End', 'Back-End']

courseName.splice(1,2,'UI/UX', 'Design') // adding new elements in the position of back-end and remove it from array  as we set delete count 1 if setting delete count 0 it remain in the array but at the end f array
console.log(courseName)

//forEach  // apply function on each element of array --> not create new array
let numbers = [1,2,3,4,5]
let multiplicationByTwo = numbers.forEach(function(num){
  // return num*2
  console.log(num*2)
})
//console.log(multiplicationByTwo) // undefined  when use return as foreach not return anything

//map: Creates a new array with the results of calling a provided function on every element in the array.
let myNums = [1,2,3,4,5,6]
let add = myNums.map(function(num){
  return num + num
})
console.log(add)

//filter: Creates a new array

let nums = [1,2,3,10,5,19,20,33,100]
let filterArray = nums.filter((ele)=>{
  return ele > 10
})
console.log(filterArray)