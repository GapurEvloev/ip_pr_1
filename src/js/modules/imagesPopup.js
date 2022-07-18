const imagesPopup = () => {
  const popup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");

  popup.classList.add("popup");
  workSection.appendChild(popup);

  popup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      popup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
      document.body.style.overflow = "hidden";
    }

    if (target && target.matches("div.popup")) {
      popup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default imagesPopup;
