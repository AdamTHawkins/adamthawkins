// Dark Mode Toggle Function
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Collapsible Sections
document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("show");
    });
});

// Typing Effect (faster speed)
const typingText = document.getElementById("typing-text");
const text = "Welcome to my professional portfolio. I'm a passionate web developer!";
let i = 0;
function type() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 30); // Faster typing speed
    }
}
type();

// Contact Modal (Popup)
function openContactModal() {
    document.getElementById("contact-modal").style.display = "block";
}

function closeContactModal() {
    document.getElementById("contact-modal").style.display = "none";
}
