const mainFormEl = document.querySelector(".login-form");

mainFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All fields of the form must be filled in!");
  }

  const userLoginData = {
    email: email.value,
    password: password.value,
  };

  console.log(userLoginData);

  event.currentTarget.reset();
});
