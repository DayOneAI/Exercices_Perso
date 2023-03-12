'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // vidage contenu
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(el => el.at(0))
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let tab = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(tab.reverse(3));
// console.log(tab);
// tab.splice(-1);
// console.log(tab);
// console.log(tab.slice(-2));
// console.log(tab.slice(-1));
// console.log(tab.slice());

// concat
let tab1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let tab2 = ['h', 'i', 'j', 'k', 'l'];
const tab3 = tab1.concat(tab2);
// console.log(tab3);
// console.log(tab1);
// console.log(tab2);

// join
// console.log(tab3.join(' - '));
// console.log(tab1);
// console.log(tab2);

// at
const tab4 = [3, 65, 99];
// console.log(tab4.at(1));
// console.log(tab4[1]);
// console.log(tab4.at(-1));
// console.log('Bamba'.at(0));

// forEach
const tests = [10, -50, 4800, 2800, -7650, 5030, 960, 698];

tests.forEach(element => {
  //console.log(element);
});

movements.forEach(mov => {
  if (mov > 0) {
    //console.log(`You deposited ${mov}`);
  } else {
    //console.log(`You withdraw ${Math.abs(mov)}`);
  }
});

movements.forEach((mov, i, array) => {
  if (mov > 0) {
    //console.log(`Test ${i + 1} : Bravo tu as gagné ${mov} point(s)`);
  } else {
    //console.log(`Test ${i + 1} : Oups, tu as perdu ${Math.abs(mov)} point(s)`);
  }
});

const crypto = new Map([
  ['BTC', 'Bitcoin'],
  ['ETH', 'Etherium'],
  ['USDT', 'Tether USD'],
  ['BNB', 'Binance Coin'],
]);

crypto.forEach((value, key, map) => {
  //console.log(`${key}: ${value}`);
});

const cryptoUnique = new Set(['BTC', 'BTC', 'BNB', 'USDT', 'USDT', 'ETH']);
// console.log(cryptoUnique);
cryptoUnique.forEach((value, _, map) => {
  //console.log(`${value}: ${value}`);
});

////////////// Challenge ******************

const data1Julia = [3, 5, 2, 12, 7];
const data2Julia = [9, 16, 6, 8, 3];

const data1Kate = [4, 1, 15, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

const dogsJulia = [...data1Julia, ...data2Julia];
const dogsKate = [...data1Kate, ...data2Kate];

//console.log(dogsJulia, dogsKate);

const checkDogs = function (arr1, array2) {
  const arr1Copy = arr1.slice();
  arr1Copy.splice(-1);
  arr1Copy.shift(0);
  //console.log(arr1Copy);

  const dogs = [...arr1Copy, ...array2];

  dogs.forEach((i, dog) => {
    const dogCategory =
      dog > 5 ? `an adult, and is ${dog} years old` : `still a puppy`;
    console.log(`Dog numéro ${i + 1} is ${dogCategory}`);
  });
};

//checkDogs(dogsJulia, dogsKate);

////////////// MAP METHOD ******************

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const tabNew = tab4.map(function (tab) {
//   return tab * 10;
// });

// console.log(tabNew);

movements.forEach((mov, i, array) => {
  if (mov > 0) {
    //console.log(`Test ${i + 1} : Bravo tu as gagné ${mov} point(s)`);
  } else {
    //console.log(`Test ${i + 1} : Oups, tu as perdu ${Math.abs(mov)} point(s)`);
  }
});

// const movementsDescriptions = movements.map((mov, i) => {
//   const result =
//     mov > 0
//       ? `Test ${i + 1} : Bravo tu as gagné ${mov} point(s)`
//       : `Test ${i + 1} : Oups, tu as perdu ${Math.abs(mov)} point(s)`;
//   return result;
// });

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

const testDescriptions = tests.map(
  (test, i) =>
    `Movement ${i + 1} : You ${test > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      test
    )}`
);
//console.log(testDescriptions);

////////////// FILTER METHOD ******************

const deposits = tests.filter(mov => mov > 0);
// console.log(deposits);

const balance = tests.reduce((acc, cur, i, arr) => {
  //console.log(`Iteration ${i + 1} : ${acc}`);
  return acc + cur;
}, 0);

//console.log(balance);

////////////// SPRED OPERATOR ******************
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
//console.log(numbersCombined);

////////////// Rest Pattern and Parameters ******************

const tabl = [1, 2, ...[3, 4]]; // => SPREAD, car c'est à droite du signe "="

const [a, b, ...others] = [1, 2, 3, 4, 5]; // => REST , car c'est à gauche du signe "="

// console.log(a, b, others);

////////////// SHORT Circuiting ******************

const numGuests = 25;
const guest1 = numGuests ? numGuests : 10; // mode ternaire
//console.log(guest1);

const guest2 = numGuests || 10; // mode SHORT Circuiting
//onsole.log(guest2);

//console.log(0 && 'Bamba');
//console.log(7 && 'Bamba');

let x = (1 && 2) ?? 3;
// console.log(x);

////////////// Logical Assignment Operators ******************

const rest1 = {
  name: 'Paradis',
  numGuests: 30,
};

const rest2 = {
  name: 'Mangue',
  owner: 'Fatou FALL',
};

rest1.numGuests = rest1.numGuests || 10; // retourne valeur de numGuests de l'objet rest1 s'il existe, si non la valeur de 10
rest1.numGuests ||= 10; // en plus condensé
rest2.numGuests = rest1.numGuests || 10; // retourne valeur de numGuests de l'objet rest1 s'il existe, si non la valeur de 10
rest2.numGuests ||= 10; // en plus condensé

//console.log(rest1);
//console.log(rest2);

let user = {
  name: 'John',
  age: 30,
};

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

// tasks = {
//   takk: 'Lecture',
//   date: "Aujourd'hui",
//   repeat: true,
// };

//const tests = [10, -50, 4800, 2800, -7650, 5030, 960, 698];
const totalDepositsUSD = tests
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
//console.log(totalDepositsUSD);

// -------------------------FIND-------------
const found = tests.find(element => element > 100);
// console.log(found);

const isLargeNumber = element => element > 13;
console.log(tests.findIndex(isLargeNumber));
