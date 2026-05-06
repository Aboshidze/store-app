// Задание 1. Объект с prompt

const student = {
  name: prompt("Введите ваше имя:"),
  age: Number(prompt("Введите ваш возраст:")),
  subject: prompt("Введите предмет:"),
  grade: prompt("Введите оценку:"),
};

console.log("Исходные данные объекта:");
console.log(student);

student.age += 5;

console.log("Данные после увеличения возраста на 5 лет:");
console.log(student);

// Задание 2. Работа с массивом объектов

const movies = [
  {
    title: "Начало",
    director: "Кристофер Нолан",
    year: 2010,
    genre: "фантастика",
  },
  {
    title: "Форрест Гамп",
    director: "Роберт Земекис",
    year: 1994,
    genre: "драма",
  },
  {
    title: "Криминальное чтиво",
    director: "Квентин Тарантино",
    year: 1994,
    genre: "боевик",
  },
  {
    title: "Зеленая миля",
    director: "Фрэнк Дарабонт",
    year: 1999,
    genre: "триллер",
  },
  {
    title: "Жизнь прекрасна",
    director: "Роберто Бениньи",
    year: 1997,
    genre: "комедия/драма",
  },
];

// Выводим режиссёра второго фильма
console.log("Режиссёр второго фильма:");
console.log(movies[1].director);

// Выводим жанр четвёртого фильма
console.log("Жанр четвёртого фильма:");
console.log(movies[3].genre);

// Задание 3. Массив покупок

let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
console.log("Исходный список покупок:");
console.log(shoppingList);

shoppingList.unshift("апельсины");
console.log("После добавления товара в начало:");
console.log(shoppingList);

shoppingList.pop();
console.log("После удаления последнего товара:");
console.log(shoppingList);

shoppingList.splice(2, 1, "йогурт", "печенье");
console.log("После замены третьего элемента на два новых товара:");
console.log(shoppingList);

// Задание 4. Цикл while

const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`); // 253

// Задание 5. Массив книг и цикл for

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];

for (let i = 0; i < books.length; i++) {
  console.log(`Книга: ${books[i].title}`);
  console.log(`Автор: ${books[i].author}`);
  console.log(`Количество страниц: ${books[i].numberOfPages}`);
  console.log(`Жанр: ${books[i].genre}`);
  console.log("Награды:");

  // Вложенный цикл для наград
  for (let j = 0; j < books[i].awards.length; j++) {
    console.log(`- ${books[i].awards[j]}`);
  }

  console.log("-------------------------");
}
