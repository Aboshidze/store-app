document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("orderBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  const form = document.getElementById("orderForm");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const successMessage = document.getElementById("successMessage");

  // открыть модалку
  orderBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  // закрыть по крестику
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // закрыть по клику на фон
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });

  // отправка формы
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value.trim() === "" || phoneInput.value.trim() === "") {
      alert("Заполните имя и телефон");
      return;
    }

    successMessage.style.display = "block";

    nameInput.value = "";
    phoneInput.value = "";

    setTimeout(() => {
      modal.classList.remove("show");
      successMessage.style.display = "none";
    }, 2000);
  });

  console.log("JS работает ✅");
});
