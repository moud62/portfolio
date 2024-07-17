let desc = document.querySelector("#desc");
let compt = document.querySelector("#compt");

if (screen.width <= 740) {
  desc.classList.remove("col-5");
  desc.classList.add("col-11");
  compt.classList.remove("col-5");

  let itemProjets = document.querySelector(".item-projets");
  itemProjets.classList.remove("flex-row");
  itemProjets.classList.add("flex-column");
  //   let itemService = document.querySelector("#item-services");

  let intro = document.querySelector("#md");
  intro.classList.remove("px-5");
  intro.classList.remove("mx-5");

  let description = document.querySelector("#description");
  description.classList.remove("gap-3");
  description.classList.add("align-items-start");

  let menuIcon = document.querySelector(".fa-bars");
  menuIcon.classList.remove("d-none");
}
