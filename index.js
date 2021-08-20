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

let x = "John";
let y = "Doe";
/* console.log(x + " <> " + y); */
console.log(x.concat(" ", y));

writeHeader("Exercise22");
person = {
  Name: "Frank",
  Email: "frank@gmail.com",
  Age: 24,
};

console.log(person);

writeHeader("Exercise23");
delete person.Email;
console.log(person);

writeHeader("Exercise24");
