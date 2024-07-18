// Navugation 

var nav = gsap.timeline();
nav.to(".navigation", {
    y: 60,
    opacity: 1,
    duration: 2,
    delay: 1,
    ease: "Expo.easeInOut"
})
    .to(".main_page #p", {
        x: 30,
        opacity: .5,
        duration: 1,
        delay: .2,
        ease: "Expo.easeInOut"
    })
    .to(".main_page #p1", {
        x: 30,
        opacity: .5,
        duration: 1,
        delay: .1,
        ease: "Expo.easeInOut"
    })
    .to(".particle", {
        opacity: 1
    })

document.querySelector("#menu")
    .addEventListener("click", function () {
        gsap.to(".center", {
            y: 65,
            ease: Power1.easeInOut,
            delay: .7
        })
        gsap.to("#menu", {
            opacity: 0,
        })
    })

$('#mtx').textillate({ initialDelay: 1000, in: { effect: 'fadeInUp' }, delay: 10, delayScale: 5 });

var searchFlag = 0;
document.querySelector("#search")
    .addEventListener("click", function () {
        if (searchFlag === 0) {
            gsap.to(".left input", {
                opacity: 1,
                ease: Power1.easeInOut,
                delay: .7,
            })
            searchFlag = 1;
        }
        else {
            gsap.to(".left input", {
                opacity: 0,
                ease: Power1.easeInOut,
                delay: .7
            })
            searchFlag = 0;
        }
    })


gsap.to("#bike", {
    scrollTrigger: {
        trigger: ".product",
        start: "top 100%",
        end: "top 50%",
        scrub: 5,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: 840,
    duration: 1,
    delay: 3,
    opacity: 0
})


// Register / Login 

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btn-popup')
const closeform = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})

closeform.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})

// About 

var swiper = new Swiper("#Review-Section .mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    parallax: true,
});
