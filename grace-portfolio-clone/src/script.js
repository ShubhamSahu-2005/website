// Scroll animation
document.addEventListener('DOMContentLoaded', () => {
  // Initial check for elements that are in viewport on page load
  const elementsToAnimate = document.querySelectorAll('[data-scroll="out"]');
  checkInView(elementsToAnimate);

  // Add scroll event listener
  window.addEventListener('scroll', () => {
    checkInView(elementsToAnimate);
  });
});

// Function to check if elements are in viewport
function checkInView(elements) {
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect();
    // If element is in viewport
    if (elementPosition.top < window.innerHeight - 100) {
      element.setAttribute('data-scroll', 'in');
    }
  });
}

// Add hover effect to work cards
const workCards = document.querySelectorAll('.work-card-gradient');
workCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
