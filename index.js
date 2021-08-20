/* JS EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values */
const writeHeader = function (title) {
  console.log(`\n\n]>-------------<[ ${title.toUpperCase()} ]>-------------<[`);
};

writeHeader("Exercise21");
/*  21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"*/
let x = "John";
let y = "Doe";
/* console.log(x + " <> " + y); */
console.log(x.concat(" ", y));

writeHeader("Exercise22");
/* 22) Create an object with properties such name, surname, email  */
person = {
  Name: "Frank",
  Email: "frank@gmail.com",
  Age: 24,
};

console.log(person);

writeHeader("Exercise23");
/*  23) Delete Email from the previously created object */
delete person.Email;
console.log(person);

writeHeader("Exercise24");
/* 24) Create an array with 10 strings in it */
let array = [
  "car",
  "bike",
  "books",
  "ipad",
  "iphone",
  "money",
  "fruit",
  "bag",
  "shoe",
  "house",
];

writeHeader("Exercise25");
/*25) Print in the console every string in the previous array  */
console.log(array);

writeHeader("Exercise26");
/* 26) Create an array with 100 random numbers in it */

let arrayNum = [];
for (let i = 0; i <= 100; i++) {
  arrayNum.push(Math.floor(Math.random() * 100 + 1));
}

console.log(arrayNum);

writeHeader("Exercise27");
/* 27) Wrote a function to get the MAX and the MIN from the previously created array */
function MaxMinNum() {
  let max = arrayNum[0];
  let min = arrayNum[0];
  for (let i = 1; i < arrayNum.length; i++) {
    let ArrayValue = arrayNum[i];
    min = ArrayValue < min ? ArrayValue : min;
    max = ArrayValue > max ? ArrayValue : max;
  }

  return [min, max];
}
console.log(MaxMinNum());

writeHeader("Exercise28");
/* 28) Create an array of arrays, in which every array has 10 random numbers */

let arrayOfArrays = Array(5)
  .fill()
  .map(() =>
    Array(10)
      .fill()
      .map(() => Math.floor(Math.random() * 10))
  );
console.log(arrayOfArrays);

writeHeader("Exercise29");
/* 29) Create a function that gets 2 arrays and returns the longest one */
function getLongestArray() {
  let arrayOne = ["bill", "money", "fan"];
  let arrayTwo = ["cat", "dog", "fish", "goat", "chicken", "cow"];
  if (arrayTwo.length > arrayOne.length) {
    return arrayTwo;
  } else {
    return arrayOne;
  }
}
console.log(getLongestArray());

writeHeader("Exercise30");
/*  30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values  */

/* function getHighestSumArray() {
  let arrayOne = [3, 4, 2, 1, 6];
  let arrayTwo = [1, 2, 5, 3];
  if (arrayTwo.length > arrayOne.length) {
    return arrayTwo;
  } else {
    return arrayOne;
  }
} */

function getHighestSumArray(array1, array2) {
  let sum = [];
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    sum.push((array1[i] || 0) + (array2[i] || 0));
  }
  return sum;
}
console.log(getHighestSumArray([3, 4, 2, 1, 6], [1, 2, 5, 3]));

/* 
DOM 

31) Get element with ID "container" from the page
32) Get every "td" from the page
33) Create a cycle that prints the text inside every td of the page
34) Write a function to change the heading of the page
35) Write a function to add an extra row to the table
36) Write a function to add the class "test" to each row in the table
37) Write a function to add a red background to every link in the page
38) Console log "Page loaded" when the page is correctly loaded
39) Write a function to add new items to a UL
40) Write a function to empty a list */

writeHeader("Exercise31");
/* 31) Get element with ID "container" from the page */
