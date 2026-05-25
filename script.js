// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Counter Functionality
let counterValue = 0;
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateCounter() {
  counterDisplay.textContent = counterValue;
  counterDisplay.style.animation = 'none';
  setTimeout(() => {
    counterDisplay.style.animation = 'slideInUp 0.3s ease-out';
  }, 10);
}

incrementBtn.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

decrementBtn.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  counterValue = 0;
  updateCounter();
});

// Color Picker
const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const colorValue = document.getElementById('colorValue');

colorPicker.addEventListener('change', (e) => {
  const color = e.target.value;
  colorDisplay.style.backgroundColor = color;
  colorValue.textContent = color.toUpperCase();
});

colorPicker.addEventListener('input', (e) => {
  colorDisplay.style.backgroundColor = e.target.value;
});

// Initialize color display
colorDisplay.style.backgroundColor = colorPicker.value;

// Range Slider
const rangeSlider = document.getElementById('rangeSlider');
const sliderValue = document.getElementById('sliderValue');

rangeSlider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
});

// Progress Bar
const progressBtn = document.getElementById('progressBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

progressBtn.addEventListener('click', () => {
  let progress = 0;
  progressBtn.disabled = true;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      progressBtn.disabled = false;
    }
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';
  }, 200);
});

// Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
const textToType = 'This is an interactive web page with smooth animations, dark mode support, and engaging elements!';
let typewriterIndex = 0;

function typewriter() {
  if (typewriterIndex < textToType.length) {
    typewriterElement.textContent += textToType.charAt(typewriterIndex);
    typewriterIndex++;
    setTimeout(typewriter, 50);
  }
}

window.addEventListener('load', () => {
  setTimeout(typewriter, 500);
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Show success message
  alert('Thank you for your message! We\'ll get back to you soon.');
  contactForm.reset();
});

// CTA Button Animations
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach((button) => {
  button.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = 'pulse 0.5s ease-out';
    }, 10);
  });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const cards = document.querySelectorAll('.feature-card, .demo-box');
cards.forEach((card) => {
  card.style.opacity = '0';
  observer.observe(card);
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.style.color = 'var(--text-primary)';
        if (link.getAttribute('href') === '#' + sectionId) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

// Log to console
console.log('Interactive web page loaded successfully! 🎉');
console.log('Features: Dark mode, animations, interactive elements, and responsive design.');