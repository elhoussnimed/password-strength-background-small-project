const bgImage = document.querySelector(".bgImage");
const passwordInput = document.querySelector(".input #password");

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length >= 10) {
        bgImage.style.cssText = `filter: blur(0px)`;  
    } else {
        bgImage.style.cssText = `filter: blur(${10 - passwordInput.value.length}px)`;
    };
});
