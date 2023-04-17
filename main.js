/*2 завдання*/
console.log("dzavaha");

/*3 завдання*/
// Оголосити дві змінні
let x;
let y;
x = 10;
y = "Hello";

// Вивести значення змінних на екран
console.log(x);
console.log(y);


// Скопіювати значення однієї змінної в іншу
x = y;


// Вивести значення змінних на екран після копіювання
console.log(x);
console.log(y);

/*4 завдання*/
let myObject = {
  myСity: "Ivano-Frankivsk",
  myAge: 36,
  myValid: true,
  myUndefined: undefined ,
  myNull: null
};

/*5 завдання*/
const isAdult = confirm("You are 18 years old");
console.log(isAdult);
/*6 завдання*/

let firstName = 'Dzavaha';
let Name = 'Misha';
let group = 'JS Fundamentals 2023';
let birthYear = 1986;
let isMarried = true;
/*введення зміних в консоль*/
console.log(typeof group, group);
console.log(typeof birthYear, birthYear);
console.log(typeof isMarried, isMarried);
console.log(typeof firstName, firstName);
console.log(typeof Name, Name);
/*створення змінних*/

let age = 36;
age = null;

let myDay =8;
myDay = undefined;
/*введення типу в консоль*/

console.log(typeof age);
console.log(typeof undefined);
/*7 завдання*/
// Запросити від користувача дані за допомогою функції prompt()
const login = prompt("Please enter your login:");
const email = prompt("Please enter your email:");
const password = prompt("Please enter your password:");

// Вивести повідомлення з даними користувача
const message = "Dear User, your email is " + email + ", your password is " + password +", your login is " + login + ".";
alert(message);
/* 8 завдання*/
// Вираховуємо кількість секунд в годині
const secondsInHour = 60 * 60;

// Вираховуємо кількість секунд в добі
const secondsInDay = secondsInHour * 24;

// Вираховуємо кількість секунд в місяці
const secondsInMonth = secondsInDay * 30; // Припустимо, що місяць складається з 30 днів

// Виводимо результати за допомогою alert
alert(`Кількість секунд в годині: ${secondsInHour}\nКількість секунд в добі: ${secondsInDay}\nКількість секунд в місяці: ${secondsInMonth}`);
