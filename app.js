
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1, stagger: 1.5, delay: 1});
tl.to(".intro", {y: "-100%", duration: 1, stagger: 1.5}, "=-.8");
tl.fromTo(".main_text", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo("figure", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo(".nav", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo(".boxed", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".footer-basic", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");