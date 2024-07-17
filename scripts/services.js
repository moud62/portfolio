if (screen.width <= 740) {
  let navList = document.querySelector("ul");
  navList.classList.add("d-none");

  let menuBtn = document.querySelector(".fa-bars");
  menuBtn.classList.remove("d-none");
  menuBtn.classList.add("d-block");

  let divisions = document.querySelectorAll("div");
  divisions.forEach((dvision) => {
    dvision.classList.remove("col-9");
    dvision.classList.add("col-11");
  });
}
