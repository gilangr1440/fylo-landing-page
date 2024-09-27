function headerValidation() {
  const input = document.getElementsByClassName("hero__input-field")[0];
  const inputValue = document.getElementsByClassName("hero__input-field")[0].value;
  const validationText = document.getElementsByClassName("hero__validation")[0];
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (inputValue.match(pattern) || inputValue == "") {
    input.classList.remove("hero__input-field_error");
    validationText.classList.remove("hero__validation_hidden");
  } else {
    input.classList.add("hero__input-field_error");
    validationText.classList.add("hero__validation_hidden");
  }
}

function getAccessValidation() {
  const input = document.getElementsByClassName("get-access__input-field")[0];
  const inputValue = document.getElementsByClassName("get-access__input-field")[0].value;
  const validationText = document.getElementsByClassName("get-access__validation")[0];
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (inputValue.match(pattern) || inputValue == "") {
    input.classList.remove("get-access__input-field_error");
    validationText.classList.remove("get-access__validation_hidden");
  } else {
    input.classList.add("get-access__input-field_error");
    validationText.classList.add("get-access__validation_hidden");
  }
}
