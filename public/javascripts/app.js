imagesLoaded('.grid', () => {

  const images = Array.from(document.querySelectorAll('img'));
  for (let image of images) {
    // triggers fade-in
    image.classList.add('img--loaded')
  }

  const packery = new Packery('.grid', {
    itemSelector: '.grid-block',
    gutter: 5,
    percentPosition: true,
  });

  for (let item of packery.items) {
    const drag = new Draggabilly(item.element);
    packery.bindDraggabillyEvents(drag);
  }
});
