
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
  
    // Function to load images from the ../photo folder
    function loadImages() {
      const photoFolder = '../photo';
      const fileExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Add more extensions if needed
  
      fetch(photoFolder)
        .then(response => {
          console.log('Fetch response status:', response.status);
          return response.text();
        })
        .then(data => {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(data, 'text/html');
          const links = htmlDoc.querySelectorAll('a');

  
          let activeSlide = true;
  
          links.forEach(link => {
            const href = link.getAttribute('href');
            const extension = href.slice(href.lastIndexOf('.'));
            const imgSrc = href; // Update this line

            if (fileExtensions.includes(extension)) {
              const carouselItem = document.createElement('div');
              carouselItem.classList.add('carousel-item');
  
              if (activeSlide) {
                carouselItem.classList.add('active');
                activeSlide = false;
              }
  
              const img = document.createElement('img');
              img.src = imgSrc;
              img.classList.add('d-block', 'w-100');
              img.loading = 'lazy'; // Enable lazy loading
  
              carouselItem.appendChild(img);
              carouselInner.appendChild(carouselItem);
            }
          });
        })
        .catch(error => {
          console.error('Error loading images:', error);
        });
    }
  
    loadImages();
  });