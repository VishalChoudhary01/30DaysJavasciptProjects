let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slider = document.querySelector(".slider");
let slideNum = 1;
const images = document.querySelectorAll(".image");
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNum * 600}px)`;
  /*
    step1: image will translate left slide -1*600=-600px
    */
  slideNum++;
  /* slideNum=2
    step1: image will translate left slide -2*600=-1200px
        slideNum=3
    step1: image will translate left slide -3*600=-1800px
    */
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNum = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
  slideNum = length;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNum - 2) * 600}px)`;
  /* 0 at original position we have reach
   */
  slideNum--;
};

right.addEventListener("click", () => {
  // if(slideNum<length){
  //     nextSlide();
  // }
  // else{
  //     getFirstSlide();
  // }

  // terninary operator
  slideNum < length ? nextSlide() : getFirstSlide();
});

left.addEventListener("click", () => {
  slideNum > 1 ? prevSlide() : getLastSlide();
});
