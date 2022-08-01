// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

const arr = [3,4,5,6,7,8];
const mapFunction = (array,callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++){
        let newNum = callback(array[i])
        newArr.push(newNum)
    }
return newArr
}

const multiplyBy2 = (num) => {
    return num * 2
}

console.log(mapFunction(arr,multiplyBy2))

const array = [2,5,7,9,13];

const newArr = array.map(x => x * 2);

console.log(newArr)

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

const orders = [
  { food: "burger", price: 5.0 },
  { food: "hotdog", price: 2.0 },
  { food: "fries", price: 3.33 },
];

const reduceFunction = (arr) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x = x + arr[i].price;
  }
  return x;
};

console.log(reduceFunction(orders));

const totalprice = orders.reduce((total, order) => {
  console.log(`total: ${total}`);
  console.log(`order: ${order.price}`);
  return total + order.price;
}, 0);
console.log(totalprice);

// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

const numArray = [3, 5, 7, 9, 14, 18, 22, 27, 32, 43, 54];

const filterFunction = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (callback(currentNum)) {
      newArray.push(currentNum);
    }
  }
  return newArray;
};

const oddsArray = (num) => {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
};
const evensArray = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(filterFunction(numArray, oddsArray));
console.log(filterFunction(numArray, evensArray));

// const newFilterArray = numArray.filter((num,i,arr) => {
//     console.log(num,i,arr)
// return num % 2 === 1

// })
// console.log(newFilterArray)
const newFilterArray = numArray.filter(oddsArray);
console.log("this is my .filter method:", newFilterArray);
