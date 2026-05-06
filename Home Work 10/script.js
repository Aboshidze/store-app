// 1. Функция calculateAveragePages принимает массив книг
// и возвращает среднее количество страниц
function calculateAveragePages(books) {
  let total = 0;
  for (let book of books) {
    total += book.pages;
  }
  return total / books.length;
}

// 2. Функция repeatString принимает строку и число n
// и возвращает строку, повторённую n раз
function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

// 3. Функция calculateAverage принимает массив чисел
// и возвращает их среднее значение
function calculateAverage(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

// 4. Функция countEvenNumbers принимает массив чисел
// и возвращает массив чётных чисел
function countEvenNumbers(numbers) {
  let even = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}

// Проверка работы функций
console.log(repeatString("hello", 3)); // hellohellohello
console.log(calculateAverage([10, 20, 30, 40, 50, 60])); // 35
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
