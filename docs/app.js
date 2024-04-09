// Carousel and Pagination applied to Testimonials Section

document.addEventListener("DOMContentLoaded", function() {
  // select all elements with the classes below
  const slides = document.querySelectorAll(".testimonials__content-slide");
  const pageDots = document.querySelectorAll(".testimonials__page");
  //  initialise a variable currentIndex to keep track of the index of the current slide
  let currentIndex = 0;

  // Define a function that takes an index parameter
  // responsible for showing the slide at the specified index and updating the page indicators accordingly
  function showSlide(index) {
    // iterates over all slides
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      if (i === index) {
        slide.classList.add("testimonials__content-slide--active");
        slide.classList.remove("testimonials__content-slide--off-screen");
      } else {
        slide.classList.remove("testimonials__content-slide--active");
        slide.classList.add("testimonials__content-slide--off-screen");
      }
    }
    // iterates over all page-indicators
    for (let i = 0; i < pageDots.length; i++) {
      const indicator = pageDots[i];
      indicator.classList.toggle("testimonials__page--active", i === index);
    }
  }

  // Increments the currentIndex by 1 and ensures it loops back to 0 when it reaches the end of the slides
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);  // calls the showSlide function to display the next slide
  }

  // decrements the currentIndex by 1 and ensures it loops back to the last slide index when it reaches the beginning
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex); // calls the showSlide function to display the previous slide
  }

  // Add event listeners for left and right arrow clicks
  // When clicked, they call the prevSlide and nextSlide functions, respectively
  document.querySelector(".testimonials__left-arrow-wrap").addEventListener("click", prevSlide);
  document.querySelector(".testimonials__right-arrow-wrap").addEventListener("click", nextSlide);

  // Add event listeners for pagination clicks
  // iterates over each element in the pageDots
  // an event listener is added for the click event
  // the corresponding index `i` that is passed to `showSlide` will display the corresponding slide  
  for (let i = 0; i < pageDots.length; i++) {
    pageDots[i].addEventListener("click", function() {
      showSlide(i);
    });
  }

  // Initial setup
  // display the first slide when the page loads
  showSlide(currentIndex);
});
