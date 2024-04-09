'use strict';

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
    // if the index matches the current index, the slide is displayed
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      if (i === index) {
        // if the index matches the current index, the slide is displayed
        slide.classList.add("testimonials__content-slide--active");
      } 
      // if the index does not match the current index, the slide is hidden
      else {
        slide.classList.remove("testimonials__content-slide--active");
      }
    }
    // iterates over all page-indicators
    for (let i = 0; i < pageDots.length; i++) {
      // if the index matches the current index, the page indicator is set to active,
      // otherwise it is set to inactive
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


// Font Size Control for Accessibility
// Functionality to increase, decrease, and reset the font size of elements with 
// the class .resize-text when certain buttons are clicked

// Listens for when the HTML finishes loading
document.addEventListener('DOMContentLoaded', function() {
  // Function to increase font size
  // Listens for clicks on the element with ID increase-font-size 
  // and increases font size by 2 pixels on .resize-text elements
  document.getElementById('increase-font-size').addEventListener('click', function() {
    changeFontSize(2);
  });

  // Function to decrease font size
  // Listens for clicks on the element with ID decrease-font-size and 
  // decreases font size by 2 pixels on .resize-text elements
  document.getElementById('decrease-font-size').addEventListener('click', function() {
    changeFontSize(-2);
  });

  // Function to reset font size
  // Listens for clicks on the element with ID reset-font-size and resets font size 
  // of .resize-text elements to default size, which is 16px
  document.getElementById('reset-font-size').addEventListener('click', function() {
    resetFontSize();
  });

  // Function to change font size
  // Adjusts font size of .resize-text elements based on the changeAmount parameter, 
  // specifically for heading tags (H1-H6) and paragraph tags (P)
  // changeAmount is the amount by which the font size should be increased or decreased,
  // and is passed as an argument to the function. 
  // It is set to 2 pixels for increase and -2 pixels for decrease. 
  function changeFontSize(changeAmount) {
    var resizeElements = document.querySelectorAll('.resize-text');
    // Starts a loop that iterates over each element in the resizeElements collection.
    for (var i = 0; i < resizeElements.length; i++) {
      // For each element, it checks if the tag name is one of the heading tags (H1-H6) or paragraph tag (P).
      // Then retrieves the current element within the loop and assigns it to the variable element.
      var element = resizeElements[i];
      if (element.tagName === 'H1' || 
      element.tagName === 'H2' || 
      element.tagName === 'H3' || 
      element.tagName === 'H4' || 
      element.tagName === 'H5' || 
      element.tagName === 'H6' || 
      element.tagName === 'P') {
        // Retrieves the current font size of the element, or 16 pixels if no font size is set.
        var currentSize = parseFloat(element.style.fontSize) || 16; // Default font size is 16px
        // Calculates the new font size by adding the changeAmount to the current font size.
        var newSize = currentSize + changeAmount;
        // applies the new font size to the element by setting its style.fontSize property to newSize with 'px' appended
        element.style.fontSize = `${newSize}px`;
      }
    }
  }
  
  // Function to reset font size to default
  // Resets the font size of .resize-text elements to the default size 
  function resetFontSize() {
    // Retrieves all elements with the class .resize-text
    var resizeElements = document.querySelectorAll('.resize-text');
    // Starts a loop that iterates over each element in the resizeElements collection.
    for (var i = 0; i < resizeElements.length; i++) {
      // For each element, it checks if the tag name is one of the 
      // heading tags (H1-H6) or paragraph tag (P).
        var element = resizeElements[i];
        if (element.tagName === 'H1' || 
          element.tagName === 'H2' || 
          element.tagName === 'H3' || 
          element.tagName === 'H4' || 
          element.tagName === 'H5' || 
          element.tagName === 'H6' || 
          element.tagName === 'P') {
            // If the element is a heading or paragraph, it removes the font size style
            element.style.fontSize = ''; 
        }
    }
}
 
});


// Scroll Up Feature

// Listens for when the HTML finishes loading
document.addEventListener("DOMContentLoaded", function () {
  // Retrieves the button element with the ID scroll-up
  // This button is used to scroll the user back to the top of the page
  var buttonUp = document.getElementById("scroll-up");

  // Function to toggle the visibility of the scroll-up button
  function toggleButtonUp() {
    // If the user has scrolled more than 20 pixels down the page, the button is displayed
    // Otherwise, the button is hidden
    if (document.documentElement.scrollTop > 20) {
      buttonUp.style.display = "block";
    } else {
      buttonUp.style.display = "none";
    }
  }

  // Adds an event listener for the scroll event
  // When the user scrolls, the toggleButtonUp function is called
  // to determine whether the button should be displayed or hidden
  // based on the user's scroll position
  // This ensures that the button is displayed when the user scrolls down the page  20 pixels
  window.addEventListener("scroll", toggleButtonUp);
  // Adds an event listener for the click event
  buttonUp.addEventListener("click", function() {
    // When the button is clicked, the page is scrolled to the top
    // The scroll behavior is set to smooth to create a smooth scrolling effect
    // This ensures that the user is taken back to the top of the page
    document.documentElement.scrollTo({
      // The top of the page is scrolled to with a smooth behavior
      top: 0,
      behavior: "smooth"
    });
  });
});


