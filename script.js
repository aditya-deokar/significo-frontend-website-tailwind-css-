function homePageAnimation() {
  gsap.set(".marqueeContainer", {
    scale: "5",
    x: 560,
    y: -240

  })


  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      scroller: "body",
      // markers: true, 
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      // pin: true
    }
  });

  tl.to(".vid", {
    '--clip': "0%",
    ease: Power2,
  },'b');
  tl.to(".title", {
    '--clip': "0%",
    ease: Power2,
  },'b');
  tl.to(".marqueeContainer", {
    delay: -.24,
    scale: 1,
    x: 0,
    y: 0,
  }, 'a')
  tl.to(".right-row", {

    xPercent: 20,

  }, 'a')
  tl.to(".left-row", {

    xPercent: -10,

  }, 'a')

}


function realPageAnimation() {

  gsap.to(".slide", {

    scrollTrigger: {
      trigger: ".real",
      scroller: "body",
      // markers: true,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      // pin: true
    },
    xPercent: -300,
    ease:Power4,


  })


}


function teamPageAnimation(){
  document.querySelectorAll(".listElem").forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
      gsap.to(this.querySelector(".picture"),{
        opacity:1,
        ease:Power4,
        duration:.5
      })

      gsap.to(this.querySelector(".blueElem"),{
        height:"100%",
        ease:Power4,
      })


    });
    elem.addEventListener("mouseleave",function(dets){
      gsap.to(this.querySelector(".picture"),{
        opacity:0,
        ease:Power4,
        duration:.5
      })

      gsap.to(this.querySelector(".blueElem"),{
        height:"0%",
        ease:Power2,
      })
    });
  })
}

function revivePageAnimation(){

  var clutter="";
  document.querySelector(".text-para").textContent.split("").forEach(function(elem){
    
      clutter+=`<span>${elem}</span>`
    
  });

  document.querySelector(".text-para").innerHTML=clutter;

  gsap.set(".text-para span",{
    opacity:0.1,
  })

  gsap.to(".text-para span",{
    opacity:1,
    stagger:0.03,
    ease:Power4,
    scrollTrigger:{
      trigger:".review",
      scroller:"body",
      start:"top 50%",
      end:"70% 100%",
      // markers:true,
      scrub:2
    }
  })


}


homePageAnimation();
realPageAnimation();
teamPageAnimation();
revivePageAnimation();