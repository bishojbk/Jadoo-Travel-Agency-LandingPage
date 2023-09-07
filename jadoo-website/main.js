const input = document.querySelector(".email");
const emailImage = document.querySelector(".img-email");
const downArrow = document.querySelector(".img-down");
const upArrow = document.querySelector(".img-up");
const cardFirst = document.querySelector(".card1");
const cardSecond = document.querySelector(".card2");
const cardThird = document.querySelector(".card3");
const msgSuccess = document.querySelector(".msg-success");
const subBtn = document.querySelector(".btn-sub");
const hamMenuItems = document.querySelector(".ham-menu-items");
const hamMenu = document.querySelector(".navbar-hamburger-menu");
const bgBlack = document.querySelector(".background-black");
const crossImg = document.querySelector(".img-cross");
const hamMenuNav = document.querySelector(".mob-nav-show");
const successTick = document.querySelector(".img-tick-blue");
const failTick = document.querySelector(".img-tick-red");

downArrow.addEventListener("click", () => {
  const cardFirstPosition = cardFirst.getBoundingClientRect();
  const cardSecondPosition = cardSecond.getBoundingClientRect();
  const cardThirdPosition = cardThird.getBoundingClientRect();

  const cardFirstTop = cardFirst.getBoundingClientRect().top;
  const cardFirstLeft = cardFirst.getBoundingClientRect().left;

  console.log(cardFirstTop, cardSecond.getBoundingClientRect().top);
  cardSecond.style.top = cardFirstTop;

  console.log(cardSecond.style.top);
  // cardSecond.style.left = `${cardFirstLeft}px`;
});

hamMenu.addEventListener("click", () => {
  document.body.classList.add("mobile-nav-show");
});

crossImg.addEventListener("click", () => {
  document.body.classList.remove("mobile-nav-show");
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
    successTick.style.display = "block";
  } else {
    msgSuccess.classList.add("fail");
    msgSuccess.textContent = "Sorry! We couldnt find your email.";
    failTick.style.display = "block";
  }

  setTimeout(function () {
    msgSuccess.classList.remove("success");
    msgSuccess.classList.remove("fail");
    msgSuccess.style.visibility = "hidden";
    successTick.style.display = "none";
    failTick.style.display = "none";
  }, 5000);
});

input.addEventListener("click", () => {
  emailImage.style.display = "none";
});
