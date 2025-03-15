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
const text = "Results-driven Business Analyst with a strong analytical mindset, problem-solving abilities, and a passion for optimizing business processes through technology. Adept at bridging the gap between technical teams and business stakeholders, ensuring seamless system enhancements and operational efficiency. Highly skilled in data analysis, system configuration, and process automation to drive business success.";
let i = 0;
function type() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 20); // Faster typing speed
    }
}
type();

function openContactModal() {
    document.getElementById("contact-modal").classList.add("show");
}

function closeContactModal() {
    document.getElementById("contact-modal").classList.remove("show");
}
