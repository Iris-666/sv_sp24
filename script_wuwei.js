

let slides, dots;
let slideIndex = 1;
projectCount = 14;
let slideContainer;
let audio;
audio = new Audio(`audio_ian/audio${slideIndex}.mp3`);
audio.play();
console.log(audio)
let name = ["Santiago Hernandez", "Arnold Shin", "Rigual Assis", "Wanyu Chen", "Xinyu Chen", "Tania Hartanto", "Silas Sui", "Angie Uytingco", "Luara Velasco", "Lein Wu", "Chenhan Xu", "Nuo Xu", "Tansholpan Zhanabekova", "Han Zhang"];
let text = ["I Want To Leave", "Trying to Feel Alive by Porter Robinson", "08 Pale Court - Hollow Knight OST album", "Shawn Mendes - Wonder", "Apocalypse", "will he by joji", "Rise And Shine by Robert Glasper", "東京フラッシュ / Vaundy", "MORA - TUYO", "Limbo", "The Dream of Flight", "Richard Clayderman-蓝色狂想曲", "James Bay - Let It Go", "Ludovico Einaudi - Experience"];

let sectionBtn;

function disappear(){
  console.log("disappear")
  sectionBtn.style.display = "none";
}


window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){
    slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img_ian/img${i+1}.png" class="img" style="width:40%">`+`<div class="text">${name[i]}</div>`+`<div class="text2">${text[i]}</div>`+`</div>`
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
  audio = new Audio(`audio_ian/audio${slideIndex}.mp3`);
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