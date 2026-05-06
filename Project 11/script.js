// ===== Модальное окно =====
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// ===== Валидация формы =====
const form = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailInput.value.includes("@")) {
    errorMsg.textContent = "Введите корректный email";
    return;
  }

  if (passwordInput.value.length < 6) {
    errorMsg.textContent = "Пароль должен быть не менее 6 символов";
    return;
  }

  errorMsg.textContent = "";
  alert("Форма успешно отправлена!");
  form.reset();
});

// ===== Динамическое добавление задач =====
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
