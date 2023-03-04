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
