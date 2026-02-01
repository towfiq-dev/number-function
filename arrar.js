function myArray (numbers){
  let sum = 0
  for(let number of numbers){
    console.log(number)
    sum = sum + number
  }
  return sum
}
let numbs = [1,2,3,4,5]
let folafol = myArray(numbs)
console.log(folafol)