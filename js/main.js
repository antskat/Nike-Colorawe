let mainPage = document.getElementById("main-page");
let benefitsPage = document.getElementById("benefits-page");
let advantagesPage = document.getElementById("advantages-page");
let reviewPage = document.getElementById("reviews-page");
let contactsPage = document.getElementById("contacts-page");
let orderPage = document.getElementById("order-page");
const links = document.querySelectorAll(".nav-link");
document.addEventListener("scroll", function () {
  var windowHeight = window.innerHeight;
  var sections = document.querySelectorAll("section, footer");

  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top < windowHeight && rect.bottom >= 0) {
      if (section.id === "main") {
        mainPage.classList.add("text-active");
        benefitsPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "advantages") {
        mainPage.classList.remove("text-active");
        benefitsPage.classList.add("text-active");
        advantagesPage.classList.add("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "review") {
        mainPage.classList.remove("text-active");
        benefitsPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.add("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "contacts") {
        mainPage.classList.remove("text-active");
        benefitsPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.add("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "order") {
        mainPage.classList.remove("text-active");
        benefitsPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.add("text-active");
      }
    }
  });
});
