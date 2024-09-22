function homePageAnimation() {
  gsap.set(".marqueeContainer", {
    scale: "5",
    x: -70,
    y: -240

  })

  gsap.from(".title",{
    y:200,
    opacity:0,
    ease:Power2,
    duration:1.4
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
  document.querySelector(".text-para").textContent.split(" ").forEach(function(elem){
    
      clutter+=`<span> ${elem}</span>`
    
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

function explorePageAnimation(){
  gsap.to(".SecondCon , .firstCon",{
    scrollTrigger:{
      start:"top 40%",
      end:"bottom bottom",
      trigger:".explore",
      scroller:"body",
      // markers:true,
      scrub:true,
    },
    y:0,
    ease:Power2

  })
}


function backgroundChangingAnimation(){
  document.querySelectorAll(".section").forEach(function(elem){
    ScrollTrigger.create({
      trigger:elem,
    
      start:"top 50%",
      end:"bottom 50%",
      // markers:true,

      onEnter:function(){
        document.body.setAttribute("theme",elem.dataset.color);
      },
      onEnterBack:function(){
        document.body.setAttribute("theme",elem.dataset.color);
      }

    })
  })
}



function locomotive(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

locomotive();
homePageAnimation();
realPageAnimation();
teamPageAnimation();
revivePageAnimation();
explorePageAnimation();
backgroundChangingAnimation();