const input = document.querySelector(".email");
const emailImage = document.querySelector(".img-email");

const subBtn = document.querySelector(".btn-sub");
const hamMenuItems = document.querySelector(".ham-menu-items");
const hamMenu = document.querySelector(".navbar-hamburger-menu");
const crossImg = document.querySelector(".img-cross");
const hamMenuNav = document.querySelector(".mob-nav-show");

const header = document.querySelector(".header");
const bgBlack = document.querySelector(".bg-black");
const videoPlayer = document.querySelector(".video-section");
const imgPlay = document.querySelector(".img-play");
const crossBlack = document.querySelector(".black-cross");
const scroll = document.getElementById("btn-back-to-top");
const successMsg = document.querySelector(".success-msg");
const failMsg = document.querySelector(".success-fail");
const iframe = document.querySelector(".video");
const play = document.querySelector(".btn-play");

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
  successMsg.classList.remove("opacity");
  failMsg.classList.remove("opacity");

  if (isValidEmail(email)) {
    successMsg.classList.add("opacity");
  } else {
    failMsg.classList.add("opacity");
  }

  if (successMsg.classList.contains("opacity")) {
    setTimeout(() => {
      successMsg.classList.remove("opacity");
    }, 3000);

    console.log("hey");
  }
});

input.addEventListener("click", () => {
  emailImage.style.display = "none";
});

var splide = new Splide(".splide", {
  direction: "ttb",
  height: "10rem",
});

splide.mount();

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 1) {
    header.classList.add("header-background");
  }

  if (scrollY < 1) {
    header.classList.remove("header-background");
  }
});

imgPlay.addEventListener("click", () => {
  videoPlayer.classList.add("show");
  bgBlack.classList.add("show");
  document.body.classList.add("no-scroll");
});

play.addEventListener("click", () => {
  videoPlayer.classList.add("show");
  bgBlack.classList.add("show");
  document.body.classList.add("no-scroll");
});

crossBlack.addEventListener("click", () => {
  videoPlayer.classList.remove("show");
  bgBlack.classList.remove("show");
  document.body.classList.remove("no-scroll");
  iframe.src = iframe.src;
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }

  scroll.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
