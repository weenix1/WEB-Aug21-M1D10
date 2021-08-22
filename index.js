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

/* let myArray = [];

      for (let i = 0; i < 10; i++) {
        myArray.push("New value: " + i);
      }

      console.log(myArray); */

writeHeader("Exercise25");
/*25) Print in the console every string in the previous array  */
console.log(array);

/*  for (let string of myArray) {
        console.log(string);
      } */

writeHeader("Exercise26");
/* 26) Create an array with 100 random numbers in it */

let arrayNum = [];
for (let i = 0; i <= 100; i++) {
  arrayNum.push(Math.floor(Math.random() * 100 + 1));
}

console.log(arrayNum);

/* 
      let randomNumbers = [];
      for (let i = 0; i < 100; i++) {
        randomNumbers.push(Math.round(Math.random() * 100));
      }

      console.log(randomNumbers);
 */

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

/*  function getMaxMin(numbers) {
        let max = numbers[0];
        let min = numbers[0];

        /*for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > max){
                max = numbers[i]
            }
            
            if (numbers[i]< min) {
                min = numbers[i]
            }
        }*/

/*  for (let number of numbers) {
          max = number > max ? number : max;
          min = number < min ? number : min;
        }

        return { max, min };
      }

      console.log(getMaxMin(randomNumbers)); */

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

/* let arrayOfArrays = [];

      for (let i = 0; i < 10; i++) {
        let innerArray = [];
        for (let j = 0; j < 10; j++) {
          innerArray.push(Math.round(Math.random() * 10));
        }
        arrayOfArrays.push(innerArray);
      }

      console.log(arrayOfArrays); */

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

/* function returnLargest(array1, array2) {
        return array1.length >= array2.length ? array1 : array2;
        /* condition ? value_when_true : value_when_false */

/*if (array1.length > array2.length) {
            return array1
        } else  {
            return array2
        }*/
// }
// console.log(returnLargest([1, 2], [1, 2, 3])); */

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

/* function returnLargestSum(array1, array2) {
        let sum1 = 0;

        for (let number of array1) {
          sum1 += number;
        }

        let sum2 = 0;

        for (let number of array2) {
          sum2 += number;
        }

        return sum1 >= sum2 ? sum1 : sum2;
      }

      console.log(returnLargestSum([100, 999], [10000, 2, 3, 4])); */

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

//DOM

writeHeader("Exercise31");
/* 31) Get element with ID "container" from the page */
document.getElementById("title");

writeHeader("Exercise32");
/* 32) Get every "td" from the page */
document.querySelectorAll("td");

writeHeader("Exercise33");
/* 33) Create a cycle that prints the text inside every td of the page */
tds.forEach((td) => {
  td.innerText = "text";
});

writeHeader("Exercise34");
/* 34) Write a function to change the heading of the page */
function changeHeader(newheading) {
  let newHeading = document.getElementById("title");
  newHeading.innerText = newheading;
}

/*   const changeH1 = function (content) {
        const h1 = document.querySelector("h1");
        h1.innerText = content;
      };
      changeH1("new text"); */

writeHeader("Exercise35");
/*35) Write a function to add an extra row to the table  */

const addRow = function () {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    const td = document.createElement("td");
    td.innerText = i + 1;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
};
addRow();

/* 
function extraTableRow(newRow) {
  let tableRow = document.querySelector("tr");
  let addNewTableRow = document.createElement("tr");
  addNewTableRow.innerHTML = newRow;
  tableRow.appendChild(addNewTableRow);
} */

writeHeader("Exercise36");
/* 36) Write a function to add the class "test" to each row in the table */

const addClassToRow = function () {
  const trs = document.querySelectorAll("tr");
  trs.forEach((tr) => {
    tr.classList.add("test");
  });
};
/* 
function AddNewClass() {
  let row = document.querySelector("tr");
  row.classList.add("test");
} */

writeHeader("Exercise37");
/* 37) Write a function to add a red background to every link in the page */

const addRedBg = function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.classList.add("bg-red");
  });
};
addRedBg();
/* 
function addLinkBackgroundColor() {
  let linkBgColor = document.querySelector("link");
  linkBgColor.style.backgroundColor = "red";
} */

writeHeader("Exercise38");
/* 38) Console log "Page loaded" when the page is correctly loaded */

window.onload = function () {
  console.log("Page loaded");
};
/* 
window.onload = () => {
  console.log("page loaded");
}; */

writeHeader("Exercise39");
/* 39) Write a function to add new items to a UL */

const addLi = function () {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "new list item";
  ul.appendChild(li);
};
addLi();

/* function addNewItems() {
  let li = document.querySelector("ul > li");
  let newItem = document.createElement("li");
  newItem.innerHTML = "exercises for now";
  li[0].appendChild(newItem);
} */

writeHeader("Exercise40");
/* 40) Write a function to empty a list  */

const emptyList = function () {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
};
emptyList();
/* 
function emptyList() {
  let list = document.querySelector("ul");
  list.remove();
}
 */

/* EXTRA 

        41) Add an eventListener to alert when the mouse is over a link, displaying the URL
        42) Add a button to hide every image on the page
        43) Add a button to hide and show the table from the page
        44) Write a function to sum every number inside the TD (if the content is numeric)
        45) Delete the last letter from the title each time the user clicks on it
        46) Change a single TD background color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over it
        49) Write a function to add a table with 4 rows and 3 columns programmatically
        50) Write a function to remove the table from the page
    --> */

writeHeader("Exercise41");
// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
const alertUrl = function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.onmouseenter = function (e) {
      alert(e.target.href);
    };
  });
};
//alertUrl();

// 42) Add a button to hide every image on the page
const hideImages = function () {
  const btn = document.createElement("button");
  btn.innerText = "Hide images";
  btn.onclick = function () {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.classList.add("d-none");
    });
  };
  const body = document.querySelector("body");
  body.appendChild(btn);
};
hideImages();

// 43) Add a button to hide and show the table from the page
const toggleTable = function () {
  const btn = document.createElement("button");
  btn.innerText = "Toggle table";
  btn.onclick = function () {
    const table = document.querySelector("table");
    table.classList.toggle("d-none");
  };

  const body = document.querySelector("body");
  body.appendChild(btn);
};
toggleTable();

// 44) Write a function to sum every number inside the TD (if the content is numeric)
const sumNumbers = function () {
  const tds = document.querySelectorAll("td");
  let sum = 0;
  tds.forEach((td) => {
    const toNumber = parseInt(td.innerText);
    const isNotNumeric = isNaN(toNumber);
    if (!isNotNumeric) {
      sum += toNumber;
    }
  });
  alert(sum);
};
//sumNumbers();

// 45) Delete the last letter from the title each time the user clicks on it
const deleteLastChar = function () {
  const h1 = document.querySelector("h1");
  h1.onclick = function (e) {
    h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1);
  };
};
deleteLastChar();

// 46) Change a single TD background color when the user clicks on it
const changeTdBg = function () {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    td.onclick = function (e) {
      e.target.classList.toggle("bg-red");
    };
  });
};
//changeTdBg();

// 47) Add a button DELETE, on click it should delete a random TD from the page
const deleteRandom = function () {
  const btn = document.createElement("button");
  btn.innerText = "Delete random";
  btn.onclick = function () {
    const tds = document.querySelectorAll("td");
    const random = Math.floor(Math.random() * tds.length);
    tds[random].remove();
  };
  const body = document.querySelector("body");
  body.appendChild(btn);
};
deleteRandom();

// 48) Add a pink border to a cell when the mouse is over it
const addPinkBorder = function () {
  const cells = document.querySelectorAll("td");
  cells.forEach((td) => {
    td.onmouseenter = function (e) {
      e.target.classList.add("border-pink");
    };
    td.onmouseleave = function (e) {
      e.target.classList.remove("border-pink");
    };
  });
};
addPinkBorder();
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
/*
<table class="table-2">
  <tbody>
      <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
      </tr>
      <tr>
          <td>Row: 1 Col: 1</td>
          <td>Row: 1 Col: 2</td>
          <td>Row: 1 Col: 3</td>
      </tr>
      <tr>
          <td>Row: 2 Col: 1</td>
          <td>Row: 2 Col: 2</td>
          <td>Row: 2 Col: 3</td>
      </tr>
      <tr>
          <td>Row: 3 Col: 1</td>
          <td>Row: 3 Col: 2</td>
          <td>Row: 3 Col: 3</td>
      </tr>
      <tr>
          <td>Row: 4 Col: 1</td>
          <td>Row: 4 Col: 2</td>
          <td>Row: 4 Col: 3</td>
      </tr>
  </tbody>
</table>

*/
const createTable = function () {
  const body = document.querySelector("body");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  body.appendChild(table);
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < 3; j++) {
      if (i === 0) {
        const th = document.createElement("th");
        th.innerText = "Heading " + (j + 1);
        tr.appendChild(th);
      } else {
        const td = document.createElement("td");
        td.innerText = `Row ${i} Col ${j + 1}`;
        tr.appendChild(td);
      }
    }
  }
};
createTable();
// 50) Write a function to remove the table from the page
const removeTable = function () {
  const table = document.querySelectorAll("table")[1];
  table.remove();
};
//removeTable();
