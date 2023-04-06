// Product Swiper

var swiper = new Swiper(".product .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 1,
        depth: 80,
        modifier: 1,
        slideShadows: true,
    },
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    navigation: {
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    parallax: true,
});

// Products-Box 

gsap.from(".pdbox .screen-1", {
    scrollTrigger: {
        trigger: ".pdbox .screen-1",
        // scroller:"body",
        // markers:true,
        // start: "top 90%",
        start: "top 100%",
        end: "top 20%",
        // end: "bottom 25%",
        scrub: 3,
    },
    opacity: 0,
    x: -80,
    delay: .5,
    ease: Power1.easeInOut,
    duration: 1
})

gsap.from(" .pdbox .screen-2", {
    scrollTrigger: {
        trigger: ".pdbox .screen-2",
        // start: "top 80%",
        // end: "bottom 20%",
        start: "top 100%",
        end: "top 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    opacity: 0,
    y: -80,
    duration: 1,
    delay: .5,
})
gsap.from(" .pdbox .screen-3", {
    scrollTrigger: {
        trigger: ".pdbox .screen-3",
        // start: "top 80%",
        start: "top 100%",
        end: "top 20%",
        // end: "bottom 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: 80,
    duration: 1,
    delay: .5,
    opacity: 0
})

gsap.from(".pdbox .screen-4", {
    scrollTrigger: {
        trigger: ".pdbox .screen-4",
        // start: "top 80%",
        start: "top 80%",
        end: "top 20%",
        // end: "bottom 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: -80,
    duration: 1,
    delay: .5,
    opacity: 0
})

gsap.from(" .pdbox .screen-5", {
    scrollTrigger: {
        trigger: ".pdbox .screen-5",
        // start: "top 80%",
        start: "top 100%",
        end: "top 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    y: -80,
    duration: 1,
    delay: .5,
    opacity: 0
})

gsap.from(".pdbox .screen-6", {
    scrollTrigger: {
        trigger: ".pdbox .screen-6",
        // start: "top 80%",
        start: "top 80%",
        end: "top 20%",
        // end: "bottom 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: 80,
    duration: 1,
    delay: .5,
    opacity: 0
})

gsap.from(".pdbox .screen-7", {
    scrollTrigger: {
        trigger: ".pdbox .screen-7",
        // start: "top 80%",
        start: "top 70%",
        end: "top 20%",
        // end: "bottom 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: -80,
    duration: 1,
    delay: .5,
    opacity: 0
})

gsap.from(" .pdbox .screen-8", {
    scrollTrigger: {
        trigger: ".pdbox .screen-8",
        // start: "top 80%",
        start: "top 100%",
        end: "top 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    y: -80,
    duration: 1,
    delay: .5,
    opacity: 0
})

gsap.from(".pdbox .screen-9", {
    scrollTrigger: {
        trigger: ".pdbox .screen-9",
        // start: "top 80%",
        start: "top 100%",
        end: "top 20%",
        // end: "bottom 20%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: 80,
    duration: 1,
    delay: .5,
    opacity: 0
})
gsap.from("#content-left", {
    scrollTrigger: {
        trigger: "#content-left",
        // start: "top 80%",
        start: "top 30%",
        end: "top 70%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: -60,
    duration: 1.5,
    delay: .5,
    opacity: 0
})
gsap.from("#content-right", {
    scrollTrigger: {
        trigger: "#content-right",
        // start: "top 80%",
        start: "top 30%",
        end: "top 70%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    x: 60,
    duration: 1.5,
    delay: .5,
    opacity: 0
})
gsap.from("#mobile-frame", {
    scrollTrigger: {
        trigger: "#mobile-frame",
        // start: "top 80%",
        start: "top 30%",
        end: "top 70%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    y: -60,
    duration: 3,
    delay: .5,
    opacity: 0
})
gsap.from("#Review-Section h1", {
    scrollTrigger: {
        trigger: "#Review-Section",
        // start: "top 80%",
        start: "top 80%",
        end: "top 70%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    y: -60,
    duration: 2,
    delay: .5,
    opacity: 0
})
gsap.from("#Review-Section .mySwiper", {
    scrollTrigger: {
        trigger: "#Review-Section",
        // start: "top 80%",
        start: "top 30%",
        end: "30% 80%",
        scrub: 3,
        // markers:true
    },
    ease: Power1.easeInOut,
    y: 80,
    duration: 3,
    delay: .5,
    opacity: 0
})




// FROM THIS JAVASCRIPT CODE IS STARTED WHERE ALL THE ANIMATION IS DONE

// Card 1
// let btn1 = document.querySelector(".btn1");

let btn1 = document.querySelector(".btn1");
let backbutton = document.querySelector(".next-screen i");
let tl = gsap.timeline({ paused: true, reverse: true });
btn1.addEventListener("click", function (e) {
    tl.play()
})
backbutton.addEventListener("click", function (e) {
    // console.log("hey");
    tl.reverse();
})
//screen 1 arrow rotate 
tl.to(".btn1 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl.to(".btn1 .ri-arrow-right-s-line", {
    duration: 0.2,
    y: -10,
    opacity: 0
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl.to(".btn1", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl.to(".scn-1top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl.to(".scn-1top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl.to(".btn1", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl.from(".lad", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl.to(".lad", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl.from(".next-screen", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl.from(".next-screen .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl.from(".next-screen h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl.from(".next-screen-header", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl.from(".next-screen p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl.from(".next-screen h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
// tl.from(".next-screen #by", {
//   ease: "power1.inOut",
//   scale: 0,
//   opacity: 0,
//   duration: 0.3
// })
tl.from(".next-screen .prbxibw .buy1", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl.from(".next-screen .prbxibw .wish1", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl.to(".next-screen", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl.to(".next-screen", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})

/*------------------------------------------------------------------------------------------*/
let tl2 = gsap.timeline({ paused: true, reverse: true });
let btn2 = document.querySelector(".btn2");
let backbutton2 = document.querySelector(".next-screen1>i");
btn2.addEventListener("click", function () {
    tl2.play();
})
backbutton2.addEventListener("click", function () {
    tl2.reverse();
})
tl2.to(".btn2 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl2.to(".btn2 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl2.to(".btn2", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl2.to(".scn-2top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl2.to(".scn-2top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl2.to(".btn2", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl2.from(".lad1", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl2.to(".lad1", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl2.from(".next-screen1", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl2.from(".next-screen1 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl2.from(".next-screen1 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl2.from(".next-screen-header1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl2.from(".next-screen1 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl2.from(".next-screen1 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl2.from(".next-screen1 .buy2", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl2.from(".next-screen1 .wish2", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl2.to(".next-screen1", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl2.to(".next-screen1", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*---------------------------------------------------------------------------------------------------------------*/
let tl3 = gsap.timeline({ paused: true, reverse: true });
let btn3 = document.querySelector(".btn3");
let backbutton3 = document.querySelector(".next-screen2>i");
btn3.addEventListener("click", function () {
    tl3.play();
})
backbutton3.addEventListener("click", function () {
    tl3.reverse();
})
tl3.to(".btn3 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl3.to(".btn3 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl3.to(".btn3", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl3.to(".scn-3top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl3.to(".scn-3top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl3.to(".btn3", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl3.from(".lad3", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl3.to(".lad3", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl3.from(".next-screen2", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl3.from(".next-screen2 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl3.from(".next-screen2 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl3.from(".next-screen-header2", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl3.from(".next-screen2 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl3.from(".next-screen2 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl3.from(".next-screen2 .buy3", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl3.from(".next-screen2 .wish3", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl3.to(".next-screen2", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl3.to(".next-screen2", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*-------------------------------------------4 section start------------------------------------------------------------------------------------------*/
let tl4 = gsap.timeline({ paused: true, reverse: true });
let btn4 = document.querySelector(".btn4");
let backbutton4 = document.querySelector(".next-screen3>i");
btn4.addEventListener("click", function () {
    tl4.play();
})
backbutton4.addEventListener("click", function () {
    tl4.reverse();
})
tl4.to(".btn4 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl4.to(".btn4 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl4.to(".btn4", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl4.to(".scn-4top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl4.to(".scn-4top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl4.to(".btn4", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl4.from(".lad4", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl4.to(".lad4", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl4.from(".next-screen3", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl4.from(".next-screen3 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl4.from(".next-screen3 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl4.from(".next-screen-header3", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl4.from(".next-screen3 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl4.from(".next-screen3 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl4.from(".next-screen3 .buy4", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl4.from(".next-screen3 .wish4", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl4.to(".next-screen3", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl4.to(".next-screen3", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*---------------------------------5th Section start------------------------------------------------------------------------*/
let tl5 = gsap.timeline({ paused: true, reverse: true });
let btn5 = document.querySelector(".btn5");
let backbutton5 = document.querySelector(".next-screen4>i");
btn5.addEventListener("click", function () {
    tl5.play();
})
backbutton5.addEventListener("click", function () {
    tl5.reverse();
})
tl5.to(".btn5 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl5.to(".btn5 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl5.to(".btn5", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl5.to(".scn-5top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl5.to(".scn-5top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl5.to(".btn5", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl5.from(".lad5", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl5.to(".lad5", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl5.from(".next-screen4", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl5.from(".next-screen4 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl5.from(".next-screen4 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl5.from(".next-screen-header4", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl5.from(".next-screen4 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl5.from(".next-screen4 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl5.from(".next-screen4 .buy5", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl5.from(".next-screen4 .wish5", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl5.to(".next-screen4", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl5.to(".next-screen4", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*--------------------------------------------6th-------------------------------------------------*/
let tl6 = gsap.timeline({ paused: true, reverse: true });
let btn6 = document.querySelector(".btn6");
let backbutton6 = document.querySelector(".next-screen5>i");
btn6.addEventListener("click", function () {
    tl6.play();
})
backbutton6.addEventListener("click", function () {
    tl6.reverse();
})
tl6.to(".btn6 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl6.to(".btn6 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl6.to(".btn6", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl6.to(".scn-6top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl6.to(".scn-6top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl6.to(".btn6", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl6.from(".lad6", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl6.to(".lad6", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl6.from(".next-screen5", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl6.from(".next-screen5 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl6.from(".next-screen5 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl6.from(".next-screen-header5", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl6.from(".next-screen5 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl6.from(".next-screen5 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl6.from(".next-screen5 .buy6", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl6.from(".next-screen5 .wish6", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl6.to(".next-screen5", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl6.to(".next-screen5", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*-------------------------------------------------------------------------------------------------------*/
let tl7 = gsap.timeline({ paused: true, reverse: true });
let btn7 = document.querySelector(".btn7");
let backbutton7 = document.querySelector(".next-screen6>i");
btn7.addEventListener("click", function () {
    tl7.play();
})
backbutton7.addEventListener("click", function () {
    tl7.reverse();
})
tl7.to(".btn7 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl7.to(".btn7 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl7.to(".btn7", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl7.to(".scn-7top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl7.to(".scn-7top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl7.to(".btn7", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl7.from(".lad7", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl7.to(".lad7", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl7.from(".next-screen6", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl7.from(".next-screen6 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl7.from(".next-screen6 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl7.from(".next-screen-header6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl7.from(".next-screen6 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl7.from(".next-screen6 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl7.from(".next-screen6 .buy7", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl7.from(".next-screen6 .wish7", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl7.to(".next-screen6", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl7.to(".next-screen6", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*----------------------------------------------------------------------------------------------------------*/
let tl8 = gsap.timeline({ paused: true, reverse: true });
let btn8 = document.querySelector(".btn8");
let backbutton8 = document.querySelector(".next-screen7>i");
btn8.addEventListener("click", function () {
    tl8.play();
})
backbutton8.addEventListener("click", function () {
    tl8.reverse();
})
tl8.to(".btn8 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl8.to(".btn8 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl8.to(".btn8", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl8.to(".scn-8top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl8.to(".scn-8top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl8.to(".btn8", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl8.from(".lad8", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl8.to(".lad8", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl8.from(".next-screen7", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl8.from(".next-screen7 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl8.from(".next-screen7 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl8.from(".next-screen-header7", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl8.from(".next-screen7 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl8.from(".next-screen7 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl8.from(".next-screen7 .buy8", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl8.from(".next-screen7 .wish8", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl8.to(".next-screen7", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl8.to(".next-screen7", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})
/*-------------------------------------------------------------------------------------------*/
let tl9 = gsap.timeline({ paused: true, reverse: true });
let btn9 = document.querySelector(".btn9");
let backbutton9 = document.querySelector(".next-screen8>i");
btn9.addEventListener("click", function () {
    tl9.play();
})
backbutton9.addEventListener("click", function () {
    tl9.reverse();
})
tl9.to(".btn9 .ri-arrow-right-s-line", {
    ease: "power1.inOut",
    rotate: 90
})
//screen 1 Arrow Rotatation hide
tl9.to(".btn9 .ri-arrow-right-s-line", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl9.to(".btn9", {
    ease: "power1.inOut",
    yPercent: 114,
})
tl9.to(".scn-9top", {
    ease: "power1.inOut",
    height: 380
}, 0.6)

tl9.to(".scn-9top img", {
    ease: "power1.inOut",
    scale: 1.2,
    yPercent: 40
}, 0.8)

//Screen 1 Article Fetching
tl9.to(".btn9", {
    ease: "power1.inOut",
    yPercent: 130,
    borderRadius: 0,
    scaleX: 10,
    scaleY: 2.6,
}, 1.1)

tl9.from(".lad9", {
    ease: "power1.inOut",
    opacity: 0,
    y: 50,
})
tl9.to(".lad9", {
    ease: "power1.inOut",
    opacity: 0,
    x: 200,
    delay: 0.5
})
tl9.from(".next-screen8", {
    ease: "power1.inOut",
    yPercent: 100,
    duration: 0.5
})

tl9.from(".next-screen8 .ri-arrow-left-s-line", {
    ease: "power1.inOut",
    xPercent: -250,
    duration: 0.5
})
tl9.from(".next-screen8 h1", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl9.from(".next-screen-header8", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl9.from(".next-screen8 p", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl9.from(".next-screen8 h6", {
    ease: "power1.inOut",
    scale: 0,
    opacity: 0,
    duration: 0.3
})
tl9.from(".next-screen8 .buy9", {
    ease: "power1.inOut",
    x: -150,
    duration: 0.3,
})
tl9.from(".next-screen8 .wish9", {
    ease: "power1.inOut",
    x: 150,
    duration: 0.3
})
tl9.to(".next-screen8", {
    ease: "power1.inOut",
    yPercent: -10,
    duration: 1
})
tl9.to(".next-screen8", {
    ease: "power1.inOut",
    yPercent: 0,
    duration: 1
})