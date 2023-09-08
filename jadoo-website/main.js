const input = document.querySelector(".email");
const emailImage = document.querySelector(".img-email");
const msgSuccess = document.querySelector(".msg-success");
const subBtn = document.querySelector(".btn-sub");
const hamMenuItems = document.querySelector(".ham-menu-items");
const hamMenu = document.querySelector(".navbar-hamburger-menu");
const crossImg = document.querySelector(".img-cross");
const hamMenuNav = document.querySelector(".mob-nav-show");
const successTick = document.querySelector(".img-tick-blue");
const failTick = document.querySelector(".img-tick-red");

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

var splide = new Splide(".splide", {
  direction: "ttb",
  height: "10rem",
});

splide.mount();
