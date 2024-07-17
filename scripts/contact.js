if (screen.width <= 740) {
  let navList = document.querySelector("ul");
  navList.classList.add("d-none");

  let menuBtn = document.querySelector(".fa-bars");
  menuBtn.classList.remove("d-none");
  menuBtn.classList.add("d-block");

  let contactSection = document.querySelector("#section-contact");
  contactSection.classList.add("flex-column");

  let form = document.querySelector("form");
  form.classList.remove("col-7");
  form.classList.add("w-100");
  form.classList.add("mb-4");

  let sendBtn = document.querySelector("#send");
  sendBtn.classList.remove("col-5");
  sendBtn.classList.add("col-9");
  sendBtn.classList.add("mx-auto");
  sendBtn.classList.remove("btn-lg");

  let champPersos = document.querySelector("#info-personnels");
  champPersos.classList.add("flex-column");
  champPersos.classList.add("gap-3");
  document.querySelectorAll("#info-personnels input").forEach((champ) => {
    champ.classList.remove("col-5");
    champ.classList.add("w-100");
  });

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
