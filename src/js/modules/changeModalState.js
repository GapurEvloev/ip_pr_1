import { nodeName } from "jquery";
import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(elem, event, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if(item.getAttribute("type") == "checkbox") {
              i === 0 ? state[prop] = "cool" : state[prop] = "warm";
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElems(windowForm, "click", "form");
  bindActionToElems(windowWidth, "input", "width");
  bindActionToElems(windowHeight, "input", "height");
  bindActionToElems(windowType, "change", "type");
  bindActionToElems(windowProfile, "change", "profile");
};

export default changeModalState;
