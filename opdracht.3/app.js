






function animateDiv1() {
    let timeline = gsap.timeline({
        defaults: {
            duration: 3,
            ease: "expo.inOut" // Easing pentru fluiditate
        }
    });
    timeline.from(".div1", { x: -300 }); // Animație de intrare pentru div1
    return timeline; // Returnează linia temporală
}

function animateDiv2() {
    let timeline = gsap.timeline({
        defaults: {
            duration: 2,
            ease: "bounce.out" // Easing bounce pentru div2
        }
    });
    timeline.from(".div2", { y: -300 }); // Animație de intrare pentru div2
    return timeline; // Returnează linia temporală
}

function animateDiv3() {
    let timeline = gsap.timeline({
        defaults: {
            duration: 3,
            ease: "elastic.out" // Easing elastic pentru div3
        }
    });
    timeline.from(".div3", { rotation: 360 }); // Animație de intrare pentru div3
    return timeline; // Returnează linia temporală
}

function animateDiv4() {
    let timeline = gsap.timeline({
        defaults: {
            duration: 3,
            ease: "power2.inOut" // Easing pentru div4
        }
    });
    timeline.from(".div4", { scale: 0 }); // Animație de intrare pentru div4
    return timeline; // Returnează linia temporală
}

function animateDiv5() {
    let timeline = gsap.timeline({
        defaults: {
            duration: 2,
            ease: "sine.inOut" // Easing pentru div5
        }
    });
    timeline.from(".div5", { opacity: 0 }); // Animație de intrare pentru div5
    return timeline; // Returnează linia temporală
}

function animateDiv6() {
    let timeline = gsap.timeline({
        defaults: {
            duration: 2,
            ease: "back.out(1.7)" // Easing back pentru div6
        }
    });
    timeline.from(".div6", { x: 300 }); // Animație de intrare pentru div6
    return timeline; // Returnează linia temporală
}

function animateMain() {
    let mainTimeline = gsap.timeline(); // Creează o linie temporală principală
    mainTimeline
        .add(animateDiv1())
        .add(animateDiv2(), "-=0.5") // Începe animația div2 cu 0.5 secunde înainte de a termina animația div1
        .add(animateDiv3(), "-=0.5") // Începe animația div3 cu 0.5 secunde înainte
        .add(animateDiv4(), "-=0.5") // Începe animația div4 cu 0.5 secunde înainte
        .add(animateDiv5(), "-=0.5") // Începe animația div5 cu 0.5 secunde înainte
        .add(animateDiv6(), "-=0.5"); // Începe animația div6 cu 0.5 secunde înainte

        return mainTimeline;
}

// Invocă funcția principală de animație
let animation = animateMain();

document.querySelector(".play").onclick = ()=> animation.play();
document.querySelector(".pause").onclick = ()=> animation.pause();
document.querySelector(".reverse").onclick = ()=> animation.reverse();
document.querySelector(".restart").onclick = ()=> animation.restart();