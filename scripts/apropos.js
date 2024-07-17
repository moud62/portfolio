if (screen.width <= 740) {
  let navList = document.querySelector("ul");
  navList.classList.add("d-none");

  let menuBtn = document.querySelector(".fa-bars");
  menuBtn.classList.remove("d-none");
  menuBtn.classList.add("d-block");

  let intro = document.querySelector("#intro");
  intro.classList.remove("col-9");
  intro.classList.add("col-11");

  let description = document.querySelector("#description");
  description.classList.remove("col-9");
  description.classList.add("col-11");

  let parcours = document.querySelector("#parcours");
  parcours.classList.remove("col-9");
  parcours.classList.add("col-11");

  let experience = document.querySelector("#experience");
  experience.classList.remove("col-9");
  experience.classList.add("col-11");

  let passion = document.querySelector("#passion");
  passion.classList.remove("col-9");
  passion.classList.add("col-11");
}
