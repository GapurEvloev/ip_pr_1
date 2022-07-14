const modals = () => {
  function bindModal(triggerSelector, modalSelector) {
    let triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

    function showModal(modal) {
      document.body.classList.add("modal-open");
      modal.classList.add("show");
      modal.classList.remove("hide");
    }

    function hideModal(modal) {
      document.body.classList.remove("modal-open");
      modal.classList.remove("show");
      modal.classList.add("hide");
    }

    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        showModal(modal);
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("popup_close")) {
        hideModal(modal);
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.body.classList.add("modal-open");
      document.querySelector(selector).classList.add("show");
      document.querySelector(selector).classList.remove("hide");
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer");
  bindModal(".phone_link", ".popup");
  // showModalByTime(".popup", 60000);
};

export default modals;
