gsap.from(".img1", { x: 400, y: 200, scale: 2, duration: 3 });
gsap.from(".img2", { x: 200, y: 400, scale: 2, duration: 3 });
gsap.from(".img3", { x: 400, y: 200, scale: 2, duration: 3 });
gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 5 });
gsap.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });
gsap.fromTo(
  ".navbar",
  { y: "-100%" }, // Start position (out of view)
  { y: "0%", duration: 1, ease: "power2.out" } // End position (fixed at the top)
);
