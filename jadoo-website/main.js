const input = document.querySelector(".email");
const emailImage = document.querySelector(".img-email");
const downArrow = document.querySelector(".img-down");
const upArrow = document.querySelector(".img-up");
const cardFirst = document.querySelector(".card1");
const cardSecond = document.querySelector(".card2");
const msgSuccess = document.querySelector(".msg-success");
const subBtn = document.querySelector(".btn-sub");
const imgHeart = document.querySelector(".img-heart");
const dots1 = document.querySelector(".dot1");
const dots2 = document.querySelector(".dot2");

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

imgHeart.addEventListener("click", () => {});

downArrow.addEventListener("click", () => {
  if (!downArrow.classList.contains("opacity")) {
    Card();
  }
});

dots1.addEventListener("click", () => {
  if (!upArrow.classList.contains("opacity")) {
    Card();
  }
});

dots2.addEventListener("click", () => {
  if (!downArrow.classList.contains("opacity")) {
    Card();
  }
});

upArrow.addEventListener("click", () => {
  if (!upArrow.classList.contains("opacity")) {
    Card();
  }
});

subBtn.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  msgSuccess.style.visibility = "visible";

  if (isValidEmail(email)) {
    msgSuccess.textContent = "Thank you for subscribing to us.";
  } else {
    msgSuccess.textContent = "Sorry! We couldnt find your email.";
  }

  setTimeout(function () {
    msgSuccess.style.visibility = "hidden";
  }, 2000);
});

input.addEventListener("click", () => {
  emailImage.style.display = "none";
});

function Card() {
  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  const card1Styles = window.getComputedStyle(card1);
  const card2Styles = window.getComputedStyle(card2);

  const card2Left = card2Styles.getPropertyValue("left");
  const card2Top = card2Styles.getPropertyValue("top");
  const card2Z = card2Styles.getPropertyValue("z-index");

  const card1Left = card1Styles.getPropertyValue("left");
  const card1Top = card1Styles.getPropertyValue("top");
  const card1Z = card1Styles.getPropertyValue("z-index");

  card1.style.top = card2Top;
  card1.style.left = card2Left;
  card1.style.zIndex = card2Z;

  card2.style.top = card1Top;
  card2.style.left = card1Left;
  card2.style.zIndex = card1Z;

  dots1.classList.toggle("active");
  dots2.classList.toggle("active");

  upArrow.classList.toggle("opacity");
  downArrow.classList.toggle("opacity");
}
