// Basic JavaScript for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const dynamicText = document.getElementById('dynamic-text');
  const text = ["Software Developer", "Coder"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () =>{
    const currentText = text[index];


    if(isDeleting){
        dynamicText.textContent = currentText.substring(0, charIndex--);
    }else{
        dynamicText.textContent = currentText.substring(0, charIndex++);
    }

    if(!isDeleting && charIndex === currentText.length){
        isDeleting = true;
        setTimeout(type, 1000);
    }else if(isDeleting && charIndex === 0){
        isDeleting = false;
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }else {
        setTimeout(type, isDeleting ? 50 : 100)
    }
  }

  document.addEventListener('DOMContentLoaded', type)

  // JavaScript to add animations on scroll
  document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it is visible
            }
        });
    }, options);

    fadeInElements.forEach((element) => {
        observer.observe(element); // Start observing each fade-in element
    });
});

  

  