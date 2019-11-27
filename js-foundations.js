// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
console.log("\nQuestion 1 answers:\n")

const divByThree = (number) => {
  return (number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`)
}
console.log(divByThree(15));
console.log(divByThree(0));
console.log(divByThree(385));
console.log(divByThree(-7));


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

console.log("\nQuestion 2 answers:\n")

const helloMe = {
  firstName: "Samuel",
  lastName: "Bates",
  primaryMedium: "guitar",
  favoriteGenre: "jazz",
  introduction: function introduceMe() {
    return `Hello! My name is ${this.firstName} ${this.lastName}. I play ${this.favoriteGenre} ${this.primaryMedium}.`
  }
}

console.log(helloMe.introduction());

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

console.log("\nQuestion 3 answers:\n")


const everyOther = (array) => {
  let string = ""
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      if (i === array.length - 1 || i === array.length - 2) { //this clause prevents the last added item from including the space found in the else clause
        string += array[i]
      } else {
        string += `${array[i]} `
      }
    } else {
      continue
    }
  }
  return string
}

console.log(everyOther(randomNouns));

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const titleCaser = (array) => {
  return array.map(value => value.slice(0,1).toUpperCase() + value.slice(1))
}

console.log(titleCaser(randomNouns));

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const lengthMap = (array) => {
  return array.map(value => value.length)
}

console.log(lengthMap(randomNouns));

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

console.log("\nQuestion 4 answers:\n")


const alphabetSoup = (string) => {
  return string.split("").sort().join("")
}

console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetSlurry = (...strings) => {
  return strings.join("").split("").sort().join("")
}

console.log(alphabetSlurry(testString1, testString2, testString3));

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

//these functions only work if the arguments are passed in the intended order

console.log("\nQuestion 5 answers:\n")


const arrayIntersperser = (arr1, arr2) => {
  let newArray = []
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i])
    newArray.push(arr2[i])
  }
  return newArray.join(" ")
}

console.log(arrayIntersperser(amounts, animals));

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"


const arrayIntersperser2 = (numbers, strings) => {
  let newArray = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      newArray.push(numbers[i])
      newArray.push(strings[i].slice(0, strings[i].length - 1)) //assumes the word is plural, removes letter 's'
    } else {
      newArray.push(numbers[i])
      newArray.push(strings[i])
    }
  }
  return newArray.join(" ")
}

console.log(arrayIntersperser2(amounts, animals));
