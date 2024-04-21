const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slideImageFrame = document.querySelector(".slider");
const images = document.querySelectorAll(".images");
let slideNum = 1;
const ImageLength = images.length;
console.log(ImageLength);

// Bottom section button div creation

const divButton = document.querySelector(".bottomSection");
for (let i = 1; i <= ImageLength; i++) {
  const div = document.createElement("div");
  div.className = "button";
  divButton.appendChild(div);
}

//Mutiple button Clickable
const buttons = document.querySelectorAll(".button");

//default button color
buttons[0].style.backgroundColor = "white";

//reset background function
const resetBG = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    slideImageFrame.style.transform = `translateX(-${index * 600}px)`;
    //Increase SlideNumber
    slideNum=index+1
    //reseting backgrund color
    resetBG();
    //applying background color
    button.style.backgroundColor = "white";
  });
});

const changeColor=()=>{
  resetBG();
  buttons[slideNum-1].style.backgroundColor="white";
  console.log(buttons[slideNum-1])
}

//Top Section
//Right Arrow Functionality
const nextSlide = () => {
  slideImageFrame.style.transform = `translateX(${-600 * slideNum}px)`;
  slideNum++;
  
};

const pointToFirst = () => {
  slideImageFrame.style.transform = `translateX(0px)`;
  slideNum = 1;
};

//Left Arrow functionality
const prevSlide = () => {
  slideImageFrame.style.transform = `translateX(-${600 * (slideNum - 2)}px)`;

  slideNum--;
};

const pointToLast = () => {
  slideImageFrame.style.transform = `translateX(-${(ImageLength - 1) * 600}px)`;
  slideNum = ImageLength;
};

rightArrow.addEventListener("click", () => {
  if (slideNum < ImageLength) {
    nextSlide();
  } else {
    pointToFirst();
  }
  //Calling Change background function
  changeColor();
});

leftArrow.addEventListener("click", () => {
  if (slideNum > 1) {
    prevSlide();
  } else {
    pointToLast();
  }
  //calling change background color function
  changeColor();
});

