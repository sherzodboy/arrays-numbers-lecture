/*
**Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

**Your tasks:**

Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the **first** and the **last two** dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult (*"Dog number 1 is an adult, and is 5 years old"*) or a puppy (*"Dog number 2 is still a puppy ")
    
4. Run the function for both test datasets

**Test data:**

§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

**Hints:** Use tools from all lectures in this section so far 😉
**GOOD LUCK** 😀

const checkDogs = (dogsJulia, dogsKate) => {
  const correctedDogsJulia = dogsJulia.slice();
  correctedDogsJulia.splice(0, 1);
  correctedDogsJulia.splice(-2);
  
  const dogs = correctedDogsJulia.concat(dogsKate);
  console.log(dogs);
  
  dogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

// LECTURES

/*
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, a) {
  console.log(`${key}: ${value} `);
});

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, arr) => {
  console.log(value);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`${i + 1}: You withdrawl ${Math.abs(movement)}`);
  }
}

console.log('-------forEach------');

movements.forEach((move, idx, arr) => {
  if (move > 0) {
    console.log(`${idx + 1}: You deposited ${move}`);
  } else {
    console.log(`${idx + 1}: You withdrawl ${Math.abs(move)}`);
  }
});
*/

/////////////////////////////////////////////////

/*
// Slice
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log('-------------');

// Splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['d', 'a', 'n', 'i', 'e', 'l'];

console.log(arr2.reverse());
console.log(arr2);

// Concat
let letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));

// At
let arr = [12, 34, 68];

console.log(arr[0]);
console.log(arr.at(0));

// getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
*/

/*
// !map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map((move, i) => {
  return move * eurToUsd;
});

// const movementsUSD = movements.map((move, i) => move * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsFor = [];
for (const mov of movements) {
  movementsFor.push(mov * eurToUsd);
}
console.log(movementsFor);

const movementsDescription = movements.map((move, i) => {
  if (move > 0) {
    return `${i + 1}: You deposited ${move}`;
  } else {
    return `${i + 1}: You withdrawl ${Math.abs(move)}`;
  }
});
console.log(movementsDescription);
*/

/*
// !filter
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((mov) => {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter((move) => move < 0);
console.log(withdrawals);
*/

//! Reduce
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const num = movements.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log(num);

console.log(Math.max(...movements));
console.log(Math.min(...movements));

console.log('------');

const max = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, 0);

console.log(max);
*/

// Coding challenge
// const calcAverageHumanAge = (ages) => {
//   const humanAge = ages.map((age) => {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });
//   const adults = humanAge.filter((age) => {
//     return age > 18;
//   });
//   console.log(humanAge);
//   console.log(adults);

//   const average = adults.reduce((acc, cur) => {
//     return acc + cur / adults.length;
//   }, 0);
//   return average;
// };

// const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(age1, age2);

// chaining
// const calcAverageHumanAge = (ages) => {
//   return ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age > 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// };

// const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(age1, age2);
// chaining

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const deposit = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

console.log(deposit);
*/

// Find method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const found = movements.find((mov) => mov > 0);
// console.log(found);

// console.log(accounts);

// const account = accounts.find((acc) => acc.username === 'ss');
// console.log(account);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.includes(3000));

// console.log(movements.some((mov) => mov > 0));
// console.log(movements.every((mov) => mov > 0));

/*
// !flat vs flatMap
const arr = [[1, 2], 3, 4, [5, 6]];
console.log(arr.flat());

const arrDeep = [[1, 2, [3, 4, [5, 6]]], 7];
console.log(arrDeep.flat(3));

const movementsArr = accounts.map((mov) => mov.movements);
console.log(movementsArr);

const moves = movementsArr.flat();
console.log(moves);

const overAllBalance = moves.reduce((acc, cur) => acc + cur, 0);
console.log(overAllBalance);

// const overAllBalance2 = accounts
//   .map((mov) => mov.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);
const overAllBalance2 = accounts
  .flatMap((mov) => mov.movements)
  .reduce((acc, cur) => acc + cur, 0);

console.log(overAllBalance2);
*/

// !Sorting Arrays
/*
const arr = ['Bob', 'Ann', 'Tom', 'Ravshan'];
console.log(arr);
console.log(arr.sort());
console.log(arr);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort());

movements.sort((a, b) => {
  if (a < b) return -1;
});

console.log(movements.sort((a, b) => a - b));
*/

// Array.from
/*
const arr = [1, 2, 3, 4, 5];
console.log([1, 2, 3, 4, 5]);
console.log(new Array(1, 2, 3, 4, 5));

const x = new Array(5);
x.fill(1, 2, 4);
console.log(x);

const y = Array.from({ length: 6 }, (_, i) => i + 1);

console.log(y);
*/

/*
// 1.
const movementsOne = accounts
  .map((mov) => mov.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(movementsOne);

// 2
const movementsTwo = accounts
  .flatMap((mov) => mov.movements)
  .filter((mov) => mov >= 1000).length;

console.log(movementsTwo);

// 3
const movementsThree = accounts
  .flatMap((mov) => mov.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(movementsThree);

//    1.THIS is a nice title => This Is a Nice Title
//    2.this is an interesting good topic => This Is an Interesting Good Topic
//    3.and IT is the OLD furniture => and It Is the Old Furniture

const four = (title) => {
  const exceptions = ['a', 'the', 'an', 'with', 'and', 'in', 'on'];

  const convertWord = title
    .toLowerCase()
    .split(' ')
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return convertWord;
};

console.log(four('THIS is a nice title'));
console.log(four('this is an interesting good topic'));
console.log(four('and IT is the OLD furniture'));
*/

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach((dog) => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3
const ownersEatToMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatToMuch);

const ownersEatToLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatToLittle);

// 4
console.log(`${ownersEatToMuch.join(' and ')}'s dogs are eating too much`);
console.log(`${ownersEatToLittle.join(' and ')}'s dogs are eating too little`);

// 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6
console.log(
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7
console.log(
  dogs.filter(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 8
const sortedDogsArray = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogsArray);
*/

/*
console.log(12 === 12.0);
console.log(0.2 + 0.1);
console.log(0.2 + 0.1 === 0.3);

console.log(Number('12'));
console.log(+'12');

console.log(Number.parseInt('123mn'));
console.log(Number.parseInt('123.45'));

console.log(Number.parseFloat('123.45mnb'));
// console.log(Number.parseFloat('    123.45mnb    '));

// isNaN
console.log(+'123mn');
console.log(isNaN('123'));

console.log(13 / 0); // Infinity

console.log(Number.isFinite('124'));
console.log(Number.isFinite('124mn'));
console.log(Number.isFinite(124));
*/

// Math
/*
console.log(Math.sqrt(64));
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(1, 5, 7, 10, 45, 23));
console.log(Math.min(1, 5, 7, 10, 45, 23));

console.log(Math.PI);

console.log(Math.trunc(Math.random() * 5 + 1));

// Rounding
console.log(Math.trunc(1.232323231));

console.log(Math.round(2.4));
console.log(Math.round(2.6));

console.log(Math.ceil(1.1));
console.log(Math.ceil(1.9));

console.log(Math.floor(1.1));
console.log(Math.floor(1.9));

// Rounding Fixed
console.log((1.1).toFixed(5));
console.log((1.1).toFixed(5));
console.log(+(4.34353425345).toFixed(2));

console.log((3.58355).toFixed(4));
*/

/*
console.log(5 % 2);
console.log(5 / 2);

const number = 344_560_120;
console.log(number);

console.log(Number.MAX_SAFE_INTEGER);
console.log(234123412349018239408123941230n);
*/

/*
const now = new Date();
console.log(now);

console.log(new Date('2024-04-23 12:30:34'));
console.log(new Date('April 30 2013'));

console.log(new Date('2024-04-16T23:56:12'));
console.log(new Date(2024, 3, 23, 8, 12, 30));

console.log(new Date(0));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth() + 1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMinutes());
console.log(date.getTime());
console.log(new Date(1713242056900));
*/

// const calcPassedDays = (day1, day2) => {
//   return Math.abs((day1 - day2) / (1000 * 60 * 60 * 24));
// };

// const days = sumDates(new Date(2024, 10, 29), new Date(2024, 10, 9));
// console.log(days);

/*
const num = 34567213.98;

const options = {
  style: 'currency',
  currency: 'eur',
};

console.log(new Intl.NumberFormat('en-GB', options).format(num));
*/

/*
const ingredinets = ['apple', 'orange'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza🍕 with ${ing1} and ${ing2}`);
  },
  2000,
  ...ingredinets
);

if (ingredinets.includes('qalampir')) {
  clearTimeout(pizzaTimer);
}
*/

/*
const stop = setInterval(() => {
  const now = new Date();
  return console.log(now);
}, 5000);

setTimeout(() => {
  clearInterval(stop);
}, 20000);
*/
