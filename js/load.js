document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
  
    function loadImages() {
      const baseUrl = '/photo/';
      const startIndex = 1; // Adjust this value based on your naming convention
      const endIndex = 36; // Adjust this value based on the number of images

      let activeSlide = true;

      for (let i = startIndex; i <= endIndex; i++) {
        const imageUrl = `${baseUrl}picture${i}.jpeg`;

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        if (activeSlide) {
          carouselItem.classList.add('active');
          activeSlide = false;
        }

        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('d-block', 'w-100');
        img.loading = 'lazy';

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
      }
    }
  
    loadImages();
  });