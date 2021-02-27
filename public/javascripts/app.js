document.addEventListener("DOMContentLoaded", () => {
  imagesLoaded('.grid', () => {
    const images = Array.from(document.querySelectorAll('img'));
    for (let image of images) {
      // triggers fade-in
      image.classList.add('img--loaded')
    }

    // sets up grid layout
    const packery = new Packery('.grid', {
      itemSelector: '.grid-block',
      gutter: 5,
      percentPosition: false,
      stamp: '.stamp',
      // stagger: 30,
    });

    // adds draggable behavior
    for (let item of packery.items) {
      const drag = new Draggabilly(item.element);
      packery.bindDraggabillyEvents(drag);
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
