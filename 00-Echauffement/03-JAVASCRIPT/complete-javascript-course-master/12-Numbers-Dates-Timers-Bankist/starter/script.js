'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-03-14T17:01:17.194Z',
    '2023-03-17T23:36:17.929Z',
    '2023-03-18T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcduree = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const dayPassed = calcduree(new Date(), date);
  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimeting API
// const now = new Date();
// labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current Date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      //month: '2-digit',
      //month: 'long',
      year: 'numeric',
      //weekday: 'long',
    };

    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toDateString());
    receiverAcc.movementsDates.push(new Date().toDateString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toDateString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(0.1 + 0.2);

//console.log(+'23');

// console.log(Number.parseInt('40px'));

// console.log(Number.parseFloat('65.36px'));

// console.log(Number.isNaN(65));
// console.log(Number.isNaN('65'));
// console.log(Number.isNaN(+'65'));
// console.log(Number.isNaN(+'65X'));

// console.log(Number.isFinite(65));
// console.log(Number.isFinite('65'));
// console.log(Number.isFinite(+'65'));
// console.log(Number.isFinite(+'65X'));
// console.log(Number.isFinite(45 / 0));

// console.log(Math.sqrt(36));
// console.log(36 ** (1 / 2));

// console.log(Math.max(65, 98, 49, 36));
// console.log(Math.max(65, '98', 49, 36));
// console.log(Math.max(65, 98, '49px', 36));
// console.log(Math.max(65, '98px', 49, 36));

// console.log(Math.PI * Number.parseFloat('15px') ** 2);

//console.log(Math.trunc(Math.random() * 6));

const randomInt = (min, max) => Math.trunc(Math.random()(max - min) + 1);

// console.log((4.6).toFixed(0));
// console.log((4.6).toFixed(3));
// console.log((4.698).toFixed(2));
// console.log((4.626).toFixed(1));
// console.log(+(4.626).toFixed(1));

// const isPair = n => n % 2 === 0;
// console.log(isPair(5));
// console.log(isPair(10));

// .forEach(function (row, i) {
//   // 0, 2, 4, 6
//   if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   // 0, 3, 6, 9
//   if (i % 3 === 0) row.style.backgroundColor = 'blue';
// });

const dim = 768_989_568_105;
// console.log(dim);

// console.log(Number('56_988'));
// console.log(parseInt('526_000'));
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(6989646688468768648646467);
// console.log(6989646688468768648646467n);
// console.log(BigInt(6989646688468768648646467));
// console.log(6989646688468768648646467n + 150);
// console.log(6989646688468768648646467n + 150n);
// console.log(150n > 15);
// console.log(150n > 150);
// console.log(150n >= 150);
// console.log(Math.sqrt(16n)); // resultat => error
//console.log(10n / 3n);

//------------------ DATE
// const now = new Date();
// console.log(now);
// console.log(new Date('Mar 5 2023'));
// console.log(new Date('December 24, 2032'));
// console.log(new Date(2045, 1, 20, 5, 6));
// console.log(new Date(0));
// console.log(new Date(5 * 24 * 60 * 60 * 1000));

// Working with dates

const dateImportante = new Date(2045, 1, 20, 5, 6, 33);
// console.log(dateImportante);
// console.log(dateImportante.getFullYear());
// console.log(dateImportante.getYear());
// console.log(dateImportante.getMonth());
// console.log(dateImportante.getDate());
// console.log(dateImportante.getDay());
// console.log(dateImportante.toISOString());
// console.log(dateImportante.getTime());
// console.log(new Date(2371176393000));
// console.log(Date.now());
// console.log(dateImportante.setFullYear(2043));

// const calcduree = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const day1 = calcduree(new Date(2050, 4, 3), new Date(2050, 4, 20));

// console.log(day1);

// ----------------------------

//const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   //month: 'numeric',
//   //month: '2-digit',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };
// // console.log(new Intl.DateTimeFormat('fr', options).format(now));
// // console.log(new Intl.DateTimeFormat('en-GB').format(now));
// // console.log(new Intl.DateTimeFormat('ar-SY').format(now));

// const locale = navigator.language;
// console.log(new Intl.DateTimeFormat(locale, options).format(now));

// -------------------------------
const nbre = 9842464959.684;
// console.log('US: ', new Intl.NumberFormat('en-US').format(nbre));
// console.log('Germany: ', new Intl.NumberFormat('de-DE').format(nbre));
// console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(nbre));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(nbre)
// );

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(nbre));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(nbre));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(nbre));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(nbre)
);
