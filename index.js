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


document.addEventListener("DOMContentLoaded", function() {
    // Continuously check for the document readiness
    var checkReadyState = setInterval(function() {
        if (document.readyState === "complete") {
            // If the document is fully loaded, clear the interval and hide the preloader
            clearInterval(checkReadyState);
            var preloader = document.getElementById("preloader");
            preloader.style.display = "none";

            // Add any additional initialization code here that you want to run after the document is fully loaded
        } else {
            // If the document is not fully loaded, display the preloader
            var preloader = document.getElementById("preloader");
            preloader.style.display = "block";
        }
    }, 100); // Check every 100 milliseconds (adjust as needed)
});