if (screen.width <= 740) {
  let btnPlus = document.querySelectorAll(".btn");

  for (let i = 1; i < btnPlus.length; i++) {
    btnPlus[i].classList.remove("col-2");
    btnPlus[i].classList.add("col-8");
  }

  let images = document.querySelectorAll(".img-uls");

  for (let i = 0; i < images.length; i++) {
    images[i].style.height = "150px";
  }

  let navList = document.querySelector("ul");
  navList.classList.add("d-none");

  let menuBtn = document.querySelector(".fa-bars");
  menuBtn.classList.remove("d-none");
  menuBtn.classList.add("d-block");

  let navBar = document.querySelector("#nav-bar");

  let menuIcon = document.querySelector(".fa-bars");
  menuIcon.classList.remove("d-none");
  menuIcon.addEventListener("click", () => {
    navBar.classList.remove("d-none");
  });

  let closeBtn = document.querySelector("#close-btn");
  closeBtn.addEventListener("click", () => {
    navBar.classList.add("d-none");
  });
}
