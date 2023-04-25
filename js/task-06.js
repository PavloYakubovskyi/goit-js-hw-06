const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  if (
    e.currentTarget.value.trim().length ===
    Number(e.currentTarget.getAttribute("data-length"))
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
