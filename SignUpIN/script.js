let signUpBtn=document.querySelector('.signupbtn');
let signInBtn=document.querySelector(".signinbtn");
let title=document.querySelector(".title");
let underline=document.querySelector(".underline");
let nameField=document.querySelector(".namefield");
let PassChange=document.querySelector(".headingPass")

signInBtn.addEventListener("click",()=>{
   nameField.style.maxHeight="0";
   title.innerHTML="Sign In";
   signUpBtn.classList.add("disable");
   signInBtn.classList.remove("disable");
   underline.style.transform="translateX(35px)";
   PassChange.innerHTML="Forget Password ?"

});

signUpBtn.addEventListener("click",()=>{
   nameField.style.maxHeight="60px";
   title.innerHTML="Sign Up";
   signUpBtn.classList.remove("disable");
   signInBtn.classList.add("disable");
   underline.style.transform="translateX(0)";
   PassChange.innerHTML="Password Suggestion!!"

});

