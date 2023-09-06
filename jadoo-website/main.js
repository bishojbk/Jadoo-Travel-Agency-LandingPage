const input = document.querySelector(".email");
const emailImage = document.querySelector(".img-email");
const downArrow = document.querySelector(".img-down");
const upArrow = document.querySelector(".img-up");
const cardFirst = document.querySelector(".card1");
const cardSecond = document.querySelector(".card2");
const msgSuccess = document.querySelector(".msg-success");
const subBtn = document.querySelector(".btn-sub");
const hamMenuItems = document.querySelector(".ham-menu-items");
const hamMenu = document.querySelector(".navbar-hamburger-menu");
const bgBlack = document.querySelector(".background-black");
const crossImg = document.querySelector(".img-cross");
const hamMenuNav = document.querySelector(".mob-nav-show");

hamMenu.addEventListener("click", () => {
  hamMenuItems.classList.toggle("show");
  // hamMenuItems.style.display = "block";
  bgBlack.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

crossImg.addEventListener("click", () => {
  hamMenuItems.classList.toggle("show");
  bgBlack.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

subBtn.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  msgSuccess.style.visibility = "visible";

  if (isValidEmail(email)) {
    msgSuccess.classList.add("success");
    msgSuccess.textContent = "Thank you for subscribing to us.";
  } else {
    msgSuccess.classList.add("fail");
    msgSuccess.textContent = "Sorry! We couldnt find your email.";
  }

  setTimeout(function () {
    msgSuccess.style.visibility = "hidden";
  }, 3000);
});

input.addEventListener("click", () => {
  emailImage.style.display = "none";
});

// $(document).ready(function () {
//   $(".testimonials-section-people").slick({
//     dots: true,
//   });
// });
