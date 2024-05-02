// let index = 0;
// let images;
// window.addEventListener("load", function(event) {
//     console.log(document.getElementsByClassName('image').length);
//     images = document.getElementsByClassName("image");
//     displayImages();
// });


// function displayImages() {
//   let i;
//   console.log(typeof(images))
//   console.log(Object.values(images))
//   for (i = 0; i < images.length; i++) {
//     console.log(images[0])
//     images[i].style.display = "none";
//   }
//   index++;
//   if (index > images.length) {
//     index = 1;
//   }
//   console.log(images[0]);
//   images[index-1].style.display = "block";
//   setTimeout(displayImages, 2000); 
// }

let slides, dots;
let slideIndex = 1;
projectCount = 21;
let slideContainer;
let audio;
audio = new Audio(`audio/audio${slideIndex}.mp3`);
audio.play();
console.log(audio)
let name = ["Charlotte Gao", "Christine Cao", "Florence Jiang", "Helen Zhou", "Katelyn Sum", "Nina Chen", "Roman O'Brien", "Shanze Fatima Javed", "Vivian Wang", "Yancy Tavares", "Yvonne Xu", "Isabella Liu", "Jingran Zhang", "Sihong Shen", "Yixi Yu","Yunchu Qin", "Haya Faisal", "Astroyd Kang", "Daiyu Tamaki", "Julieta Vazquez Martinez", "Zishan Qiu"];
let text = ["Comptine D Un Autre éTé", "Novo Amor - Colourway", "John Powell - Test Drive", "Madison Beer - Showed Me", "BANG YEDAM - Miss You", "Dive Back In Time", "Romeo Juliet", "Just Relax", "TWICE - I GOT YOU", "Yancy Jairo - All I See", "Julia Kent - Tourbillon", "Lana Del Rey - California", "Austyn Johnson, Cameron Seely, Hugh Jackman - A Million Dreams", "MONACA, 植松伸夫, 岡部啓一 - カイネ", "Green Tara's Thousands of Sorrowful Blossoms (萬千花蕊慈母悲哀）","", "Imagine Dragons - Demons", "The Conqueror Worm II", "", "TIMØ, Andrés Cepeda - Conquistar El Planeta", "和田薫 (わだかおる) - 時代を越える想い II"];

let sectionBtn;

function disappear(){
  console.log("disappear")
  sectionBtn.style.display = "none";
}

window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){
    slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img/img${i+1}.png" class="img" style="width:40%">`+`<div class="text">${name[i]}</div>`+`<div class="text2">${text[i]}</div>`+`</div>`
  }
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  showSlides(slideIndex);
  sectionBtn = document.getElementById("dropdown");
});


function plusSlides(n) {
  audio.pause();
  showSlides(slideIndex += n);
  audio = new Audio(`audio/audio${slideIndex}.mp3`);
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
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";

  //play audio
}

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