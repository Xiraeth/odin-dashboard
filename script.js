"use strict";

const xButton = document.querySelector(".fa-x");
const navIcons = document.querySelectorAll(".navigation-menu .fa-solid");
const navigationMenu = document.querySelector(".navigation-menu");
const mainMenu = document.querySelector(".main-menu");
const navMenuTexts = document.querySelectorAll(".nav-menu-text");
const copyrightText = document.querySelector(".copyright-container > p");
const rightSide = document.querySelector(".right-side");
const notifIcon = document.querySelector(".notif-icon");

let open = true;

notifIcon.addEventListener("mouseenter", function () {
  notifIcon.classList.add("fa-shake");
  setTimeout(function () {
    notifIcon.classList.remove("fa-shake");
  }, 800);
});

notifIcon.addEventListener("mouseleave", function () {
  notifIcon.classList.remove("fa-shake");
});

xButton.addEventListener("click", function () {
  xButton.classList.toggle("fa-x");
  xButton.classList.toggle("fa-bars");

  if (open) navigationMenu.style.width = "100px";
  else navigationMenu.style.width = "300px";

  navIcons.forEach((icon) => {
    if (open) {
      icon.style.marginRight = "0";
      icon.style.fontSize = "1.8rem";
    } else {
      icon.style.marginRight = "20px";
      icon.style.fontSize = "1.3rem";
    }
  });

  xButton.style.fontSize = "2rem";

  navMenuTexts.forEach((text) => {
    if (!open) {
      setTimeout(function () {
        text.classList.remove("hidden");
      }, 100);
    } else text.classList.add("hidden");
  });

  if (open) {
    copyrightText.textContent = "©";
    copyrightText.style.fontSize = "2rem";
  } else {
    copyrightText.style.fontSize = "1rem";
    setTimeout(function () {
      copyrightText.textContent = "Copyright © Xiraeth";
    }, 100);
  }

  if (open) rightSide.style.width = parseInt(window.innerWidth) + "px";
  else
    rightSide.style.width =
      parseInt(window.innerWidth) - parseInt(navigationMenu.style.width) + "px";

  open = open == true ? false : true;
});
