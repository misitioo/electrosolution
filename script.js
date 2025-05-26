 
    function scrollGallery(direction) {
      const slider = document.getElementById('gallerySlider');
      const scrollAmount = 320;
      slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    function openImage(card) {
      const imgSrc = card.querySelector('img').src;
      const win = window.open();
      win.document.write(`<img src="${imgSrc}" style="width:100%">`);
    }
