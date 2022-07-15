const forms = () => {
  const allForms = document.querySelectorAll("form");
  const allInputs = document.querySelectorAll("input");

  const messages = {
    loading: "Loading ...",
    succsess: "Succsess! Thanks, we will contact you soon!",
    failure: "Failure! Something went wrong ...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = messages.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    allInputs.forEach(input => {
      input.value = "";
    });
  };

  allForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.appendChild(statusMessage);

      const formData = new FormData(form);

      postData("assets/server.php", formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = messages.succsess;
        })
        .catch(() => statusMessage.textContent = messages.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });
};

export default forms;
