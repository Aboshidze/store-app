// Массив цветов
const colors = [
  { title: "Красный", hex: "#E32636" },
  { title: "Желтый", hex: "#FDE910" },
  { title: "Зеленый", hex: "#138808" },
  { title: "Синий", hex: "#1560BD" },
];

// DOM-элементы
const figureContainer = document.getElementById("figureContainer");
const circleBtn = document.getElementById("circleBtn");
const squareBtn = document.getElementById("squareBtn");
const clearBtn = document.getElementById("clearBtn");
const colorButtons = document.getElementById("colorButtons");

let currentFigure = null;

// Функция создания фигуры
function createFigure(type) {
  figureContainer.innerHTML = "";

  const figure = document.createElement("div");
  figure.classList.add("figure");

  if (type === "circle") {
    figure.classList.add("circle");
  }

  figureContainer.appendChild(figure);
  currentFigure = figure;
}

// Обработчики кнопок фигур
circleBtn.addEventListener("click", () => {
  createFigure("circle");
});

squareBtn.addEventListener("click", () => {
  createFigure("square");
});

// Создание кнопок цветов
colors.forEach((color) => {
  const btn = document.createElement("button");
  btn.textContent = color.title;
  btn.style.backgroundColor = color.hex;

  btn.addEventListener("click", () => {
    if (!currentFigure) {
      alert("Сначала выберите фигуру!");
      return;
    }
    currentFigure.style.backgroundColor = color.hex;
  });

  colorButtons.appendChild(btn);
});

// Кнопка очистки
clearBtn.addEventListener("click", () => {
  figureContainer.innerHTML = "";
  currentFigure = null;
});
