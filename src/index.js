const listBtn = document.getElementById("list__btn");
const Container = document.querySelector(".container");

const openDropDown = () => {
  Container.classList.add("active");
};

const removeDropDown = () => {
  Container.classList.remove("active");
};

listBtn.addEventListener("click", () => {
  if (!Container.classList.contains("active")) {
    openDropDown();
  } else {
    removeDropDown();
  }
});
