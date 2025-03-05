/* 
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('.nav').addClass('sticky')
  }
  else{
    $('.nav').removeClass('sticky')
  }
}); */

/* NavBar */

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-167px";
  }
  
  prevScrollpos = currentScrollpos;
}

/* _________ */


window.onload = function() {
  document.querySelector(".preloader").style.display = "none";
}

  /* Back To Top Btn */

  let $backToTop = $(".back-to-top");
  $backToTop.hide();
  
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });
  
  $backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 1000);
  });


//___

const swiper = new Swiper(".myslider", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  
  loop: true,
  autoHeight: true,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".custom-btn ion-icon, .custom-btn",
  },
});


/* Scroll Down Animation Btn */

$(document).ready(function($) {
  $('.mouseDown').click(function(e) {
    e.preventDefault();
    $id = $(this).attr('href');
    $('body,html').animate({ scrollTop: $($id).offset().top }, 1000);
  });
});

/* _________ */




/* Google Translate */

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage:'az', includedLanguages : 'en'}, 'google_translate_element');
}

/* _________ */



/* Number Increment */

let a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
      countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    a = 1;
  }
});

/* Number Increment END */

/* Brands slider */

const swiper3 = new Swiper(".slider-3", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

/* Brands slider END */









/* const aboutUsSection = document.querySelector('.about_us_section');


eventListeners();

function eventListeners() {
  window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
  });
};

function loadJSON() {
  fetch('home_about.json')
  .then(response => response.json())
  .then(data => {
    let html = '';
    data.forEach(home_about => {
      html += `
      <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="1000"
            class="about_text_title">
          <h2>${home_about.title}</h2>
          <h1>${home_about.title1}</h1>
          <p>${home_about.text}</p>
          <button class="button" role="button"><a href="about.html">${home_about.button}</a></button>
        </div>
        <div
        data-aos="zoom-in-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="img_about_sec">
        <div class="logo logo_about_us_page"><a href="index.html"><img src="./images/logolimondental.png" alt=""></a></div>
  </div>
      `;
    });
    
    aboutUsSection.innerHTML = html;
  });
} */









