var link = document.querySelector(".contacts__link");
var overlay = document.querySelector(".overlay");

var wrPopup = document.querySelector(".modal-write");
var closeWr = wrPopup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

closeWr.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (wrPopup.classList.contains("modal-show")) {
      wrPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});

var map = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".modal-map");
var closeMap = mapPopup.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});

var order = document.querySelector(".btn--buy");
var orderPopup = document.querySelector(".modal-order");
var closeOrder = orderPopup.querySelector(".modal-close");

order.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

closeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (orderPopup.classList.contains("modal-show")) {
      orderPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});
