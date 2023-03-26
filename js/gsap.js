


const minWidth768 = () => {
   gsap.from('.left', {
      scrollTrigger: {
         trigger: '.header',
         start: 'top',
         scrub: true,
         // markers: true,
         //  pin: true,
      },
      xPercent: '-100',
   })
   
   gsap.from('.right', {
      scrollTrigger: {
         trigger: '.header',
         start: 'top',
         end: "bottom", // end: "100%+=100",
         scrub: true, // позволяет плавно изменять анимацию
         // markers: true,
         //  pin: true,
      },
      xPercent: '100',
   })

}

const maxWidth768 = () => {
   gsap.from('.col_coffee .item', {
      scrollTrigger: {
         trigger: '.coffee',
         start: 'top 75%',
         end: 'bottom bottom',
         scrub: 3,
         // markers: true,
         // pin: true,
      },
      opacity: 0,
      stagger: 0.25,
      xPercent: "-30",
   })
}

const resizeGsap = () => {
   if (window.matchMedia('(min-width: 768px)').matches) {
      minWidth768()
   }
   if (window.matchMedia('(max-width: 768px)').matches) {
      maxWidth768()
   }
}

window.addEventListener("resize", resizeGsap);
resizeGsap()


gsap.from('.menu li', { 
   yPercent: -100,
   opacity: 0,
   stagger: 0.15,
   delay: 0.5
})

gsap.from('.logo', { 
   yPercent: -100,
   duration: 2,
   opacity: 0,
   delay: 0.5
})

gsap.from('.cover', { 
   yPercent: 20,
   duration: 1.5,
   opacity: 0,
   delay: 0.5
})

gsap.to('.bg_img_header', {
   scrollTrigger: {
      trigger: '.bg_img',
      start: 'top top',
      scrub: true,
      // markers: true
      // pin: true,
   },
   scale: 1.2,
   yPercent: '30',
})


gsap.to('.cover', {
   scrollTrigger: {
      trigger: '.bg_img',
      start: '10% top',
      scrub: true,
      // markers: true
      // pin: true,
   },
   scale: 0.7,
})


//coffee

gsap.from('.img_coffee', {
   scrollTrigger: {
      trigger: '.header',
      start: 'top top',
      end: '110%',
      scrub: true,
      // markers: true,
      //  pin: true,
   },
   opacity: 0.5,
   yPercent: '80',
})




// book

gsap.from('.bg_img_book', {
   scrollTrigger: {
      trigger: '.book',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
      // markers: true
      // pin: true,
   },
   scale: 1.2,
   yPercent: '-50',
})

gsap.to('.bg_img_book', {
   scrollTrigger: {
      trigger: '.book',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      // markers: true,
      // pin: true,
   },
   y: '100',
})

gsap.from('.block_info_book', {
   scrollTrigger: {
      trigger: '.book',
      start: 'center bottom',
      end: '130% bottom',
      scrub: true,
      // markers: true
      // pin: true,
   },
   opacity: 0.6
})

gsap.to('.block_info_book', {
   scrollTrigger: {
      trigger: '.book',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      // markers: true,
      // pin: true,
   },
   scale: 0.8,
   yPercent: '10',
})



gsap.from('.explore .block_info', {
   scrollTrigger: {
      trigger: '.explore',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      // markers: true,
      // pin: true,
   },
   scale: 0.6
})


gsap.from('.card', {
   scrollTrigger: {
      trigger: '.explore',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 3,
      // markers: true,
      // pin: true,
   },
   opacity: 0,
   stagger: 0.25,
   xPercent: "30",
})


gsap.from('.reviews .block_info', {
   scrollTrigger: {
      trigger: '.slides',
      start: 'center bottom',
      end: 'center center',
      scrub: true,
      // markers: true,
      // pin: true,
   },
   scale: 0.8,
   opacity: 0,
   yPercent: "10",
})





gsap.from('.news .block_info', {
   scrollTrigger: {
      trigger: '.news',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      // markers: true,
      // pin: true,
   },
   opacity: 0,
   scale: 0.6
})

gsap.from('.card_new', {
   scrollTrigger: {
      trigger: '.news',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 3,
      // markers: true,
      // pin: true,
   },
   opacity: 0,
   stagger: 0.25,
   xPercent: "-60",
})

gsap.from('.connection .block_info', {
   scrollTrigger: {
      trigger: '.connection',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
      // pin: true,
   },
   scale: 0.6,
   yPercent: "-20",
   opacity: 0,
})


gsap.from('.box_footer', {
   scrollTrigger: {
      trigger: '.footer',
      start: 'top bottom',
      end: '100% bottom',
      scrub: 3,
      // markers: true,
      // pin: true,
   },
   opacity: 0,
})