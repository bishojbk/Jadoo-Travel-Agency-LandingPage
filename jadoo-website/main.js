const input = document.querySelector(".email");
const emailImage = document.querySelector(".img-email");
const downArrow = document.querySelector(".img-down");
const cardFirst = document.querySelector(".card1");
const cardSecond = document.querySelector(".card2");
const msgSuccess = document.querySelector(".msg-success");
const subBtn = document.querySelector(".btn-sub");

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

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

// downArrow.addEventListener("click", () => {
//   console.log("CLICKD");
//   const card1Top = cardFirst.style.top;
//   const card1Left = cardFirst.style.left;

//   console.log(card1Top, card1Left);

//   cardFirst.style.top = cardSecond.style.top;
//   cardFirst.style.left = cardSecond.style.left;

//   cardSecond.style.top = card1Top;
//   cardSecond.style.left = card1Left;
// });
