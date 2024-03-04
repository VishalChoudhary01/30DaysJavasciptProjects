let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let nameField = document.querySelector(".namefield");
let PassChange = document.querySelector(".headingPass");

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underline.style.transform = "translateX(35px)";
  PassChange.innerHTML = "Forget Password?!";

  title.style.opacity = "0";
  setTimeout(() => {
    title.innerHTML = "Sign In";
    title.style.opacity = "1";
  }, 800);
});

signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";

  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underline.style.transform = "translateX(0)";
  PassChange.innerHTML = "Password Suggestion!!";
  title.style.opacity = "0";
  setTimeout(() => {
    title.innerHTML = "Sign Up";
    title.style.opacity = "1";
  }, 800);
});
