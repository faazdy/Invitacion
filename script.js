const btnSi = document.getElementById("accept-btn");
const btnNo = document.getElementById("reject-btn");
btnSi.addEventListener("click", function() {
    const message = document.getElementById("message");
    message.classList.remove("hidden");
    message.classList.add("fade-in");
    btnNo.style.display = 'none'
});
btnNo.addEventListener("click", function() {
    const message = document.getElementById("message-rej");
    message.style.display = 'block'
    btnSi.style.display = 'none'
});
// Intersection Observer para animar el botón
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bounce');
            observer.unobserve(entry.target); // Dejar de observar una vez que ha animado
        }
    });
});
const button = document.getElementById("accept-btn");
observer.observe(button);
const button2 = document.getElementById("reject-btn");
observer.observe(button2);


const verBtn = document.querySelector('#ver-btn')
verBtn.addEventListener('click', scrollToInvitation)
function scrollToInvitation() {
    document.getElementById("invitation").scrollIntoView({ behavior: "smooth" });
}


