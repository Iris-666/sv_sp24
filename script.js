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
projectCount = 15;
let slideContainer;
let audio;
audio = new Audio(`audio/audio${slideIndex}.mp3`);
audio.play();
console.log(audio)
let name = ["Charlemagne,Natalya", "Chen,Junzhe", "Chen,Victoria", "Cheng,Joy", "Cui,Jinghan", "Dorado,Chynna Julienne", "Gu,Elizabeth", "Katakis,Irene", "Lin,Leah", "Pan,Evan", "Shao,Cicci", "Xie,Qiran", "Yu,Sixian", "Zhang,Alina", "Zinchenko,Dana"];
let text = ["Hold On by The Internet", "崂山道士 by 马思唯", "GHETTO GATSBY FEAT. ALICIA KEYS by Brent Faiyaz", "Cool With You by NewJeans", "City Of Stars by Justin Hurwitz", "Uhaw (Tayong Lahat) by Dilaw", "Salvatore by Lana Del Rey", "Fly Me To The Moon by Frank Sinatra", "蝉鸣的意义是帮我想你 by Luoli Chen", "Resonance by Odyssey", "Dice by NMIXX", "Summer Feelings by Lennon Stella & Charlie Puth", "In Cold Blood by Alt-J", "Seven by Taylor Swift", "Disfruto by Carla Morrison"];

window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){
    slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img/img${i+1}.png" class="img" style="width:40%">`+`<div class="text">${name[i]}</div>`+`<div class="text2">${text[i]}</div>`+`</div>`
  }
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  showSlides(slideIndex);
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