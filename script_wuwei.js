

let slides, dots;
let slideIndex = 1;
projectCount = 12;
let slideContainer;
let audio;
audio = new Audio(`audio_wuwei/audio${slideIndex}.mp3`);
audio.play();
console.log(audio)
let name = ["Ryan Hiew", "Shahd Kamal", "Beichen Li", "Calvin Lin", "Karla Liwanes", "Anita Luo", "Fangfei Rong", "Jenna Sun", "Denny Wang", "Katy Wang", "Alex Wu", "William Zheng"];
let text = [" ", "Enta Omry - Umm Kulthum", " ", "指紋 by 杜宣達", "Olivia Rodrigo - bad idea right", "AURORA Animal", " ", "Umm… Life", "Zack_Hemsey - The Way", "Head Over Heels", "Von Citizen&ichika - Sanctuary", "ma mère l'oye"];

let sectionBtn;

function disappear(){
  console.log("disappear")
  sectionBtn.style.display = "none";
}


window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){
    slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img_wuwei/img${i+1}.png" class="img" style="width:40%">`+`<div class="text">${name[i]}</div>`+`<div class="text2">${text[i]}</div>`+`</div>`
  }
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  showSlides(slideIndex);
  sectionBtn = document.getElementById("dropdown");

});

//use this function to switch slides +1 or -1 and play the corresponding audio
function plusSlides(n) {
  audio.pause();
  showSlides(slideIndex += n);
  audio = new Audio(`audio_wuwei/audio${slideIndex}.mp3`);
  audio.play();

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}

//use keyboard to control
document.addEventListener("keydown", (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  console.log(keyName);
  if(keyName == "a"){
    plusSlides(-1);
  }else if(keyName == "b"){
    plusSlides(1);
  }
})