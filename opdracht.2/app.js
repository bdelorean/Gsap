let btn = document.querySelector("button")


gsap.to(".circle-red",{x:700,y:0, scale:2, backgroundColor:"orange", duration:5, repeat:-1, yoyo:true});
gsap.fromTo(".circle-yellow",{x:700,y:0,},{x:0, y:0,scale:2, backgroundColor:"yellow", duration:5});
gsap.fromTo(".circle-blue",{x:500,y:0,},{x:100, y:50,scale:2,  duration:5});

// Hover in 
btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.5, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  });
  
  // Hover out 
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.5, ease: "bounce.out" });
  });