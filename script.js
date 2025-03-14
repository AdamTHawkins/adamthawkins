// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
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

// Update Last Modified Date
document.getElementById("update-date").innerText = new Date().toLocaleDateString();

// Floating Contact Button Scroll
document.querySelector(".contact-float").addEventListener("click", () => {
    alert("📧 Email: your.email@example.com\n📞 Phone: +123 456 789");
});
