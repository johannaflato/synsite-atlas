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
      // containerStyle: {
      //       position: 'absolute'
      //   },
      // transitionDuration: '500ms',
      // stagger: 30,
      // isOriginLeft: false,
      // isOriginTop: false,
      // isHorizontal:true,
    });

    // adds draggable behavior
    for (let item of packery.items) {
      const drag = new Draggabilly(item.element);
      packery.bindDraggabillyEvents(drag);
    }
  });
});
