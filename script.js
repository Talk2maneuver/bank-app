'use strict';
//let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE method does not mutating array
// console.log(arr.slice(2));
// console.log(arr.slice(3));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(1, -2));
// console.log(arr);

// //SPLICE method mutating array

// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

//Reverse method mutate array also
// const arr2 = ['k', 'j', 'i', 'h', 'g', 'f'];
// console.log([arr2.reverse()]);
// console.log(arr2);

// //concate Method does not mutate variable
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

//Join method
//console.log(letters.join('-'));

//Push method
//console.log(letters.push());

//At method
// const arr = [23, 24, 25, 30];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(2)[0]);
// console.log(arr.at(-1));

// //getting character from the string
// console.log('Hassan'.at(0));
// console.log('Hassan'.at(-1));

// ------------------------------For of using Array
//const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];
//for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} you deposited  ${movement}`);
//   } else console.log(`Movement ${i + 1} you withdraw ${Math.abs(movement)} `);
// }

//console.log('===============forEach================');
// //----------------------------------forEach using Array
//const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`you deposited  ${movement}`);
//   } else console.log(`you withdraw ${Math.abs(movement)} `);
// });
//---------------------------forEach with index element
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`movement: ${(i + 1)} you deposited  ${mov}`);
//   } else console.log(`movement: ${(i + 1)} you withdraw ${Math.abs(mov)} `);
// });

//---------------------- forEach using Map
// const currencies = new Map([
//   ['USD', 'United State dollar'],
//   ['EUR', 'EURO'],
//   ['GPB', 'pounds starling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //--------------------forEach using Set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'GBP', 'USD']);
// currenciesUnique.forEach(function (value, _key, map) {
//   console.log(`${_key}: ${value}`);
// });

// ----------------------------challenge Number one -------------------
// test datum
// const julia = [2, 4, 1, 8, 3];
// const kate = [1, 2, 5, 3, 2];

// const testJulia1 = [3, 5, 2, 12, 7];
// const testKate1 = [4, 1, 15, 8, 3];

// const testJulia2 = [9, 16, 6, 8, 3];
// const testKate2 = [10, 5, 6, 1, 4];

// const checkDog = function (dogsJulia, dogsKate) {
//   const remCat = dogsJulia.splice(1,3 );
//   // const remCat = dogsJulia.splice(1,-2 );
//   //  console.log(remCat);
//   // console.log(dogsJulia, dogKate);
//   const corrData = remCat.concat(dogsKate);
//   // console.log(corrData);
//   corrData.forEach(function (age, i) {
//     if (age > 2) {
//       console.log(`Dogs number ${i + 1} is an adult with year ${age}`);
//     } else {
//       console.log(`Dogs number ${i + 1} is still a puppy`);
//     }

//     //another way of doing it.
//     // let val = age > 2 ? 'adult' : 'puppy';
//     // console.log(`Dogs number ${i + 1} is an ${val} with year ${age}`);
//   });
//   console.log('===========end of the above========');
// };

// checkDog(julia, kate);
//  checkDog(testJulia1, testKate1);
// checkDog(testJulia2, testKate2);

// /----------------------------challenge Number two -------------------
// //test datum
// const julia = [2, 4, 1, 8, 3];
// const kate = [1, 2, 5, 3, 2];

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAvrHumanAge = function (dogsJulia, dogsKate) {
//   const joinAge = dogsJulia.concat(dogsKate);
//   console.log(joinAge);

//   const humanAge = joinAge.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAge);

//   const filterAge = humanAge.filter((age) => age >= 18);
//   console.log(filterAge);

//   // const calAv = filterAge.reduce((sum, cur) => sum + cur, 0) / filterAge.length;

//   //advance way
//   const calAv =
//     filterAge.reduce((sum, cur, i, arr) => sum + cur / arr.length, 0) /
//     filterAge.length;

//   console.log(calAv);
// };

// //calcAvrHumanAge(julia, kate);
// calcAvrHumanAge(data1, data2);

// ----------------------------challenge Number three -------------------
//shorthand using chaining oprator or method
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAvrHumanAge = (data) =>
//   data
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((sum, cur, i, arr) => sum + cur / arr.length, 0);

// const output1 = calcAvrHumanAge(data1);
// const output2 = calcAvrHumanAge(data2);
// console.log(output1, output2);

///new problem
//const toNaira = 1.1;
// const movements = [200, 450, -400, 3000, 650, -130, 70, 1300, -890];

// const totalDeposited = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => mov * toNaira)
//   .reduce((acc, mov) => acc + mov);
// console.log(totalDeposited);

//-------------Transforming data using Map, Filter and Reduce.
//------------------------Map function-----------------------
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const myMapFunction = myNumbers.map(function (num) {
//   return num + 1;
// });
// console.log(myNumbers);
// console.log(myMapFunction);

// const moveNumbers = [];
// for (const val of myNumbers) {
//   moveNumbers.push(val + 1);
// }
// console.log(moveNumbers);

//----from forEach to Map movements
// const movements = [200, 450, -400, 3000, 650, -130, 70, 1300, -890];
// const storeMovements = movements.map(function (mov, i, arr) {
//   if (mov > 0) {
//     return `movement: ${i + 1} you deposited  ${mov}`;
//   } else return `movement: ${i + 1} you withdraw ${Math.abs(mov)} `;
// });
//console.log(storeMovements);

//----from forEach to Map movements advance way
// const movements = [200, 450, -400, 3000, 650, -130, 70, 1300, -890];
// const storeMovements = movements.map(
//   (mov, i) =>
//     `movement: ${i + 1} you ${mov > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(
//       mov
//     )}`
// );
// console.log(storeMovements);

//------------------------Using Filter

// const movements = [100, -222, -1000, 2500, -555, 9000];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const withdraw = movements.filter((mov) => mov < 0);
// console.log(withdraw);

//-----------------reduce function
// const movements = [100, -222, -1000, 2500, -555, 9000];
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// -------finding maximum value using reduce
// const movements = [100, -222, -1000, 2500, -555, 9000];
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

//--------------------using find
//const findIn = movements.find((mov) => mov < 0);
// console.log(findIn);

// console.log(accounts);
// const account = accounts.find((acc) => acc.owner === 'Hassan Muhammad');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Musa Gambo') console.log(acc);
// }

// const movements = [100, 200, -300, 1000];

// //include most use for checking Equality
// const inc = movements.includes(-300);
// console.log(inc);

// //some most use for checking condition
// const anyDoposits = movements.some((mov) => mov > 5100);
// console.log(anyDoposits);

// //--------------------------flat method
// const nested = [1, 2, [2, 5, 7, 3], [2, 1, 9]];
// console.log(nested.flat());

// const deepNested = [1, [8, 2, [1, 6]], [2, 5, 7, 3], [2, 1, 9]];
// console.log(deepNested.flat(3));

// //another flat example
// const accountsMovements = accounts.map((acc) => acc.movements);
// console.log(accountsMovements);

// const allMovements = accountsMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((sum, cur) => sum + cur, 0);
// console.log(overallBalance);

// //shorthand or chaining
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(overallBalance);

// //----------------------------flatMap
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(overallBalance2);

// //Base 10 - 0 to 9.
// //Base 2  - 0  1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // conversion or coercion
// console.log(Number('23'));
// console.log(+'23');

// //parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23'));

// console.log(Number.parseFloat('2.22rem'));
// console.log(parseFloat('2.234'));

// //check if value is NaN
// console.log(Number.isNaN(+'2x'));
// console.log(Number.isNaN('2x'));
// console.log(Number.isNaN(20));

// //Best way of checking if its a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(20 / 0));

//---------------Math object
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.sqrt(8));

// console.log(Math.max(24, 50, 12, 16, 23));
// console.log(Math.max(24, '50', 12, 16, 23));
// console.log(Math.max(24, '50px', 12, 16, 23));
// console.log(Math.min(24, '50', 12, 16, 23));

// console.log(Math.pow(2, 3));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Number.parseInt(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);

// //function to have random number that is always stayed btw min and max
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// //---------------- Rounding Integers
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// //---------------Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log((+'2.345').toFixed(2));

//BigInt
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(64926912719724940249472081610017374n);
// console.log(BigInt(539283026387));

// //Operation
// console.log(10000n + 10000n);
// console.log(620964815263610639831610638619346n * 10000000n);

// const huge = 2602641693698369326916320n;
// const num = 23;
// console.log(huge * BigInt(num));

// //Exeptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');
// console.log(huge + ' is reallybig!!! ');

// //--------------------Remainder operator
// console.log(5 % 2);
// console.log(6 % 2);
// console.log(10 % 3);
// console.log(15 % 2);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(2));
// console.log(isEven(8));
// console.log(isEven(51));
// console.log(isEven(1427));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       //0,2,4,6,8.....nterm
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       //0,3,6,9.....nterm
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

//creating a date object
// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2024 18:15:41'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.toDateString());
// console.log(future.toTimeString());

// //Time Stamp
// console.log(future.getTime());
// console.log(new Date(2142285785000));

// console.log(Date.now());
// console.log(new Date(1737471585073));

// future.setFullYear(2040);
// console.log(future);

//calculating date betwen or that passed
// const future = new Date(2037, 10, 19);
// console.log(Number(future));
// console.log(+future);

// const calcDaysPasssed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days = calcDaysPasssed(new Date(2037, 10, 19), new Date(2037, 10, 10));
// console.log(days);

// for more on dates you have to visit moments.js

//internationalisation or formating of Numbers

// const num = 358_156_391.313;
// const options = {
//   style: 'currency',
//   currency: 'EUR',
//   // unit: 'percent',
//   //unit: 'mile-per-hour',
//   // useGrouping: false,
// };
// //console.log('US  ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany  ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria  ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
//--------------------------------setTimeout
// const ingredients = ['olive', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`hey take your pizza with ${ing1} and ${ing2}`),
//   5000,
//   ...ingredients
// );
// console.log('waiting...');
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//-----------------------------setInterval
// setInterval(function () {
//   const present = new Date();
//   //console.log(present);
// }, 1000);

//Time to close the page
// const countDown = function () {
//   const targetDay = new Date('2025-01-27');
//   const now = new Date();
//   const secondLeft = Math.floor((targetDay - now) / 1000);

//   //to calculate days, hours, minutes, seconds
//   const days = Math.floor(secondLeft / (60 * 60 * 24));
//   const hours = Math.floor(((secondLeft % (60 * 60 * 24)) / 60) * 60);
//   const minutes = Math.floor((secondLeft % (60 * 60 * 24)) / 60);
//   const remainingSeconds = secondLeft % 60;

//   // document.querySelector(
//   //   '.count-down'
//   // ).textContent = `you will logout in the following second  ${remainingSeconds}s`;

//   // remainingSeconds === 0 ? (containerApp.style.opacity = 0) : remainingSeconds;
// };

// //setT

//Data

const account1 = {
  owner: 'Hassan Muhammad',
  movements: [200, 450, -400, 3000, 650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    '2024-02-01T21:21:17.178Z',
    '2024-12-23T21:31:15.168Z',
    '2025-02-01T21:21:16.468Z',
    '2025-05-14T20:41:29.333Z',
    '2025-02-13T22:31:16.619Z',
    '2025-02-16T22:11:11.719Z',
    '2025-01-31T21:51:12.689Z',
    '2025-05-17T20:21:21.666Z',
  ],
  currency: 'USD',
  locale: 'ng-NG',
};

const account2 = {
  owner: 'Ahmad Sheik',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2024-02-01T21:21:17.178Z',
    '2024-12-23T21:31:15.168Z',
    '2025-02-01T21:21:16.468Z',
    '2025-05-14T20:41:29.333Z',
    '2025-02-13T22:31:16.619Z',
    '2025-02-16T22:11:11.719Z',
    '2025-01-31T21:51:12.689Z',
    '2025-05-17T20:21:21.666Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Musa Gambo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2024-11-18T21:31:17.178Z',
    '2024-12-23T21:31:15.168Z',
    '2025-01-11T21:21:16.468Z',
    '2025-05-14T20:41:29.333Z',
    '2025-02-13T22:31:16.619Z',
    '2025-03-16T22:11:11.719Z',
    '2025-04-18T21:51:12.689Z',
    '2025-05-17T20:21:21.666Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Muhammad Shehu',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2024-11-18T21:31:17.178Z',
    '2024-12-23T21:31:15.168Z',
    '2025-01-11T21:21:16.468Z',
    '2025-05-14T20:41:29.333Z',
    '2025-02-13T22:31:16.619Z',
    '2025-03-16T22:11:11.719Z',
    '2025-04-18T21:51:12.689Z',
    '2025-05-17T20:21:21.666Z',
  ],
  currency: 'Real',
  locale: 'ar-SY',
};

const accounts = [account1, account2, account3, account4];

//Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterst = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const bntLogin = document.querySelector('.login__btn');
const bntTransfer = document.querySelector('.form__btn--transfer');
const bntLoan = document.querySelector('.form__btn--loan');
const bntClose = document.querySelector('.form__btn--close');
const bntSort = document.querySelector('.form__btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginpin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--use');
const inputClosePin = document.querySelector('.form__input--user');

////lectures
// const currencies = new Map([
//   ['USD', 'United State dollar'],
//   ['EUR', 'EURO'],
//   ['GPB', 'pounds starling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

/////////////////////////////////////////////////////////////////////////////////////////////
//Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
    //above is for internationalisation while below for
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
  }
};

// function thet format all the currencies in the app
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    let type = mov;
    if (mov > 0) {
      type = 'deposit';
    } else {
      type = 'withdrawal';
    }

    //calling and changing date format
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    //calling the currency formater function
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type} ">${i + 1} ${type}
    </div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>`;
    //${mov.toFixed(2)}₦
    //below  insert / link our html to the script at movements section
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(acc);

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
  // `${acc.balance.toFixed(2)} ₦`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  //  `${incomes.toFixed(2)}₦`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = formatCur(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  );
  //  `${Math.abs(outcomes).toFixed(2)}₦`;

  const intrest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterst.textContent = formatCur(intrest, acc.locale, acc.currency);
  //  `${intrest.toFixed(2)}₦`;
};

const craeteUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((names) => names[0])
      .join('');
    // return UsrNm;
  });
};
craeteUserNames(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

//------------timer function
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    //in each call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 second, stop the toimer and log out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //decrease 1s
    time--;
  };
  // set time to 5 minute
  let time = 120;
  //calll the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
// startLogOutTimer();
//////////////////////////////////////////////////////////
//event handlers
//----------buttton login starts from here
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

bntLogin.addEventListener('click', function (e) {
  //prevent from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginpin.value)) {
    //display welcome back mseesage
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Exparimental of date internationalisation.
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    //if its comming from browser
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // //create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    //clear input field
    inputLoginUsername.value = inputLoginpin.value = '';

    inputLoginpin.blur();

    //clearing timer from another account if exist
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    //update UI
    updateUI(currentAccount);
  }
});

//transfer starts from here
bntTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, recieverAcc);

  //validating transfer amount and account
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //add taransfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    //deleting the text after clicking
    inputTransferTo.value = inputTransferAmount.value = '';

    //reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();

    //update UI
    updateUI(currentAccount);
  }
});

//btn loan starts from here
bntLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      //add movements
      currentAccount.movements.push(amount);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      //update UI
      updateUI(currentAccount);

      //reset the timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

//btn close starts from here

bntClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log('this account deleted');
    // console.log(index);

    //deleting account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

// let sorted = false;
bntSort.addEventListener('click', function (e) {
  e.preventDefault();
  // displayMovements(currentAccount.movements, !sorted);
  // sorted = !sorted;

  //below is my sorting and it works
  const sorting = accounts.map((acc) => acc.movements.sort((a, b) => a - b));
  updateUI(currentAccount);
});
