// Задание 1
let firstName = "Султан";
let lastName = "Амангельдиев";
let age = 30;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

// Задание 2
let city = "Астана";
console.log("Я родом из города " + city);

// Задание 3
let password = "qwerty123";
let hasAccess = password !== "";

console.log(password);
console.log(hasAccess);

// Задание 4
let isMember = false;
let isMemberString = isMember.toString();

console.log(isMemberString);
console.log(typeof isMemberString);

// Задание 5
let cartItems = 0;
let isCartNotEmpty = Boolean(cartItems);

console.log(isCartNotEmpty);

// Задание 6
let averageScore = 89.75695;
averageScore = averageScore.toFixed(1);

console.log(averageScore);

// Задание 7
let greetingMessage = "      Приветствуем вас в мире программирования!        ";

let trimmedMessage = greetingMessage.trim();
console.log(trimmedMessage);

let upperMessage = trimmedMessage.toUpperCase();
console.log(upperMessage);

let containsWord = trimmedMessage.includes("программирования");
console.log(containsWord);

// Задание 8
let userAge = prompt("Введите ваш возраст:");

if (userAge === "") {
  alert("Необходимо ввести данные");
} else if (isNaN(userAge)) {
  alert("Недопустимый формат");
} else if (Number(userAge) < 18) {
  alert("Доступ ограничен");
} else {
  alert("Добро пожаловать!");
}

// Задание 9
let secretNumber = 7;
let userNumber = prompt("Введите число от 1 до 10:");

if (Number(userNumber) === secretNumber) {
  alert("Поздравляем! Вы угадали число 🎉");
} else if (Number(userNumber) > secretNumber) {
  alert("Число слишком велико");
} else if (Number(userNumber) < secretNumber) {
  alert("Число слишком мало");
}

// Задание 10
let timeOfDay = prompt("Введите время суток (утро, день, вечер):");

if (typeof timeOfDay !== "string" || timeOfDay.trim() === "") {
  alert("Ошибка: введены некорректные данные");
} else {
  timeOfDay = timeOfDay.toLowerCase();

  if (timeOfDay === "утро") {
    alert("Рекомендуем кофе ☕");
  } else if (timeOfDay === "день") {
    alert("Рекомендуем чай 🍵");
  } else if (timeOfDay === "вечер") {
    alert("Рекомендуем горячий шоколад 🍫");
  } else {
    alert("Неизвестное время суток");
  }
}
