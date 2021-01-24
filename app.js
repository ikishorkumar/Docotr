// Slider

var slideIndex = 1;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}


showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}




// Menu Handling

function handleMenu(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('._nav-item');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');
        burger.classList.toggle('toggle');
    });

   
}

handleMenu();

