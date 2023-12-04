// ---------swipper section start here

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
        centeredSlides: true,
         autoplay: {
        delay: 2500,
        disableOnInteraction: false,},
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  //   Breaking points 
  breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// ---------------------swipper section end here


// Add background color to navigation section on small screen
var nav = document.querySelector(".navbar");
function toggleClass() {
  nav.classList.toggle("background");
}

  // Scroll reveal for the whole body
  ScrollReveal({
    reset: true,
    distance: "150px",
    duration: 2500,
    delay: 400
  });
  

  ScrollReveal().reveal('.stagger',{delay: 300, origin: 'bottom', interval: 500});


  ScrollReveal().reveal('.from-right',{delay: 300, origin: 'right', });
  ScrollReveal().reveal('.from-left ',{delay: 400, origin: 'left',});
  ScrollReveal().reveal('.from-bottom ',{delay: 300, origin: 'bottom',});
  ScrollReveal().reveal('.from-top',{delay: 400, origin: 'top',});

  ScrollReveal().reveal('.graphics-text',{delay: 300, origin: 'right', });
  ScrollReveal().reveal('.graphicsstagger',{delay: 400, origin: 'left',});
  
  // Time line for preload site

let ani = gsap.timeline ()
ani.from(".navigationbar", { duration: 1, autoAlpha:0, scale: 2, });
ani.from(".button-blinks", { y: -200, duration: 1, autoAlpha:0,});
ani.from(".text-design ", {  y: 300, duration: 2, opacity:0, });


