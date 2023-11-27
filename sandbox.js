/*--------------------------------------------------------------
  # Navbar Hamburger Menu
  --------------------------------------------------------------*/

const mobile_nav = document.querySelector(".button");
const nav_header = document.querySelector(".header");

const togglenavbar = () =>{
    nav_header.classList.toggle("active");
  
};

mobile_nav.addEventListener("click", ()=> togglenavbar());

/*--------------------------------------------------------------
  # Navbar Scrolling Effect
  --------------------------------------------------------------*/

const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
});

/*--------------------------------------------------------------
  # Counter
  --------------------------------------------------------------*/

const purecounters = document.querySelectorAll('.purecounter');
const purecounterSpeed = 100;

const purecounterObserver = new IntersectionObserver(items => {
  items.forEach(item => {
    if (item.isIntersecting) {
      const target = item.target;
      const startValue = +target.getAttribute('data-purecounter-start');
      const endValue = +target.getAttribute('data-purecounter-end');
      const duration = +target.getAttribute('data-purecounter-duration');
      const increment = (endValue - startValue) / (purecounterSpeed * duration);

      let currentValue = startValue;

      const animate = () => {
        target.innerText = Math.round(currentValue);
        currentValue += increment;

        if (currentValue <= endValue) {
          requestAnimationFrame(animate);
        } else {
          target.innerText = endValue;
        }
      };

      animate();
      purecounterObserver.unobserve(target);
    }
  });
});

purecounters.forEach(purecounter => purecounterObserver.observe(purecounter));

/*--------------------------------------------------------------
  # Card Swiper
  --------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

/*--------------------------------------------------------------
  # FAQ Accordion Button
  --------------------------------------------------------------*/

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

/*--------------------------------------------------------------
  # Navigation To Top
  --------------------------------------------------------------*/

let mybutton = document.getElementById("btn-back-to-top");

  window.onscroll = () => mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";

  mybutton.addEventListener("click", () => scrollToTop(1000));

  function scrollToTop(duration) {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const progress = Math.min(1, (currentTime - startTime) / duration);
      const easeInOutCubic = progress => progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, start - start * easeInOutCubic(progress));

      if (progress < 1) window.requestAnimationFrame(scroll);
    }

    window.requestAnimationFrame(scroll);
  }

/*--------------------------------------------------------------
  # Data-AOS
  --------------------------------------------------------------*/

  AOS.init();