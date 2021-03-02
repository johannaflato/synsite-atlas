var grid = document.querySelector('.grid');

document.addEventListener("DOMContentLoaded", () => {
  imagesLoaded(grid, () => {
    const images = Array.from(document.querySelectorAll('img'));
    for (let image of images) {
      // triggers fade-in
      image.classList.add('img--loaded')
    }

    // sets up grid layout
    const packery = new Packery(grid, {
      itemSelector: '.grid-block',
      gutter: 5,
      percentPosition: false,
      stamp: '.stamp',
      // stagger: 30,
    });

    // grid.addEventListener( 'click', function( event ) {
    //   // filter for grid-block clicks
    //   if (!event.target.classList.contains("grid-block") ) {
    //     return;
    //   }
    //   event.target.classList.toggle("grid-block--large");
    //   packery.layout();
    // });
  // adds draggable behavior
  for (let item of pckry.items) {
    const drag = new Draggabilly(item.element);
    pckry.bindDraggabillyEvents(drag);
  }

  });
});

// toggle functions
function toggleVersions(){
  var v = document.getElementById("version-wrapper");
  if (v.style.display === "none") {
    v.style.display = "inline-block";
  } else {
    v.style.display = "none";
  }
}

function toggleChannels(){
  var c = document.getElementById("channel-wrapper");
  if (c.style.display === "none") {
    c.style.display = "inline-block";
  } else {
    c.style.display = "none";
  }
}

//modal functions
function openModal() {
  document.getElementById("blockModal").style.display = "block";
}

function closeModal() {
  document.getElementById("blockModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-block");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
