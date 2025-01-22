(function () {
  const bookingInner = document.getElementById("booking_inner");
  let lastScrollY = window.scrollY; // Track the last scroll position
  let scrollTimeout; // Timer for detecting scroll stop
  let isHidden = false; // Track if the element is hidden

  // Function to hide the booking bar
  function hideBookingBar() {
    if (!isHidden) {
      bookingInner.style.transition = "bottom 1s ease, opacity 1s ease";
      bookingInner.style.bottom = "-100px"; // Slide it down
      bookingInner.style.opacity = "0"; // Fade it out
      isHidden = true;
    }
  }

  // Function to show the booking bar
  function showBookingBar() {
    if (isHidden) {
      bookingInner.style.bottom = "0";
      bookingInner.style.opacity = "1";
      isHidden = false;
    }
  }

  // Scroll event handler
  function onScroll() {
    clearTimeout(scrollTimeout); // Reset the timeout

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      hideBookingBar();
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      showBookingBar();
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;

    // Set timeout to show the bar after 3 seconds of no scrolling
    scrollTimeout = setTimeout(() => {
      showBookingBar();
    }, 3000);
  }

  // Attach scroll event listener
  window.addEventListener("scroll", onScroll);
})();










(function () {
  const mvElement = document.getElementById("mv"); // Get the #mv element
  const subContents = mvElement.children; // Get all child elements of #mv
  let lastScrollY = window.scrollY; // Track the last scroll position
  let isHidden = false; // Track if the content is hidden

  // Function to hide the subcontents one by one
  function fadeOutContent() {
    if (!isHidden) {
      Array.from(subContents).forEach((element, index) => {
        element.style.transition = `transform 0.8s ease ${
          index * 0.2
        }s, opacity 0.8s ease ${index * 0.2}s`;
        element.style.transform = "translateY(50px)"; // Move downward
        element.style.opacity = "0"; // Fade out
      });
      isHidden = true;
    }
  }

  // Function to show the subcontents one by one
  function fadeInContent() {
    if (isHidden) {
      Array.from(subContents).forEach((element, index) => {
        element.style.transition = `transform 0.8s ease ${
          index * 0.2
        }s, opacity 0.8s ease ${index * 0.2}s`;
        element.style.transform = "translateY(0)"; // Reset position
        element.style.opacity = "1"; // Fade in
      });
      isHidden = false;
    }
  }

  // Scroll event handler
  function onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      fadeOutContent();
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      fadeInContent();
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
  }

  // Attach scroll event listener
  window.addEventListener("scroll", onScroll);
})();
