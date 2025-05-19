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
        this.nextElementSibling.classList.toggle("collapsible-show");
    });
});

// Typing Effect 
const typingText = document.getElementById("typing-text");
const text = "Versatile and results-driven analyst with a strong foundation in both technology and project management. Translating complex business requirements into scalable technical solutions, bridging the gap between stakeholders and development teams to drive efficiency and innovation. Experienced in system configuration, analysis, and process automation, with a proven track record of leading cross-functional projects from inception to implementation. Passionate about leveraging technology to optimise business operations, improve decision-making, and enhance user experience in dynamic, fast-paced environments.";
let i = 0;
function type() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 5); 
    }
}
type();

function openContactModal() {
    document.getElementById("contact-modal").classList.add("show");
}

function closeContactModal() {
    document.getElementById("contact-modal").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const toggleButton = document.getElementById("sidebar-toggle");

    // Toggle the 'open' class on sidebar and overlay visibility
    toggleButton.addEventListener("click", () => sidebar.classList.toggle("open"));

    // Close the sidebar and overlay if clicking outside
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });

    // Close sidebar and overlay when clicking on the overlay itself
    overlay.addEventListener("click", () => sidebar.classList.remove("open"));
});

