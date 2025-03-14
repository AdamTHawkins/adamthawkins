// Get all collapsible buttons
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;

        // Toggle display
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
            content.classList.add("show"); // Adds animation class
        }
    });
});
