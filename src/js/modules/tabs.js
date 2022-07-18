const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTab() {
    content.forEach((item) => {
      item.classList.remove("show", "animate__fadeIn");
      item.classList.add("hide", "animate__fadeOut");
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTab(i = 0) {
    content[i].classList.remove("hide", "animate__fadeOut");
    content[i].classList.add("show", "animate__fadeIn");
    tab[i].classList.add(activeClass);
  }
  hideTab();
  showTab();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideTab();
          showTab(i);
        }
      });
    }
  });
};

export default tabs;
