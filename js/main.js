// scroll to
var main = document.getElementById("main");
var advantages = document.getElementById("advantages");
var review = document.getElementById("review");
var contacts = document.getElementById("contacts");
var order = document.getElementById("order");

var mainPage = document.getElementById("main-page");
var advantagesPage = document.getElementById("advantages-page");
var reviewPage = document.getElementById("reviews-page");
var contactsPage = document.getElementById("contacts-page");
var orderPage = document.getElementById("order-page");
const links = document.querySelectorAll(".nav-link");
function mainScroll() {
  if (main) {
    main.scrollIntoView({ behavior: "smooth" }, 1500);
    mainPage.classList.add("text-active");
    advantagesPage.classList.remove("text-active");
    reviewPage.classList.remove("text-active");
    contactsPage.classList.remove("text-active");
    orderPage.classList.remove("text-active");
  } else {
    main.scrollIntoView({ behavior: "smooth" }, 1500);
    console.log("no main");
  }
  console.log("main");
}
function advantagesScroll() {
  if (advantages) {
    advantages.scrollIntoView({ behavior: "smooth" }, 1500);
    mainPage.classList.remove("text-active");
    advantagesPage.classList.add("text-active");
    reviewPage.classList.remove("text-active");
    contactsPage.classList.remove("text-active");
    orderPage.classList.remove("text-active");
  } else {
    advantages.scrollIntoView({ behavior: "smooth" }, 1500);
    console.log("no advantages");
  }
  console.log("advantages");
}
function reviewScroll() {
  if (review) {
    review.scrollIntoView({ behavior: "smooth" }, 1500);
    mainPage.classList.remove("text-active");
    advantagesPage.classList.remove("text-active");
    reviewPage.classList.add("text-active");
    contactsPage.classList.remove("text-active");
    orderPage.classList.remove("text-active");
  } else {
    review.scrollIntoView({ behavior: "smooth" }, 1500);
    console.log("no review");
  }
  console.log("review");
}
function contactsScroll() {
  if (contacts) {
    contacts.scrollIntoView({ behavior: "smooth" }, 1500);
    mainPage.classList.remove("text-active");
    advantagesPage.classList.remove("text-active");
    reviewPage.classList.remove("text-active");
    contactsPage.classList.add("text-active");
    orderPage.classList.remove("text-active");
  } else {
    contacts.scrollIntoView({ behavior: "smooth" }, 1500);
    console.log("no contacts");
  }
  console.log("contacts");
}
function orderScroll() {
  if (order) {
    order.scrollIntoView({ behavior: "smooth" }, 1500);
    mainPage.classList.remove("text-active");
    advantagesPage.classList.remove("text-active");
    reviewPage.classList.remove("text-active");
    contactsPage.classList.remove("text-active");
    orderPage.classList.add("text-active");
  } else {
    order.scrollIntoView({ behavior: "smooth" }, 1500);
    console.log("no order");
  }
  console.log("order");
}
document.addEventListener("scroll", function () {
  var windowHeight = window.innerHeight;
  var sections = document.querySelectorAll("section, footer");

  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();
    if (rect.top < windowHeight && rect.bottom >= 0) {
      if (section.id === "main") {
        mainPage.classList.add("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "advantages") {
        mainPage.classList.remove("text-active");
        advantagesPage.classList.add("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "review") {
        mainPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.add("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "contacts") {
        mainPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.add("text-active");
        orderPage.classList.remove("text-active");
      } else if (section.id === "order") {
        mainPage.classList.remove("text-active");
        advantagesPage.classList.remove("text-active");
        reviewPage.classList.remove("text-active");
        contactsPage.classList.remove("text-active");
        orderPage.classList.add("text-active");
      }
    }
  });
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
