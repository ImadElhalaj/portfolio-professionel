// Mode sombre / clair
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// Effet dactylo
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const words = ['Web Developer', 'UI/UX Designer', 'Frontend Expert'];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (!typedText) return;
  
  if (typing) {
    if (charIndex < words[wordIndex].length) {
      typedText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 200);
    }
  }
}
document.addEventListener('DOMContentLoaded', typeEffect);

// Scroll fluide
document.querySelectorAll('nav.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  });
});

// Couleur dynamique
const colorIcon = document.querySelector('.color-settings .fa-cog');
const colorSettings = document.getElementById('color-settings');

if (colorIcon && colorSettings) {
  colorIcon.addEventListener('click', () => {
    colorSettings.classList.toggle('active');
  });
}

// Changement de couleur primaire
document.querySelectorAll('.color-circle').forEach(circle => {
  circle.addEventListener('click', () => {
    const newColor = circle.dataset.color;
    document.documentElement.style.setProperty('--primary-color', newColor);
    
    // Fermer le menu après sélection
    if (colorSettings) {
      colorSettings.classList.remove('active');
    }
  });
});

// Animation de la section À propos
const aboutSection = document.querySelector('.about-container');

if (aboutSection) {
  window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.2;

    if (sectionTop < screenHeight) {
      aboutSection.classList.add('show');
    }
  });
}

// Active link detection
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// Initialisation de Swiper
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
  }
});