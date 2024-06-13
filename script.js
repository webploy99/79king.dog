// Show and hide menu

    function OpenNav(){
        document.getElementById("Nav").style.width = "100%";
    }
    function CloseNav(){
        document.getElementById("Nav").style.width = "0%";
    }

    // url
    function url() {
        location.href="https://www.hay88.one/?inviteCode=3266982";
    }

    // ==========================================
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-128px";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topScroll() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    // ===============splide slider=====================
    
    document.addEventListener("DOMContentLoaded", function () {
        var splide = new Splide(".splide", {
          perPage: 1,
          gap: "15px",
          type: "loop",
          autoplay: true,
          interval: 3000,
          snap: true,
          arrows: false,
        });
        splide.mount();
    });

    // ===============swiper slider=====================
    
    var swiper = new Swiper(".cubeSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      interval: 1000,
      grabCursor: true,
      pauseOnMouseEnter: true,
      breakpoints: {
        448: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });