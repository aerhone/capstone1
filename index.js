function initializeTypingEffect() {
    let typingEffect = new Typed(".labelTitle", {
        strings: ["Full Stack Web Developer", "Mechanical Engineer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500
    });
}

// Delay the initialization of the typing effect
setTimeout(initializeTypingEffect, 1500);


let loader = document.querySelector("#preloader")
window.addEventListener("load", function(){
    loader.style.display = "none"
})