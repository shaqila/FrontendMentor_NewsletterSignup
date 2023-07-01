const signup = document.getElementById("signup");
// const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const success = document.getElementById("success");
const emailConfirm = document.getElementById("emailConfirm");
const form = document.forms.myForm;
const { email, btn } = form;

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    email.classList.add("border-green-400");
    email.classList.remove("border-red-400");
    email.classList.remove("bg-red-100");
    emailError.classList.add("hidden");
    emailError.classList.remove("block");
    return true;
  } else {
    email.classList.add("border-red-400");
    email.classList.add("bg-red-100");
    email.classList.remove("border-green-400");
    emailError.classList.add("block");
    emailError.classList.remove("hidden");
    return false;
  }
}

email.addEventListener("keyup", () => {
  ValidateEmail(email);
});

// SUBMIT
// function submitForm() {
//   if (ValidateEmail(email)) {
//     return false;
//   } else {
//     signup.classList.add("hidden");
//     success.classList.remove("hidden");
//     return true;
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (ValidateEmail(email)) {
    signup.classList.add("hidden");
    success.classList.remove("hidden");
    emailConfirm.innerText = email.value;
  }
});
