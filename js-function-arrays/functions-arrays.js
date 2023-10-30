//Task 1
function functionDef(a, b) {
  if (a > b) {
    return a;
  } else return b;
}
console.log(functionDef(4, 8));

//function expression

const functionExp = function (a, b) {
  if (a > b) {
    return a;
  } else return b;
};
console.log(functionExp(10, 3));

//Arrow function
let functionArrow = (a, b) => {
  if (a > b) {
    return a;
  } else return b;
};

console.log(functionArrow(3, 7));

//Task 2

function recursiveFunction(value) {
  console.log(value);
  if (value < 20) {
    recursiveFunction(value + 1);
  }
}

recursiveFunction(2);

//Task 3

let nestedArray = [
  ["apple", "banana", "dog"],
  ["cherry", "cat", "elephant"],
  ["red", "green", "cat"]
];
function cat(a) {
  for (const array of a) {
    for (const element of array) {
      if (element === "cat") {
        console.log("Have a cat");
        return;
      }
    }
  }
  console.log("No cat");
}

cat(nestedArray);

// Task 4
function divideArray(numbers) {
  const result = [];

  try {
    if (numbers.length < 2) {
      throw new Error("Array must contain at least two elements.");
    }

    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i - 1] !== "number" || typeof numbers[i] !== "number" || numbers[i - 1] === 0) {
        throw new Error("Incorrect data in the array.");
      }
      result.push(numbers[i] / numbers[i - 1]);
    }

    return result;
  } catch (error) {
    console.error("Error message:", error.message);
    return result;
  } finally {
    console.log("Робота завершена");
  }
}

console.log(divideArray([10, 2, 5])); // Результат
console.log(divideArray([5, 0, 2])); // Помилка
console.log(divideArray([10, "abc", 2])); // Помилка
console.log(divideArray([3])); // Помилка

// Task 5

//a
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}

//b

const arrayColors = ["yellow", "green", "apple", "red", "pink"];
arrayColors.sort();

console.log(arrayColors);

//Task 6

const array1 = ["BMW", "AUDI", "VW"];
const array2 = ["M5", "Q8", "Golf"];

const newArray = array1.concat(array2);

console.log(newArray);

// Task 7

const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((a, b) => a + b);

console.log("The sum of array elements:", sum);
