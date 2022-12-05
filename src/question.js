const product = [
  {
    name: "Electronics",
    price: 2000,
  },
  {
    name: "Electronics",
    price: 4000,
  },
  {
    name: "Electronics",
    price: 5000,
  },
];

const doublePrice = (arr) => {
  return arr.map((data) => {
    if (data.name == "Electronics") {
      return {
        ...data,
        price: data.price * 2,
      };
    }
    return data;
  });
};

console.log(doublePrice(product));

const duplicates = [1, 1, 4, 4, 3, 2, 2, 3];

const removeDuplicate = (arr) => {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      result.push(arr[i]);
    }
    obj[arr[i]] = true;
  }
  return result;
};

const number = 403;
const sumNumber = (num) => {
  let arr = num.toString().split("").map(Number);
  console.log(arr);
  return arr.reduce((curr, acc) => {
    let sum = curr + acc;
    return sum;
  });
};
console.log(sumNumber(number), "number");

const power = (num, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = num * result;
  }
  return result;
};
console.log(power(2, 8)); //16 i.e 2*2*2*2

// target = 10;
const arrs = [5, 4, 6, 3, 10];
const findSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        if (i !== j) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
};
console.log(findSum(arrs, 13));
