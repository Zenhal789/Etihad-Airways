  document.addEventListener('DOMContentLoaded', function () {
    var bookContents = document.getElementById('book-contents');
    var manageContents = document.getElementById('manage-contents');
    var expContents = document.getElementById('exp-contents');
    var destContents = document.getElementById('dest-contents');
    var helpContents = document.getElementById('help-contents');
    var navItem = document.getElementById('nav-item'); 
    var navItem1 = document.getElementById('nav-item1');
    var navItem2 = document.getElementById('nav-item2');
    var navItem3 = document.getElementById('nav-item3');
    var navItem4 = document.getElementById('nav-item4');


    bookContents.style.display = 'none';
    manageContents.style.display = 'none';
    expContents.style.display = 'none';
    destContents.style.display = 'none';
    helpContents.style.display = 'none';


//     // Show contents when hovering over the navbar
    navItem.addEventListener('mouseover', function () {
      bookContents.style.display = 'flex';
      manageContents.style.display = 'none';
      expContents.style.display = 'none';
      destContents.style.display = 'none';
      helpContents.style.display = 'none';
      


    });
    navItem1.addEventListener('mouseover', function () {
        manageContents.style.display = 'flex';
        bookContents.style.display = 'none';
        expContents.style.display = 'none';
        destContents.style.display = 'none';
        helpContents.style.display = 'none';


      });
      navItem2.addEventListener('mouseover', function () {
        manageContents.style.display = 'none';
        bookContents.style.display = 'none';
        expContents.style.display = 'flex';
        destContents.style.display = 'none';
        helpContents.style.display = 'none';

      });
  
      navItem3.addEventListener('mouseover', function () {
        manageContents.style.display = 'none';
        bookContents.style.display = 'none';
        expContents.style.display = 'none';
        destContents.style.display = 'flex';
        helpContents.style.display = 'none';

      });

      navItem4.addEventListener('mouseover', function () {
        manageContents.style.display = 'none';
        bookContents.style.display = 'none';
        expContents.style.display = 'none';
        destContents.style.display = 'none';
        helpContents.style.display = 'flex';

      });
//     // Hide contents when clicking outside the navbar or Book contents
    document.addEventListener('click', function (event) {
      var isNavItem = event.target.closest('#nav-item');
      var isNavItem1 = event.target.closest('#nav-item1');
      var isNavItem2 = event.target.closest('#nav-item2');
      var isNavItem3 = event.target.closest('#nav-item3');
      var isNavItem4 = event.target.closest('#nav-item4');

      var isBookContents = event.target.closest('#book-contents');
      var ismanageContents = event.target.closest('#manage-contents');
      var isexpContents = event.target.closest('#exp-contents');
      var isdestContents = event.target.closest('#dest-contents');
      var ishelpContents = event.target.closest('#help-contents');


      if (!isNavItem && !isBookContents && !isNavItem1 &&!isNavItem2 &&!isNavItem3 &&!isNavItem4) {
        bookContents.style.display = 'none';
        manageContents.style.display = 'none';
        expContents.style.display = 'none';
        destContents.style.display = 'none';
        helpContents.style.display = 'none';

      }
    });
  });
  


// ----------------------------------------------------------------Carousel-----------------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'));

    var carouselElement = document.getElementById('myCarousel');
    var hammer = new Hammer(carouselElement);

    hammer.on('swipeleft', function () {
      myCarousel.next();
    });

    hammer.on('swiperight', function () {
      myCarousel.prev();
    });
  });

//   -------------------------------------------------------------Card Carousel----------------------------------------------------
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });
   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);