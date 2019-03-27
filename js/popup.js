var link = document.querySelector("button-contact-us");

var popup = document.querySelector(".modal-mail");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=mail]");
var textarea = popup.querySelector("[name=textarea]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus();
  }

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !mail.value || !textarea.value) {
      evt.preventDefault();
      console.log("Нужно ввести Имя, адрес почты и текст письма");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
          }
        }
      });
