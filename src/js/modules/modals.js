export function hideModal(modal) {
  document.body.classList.remove("modal-open");
  modal.classList.remove("show");
  modal.classList.add("hide");
}

const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeClickOverlay = true) {
    let triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      allModals = document.querySelectorAll("[data-modal]");

    function showModal(modal) {
      document.body.classList.add("modal-open");
      modal.classList.add("show");
      modal.classList.remove("hide");
    }

    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        allModals.forEach((item) => {
          hideModal(item);
        });

        showModal(modal);
      });
    });

    modal.addEventListener("click", (e) => {
      if ((e.target === modal && closeClickOverlay) || e.target.classList.contains("popup_close")) {
        hideModal(modal);
        allModals.forEach((item) => {
          hideModal(item);
        });
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
  bindModal(".popup_calc_btn", ".popup_calc", false);
  bindModal(".popup_calc_button", ".popup_calc_profile", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", false);
  // showModalByTime(".popup", 60000);
};

export default modals;
