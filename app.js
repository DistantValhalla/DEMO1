function removeElement(element) {
    if (typeof(element) === "string") {
      element = document.querySelector(element);
    }
    return function() {
      element.parentNode.removeChild(element);
    };
  }
  
const tl = gsap.timeline({defaults: {ease: "power1.out"}});
tl.to(".text", {y: "0%", duration: 1, stagger: 1.25});
tl.to(".slider", {y: "-100%", duration: 1, stagger: 1.5, delay: 1});
tl.to(".intro", {y: "-220%", duration: 1, stagger: 1.5}, "=-0.7");
tl.call(removeElement(".introF"))
tl.fromTo(".nav", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".cmain_logo", {opacity: 0}, {opacity: 1, duration: 1},);
tl.fromTo(".main_text", {opacity: 0}, {opacity: 1, duration: 1}, ("-=1"));
tl.fromTo(".boxed", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".footer-basic", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");


