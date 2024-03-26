const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiIndex = 0;

document.addEventListener("keydown", function (event) {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.backgroundColor = "#0062ff";
            document.querySelector("h1").textContent = "La Plateforme !";
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});