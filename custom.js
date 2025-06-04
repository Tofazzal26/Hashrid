const allCollapse = document.querySelectorAll(".collapse");

allCollapse.forEach((item) => {
  const info = item.querySelector(".collapseInfo");
  const para = item.querySelector(".dynamicPara");
  const img = item.querySelector(".toggleImg");
  const head = item.querySelector(".collapseHead");
  let isOpen = false;
  info.addEventListener("click", () => {
    para.classList.toggle("showPara");
    isOpen = !isOpen;
    if (img) {
      img.src = isOpen ? "/images/collapseClose.svg" : "/images/plus.svg";
      if (img.src.includes("/images/collapseClose.svg")) {
        head.classList.add("headColor");
      } else {
        head.classList.remove("headColor");
      }
    }
  });
});
