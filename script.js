// Get all category headers
const headers = document.querySelectorAll(".category-header");

// Add event listener to each header
headers.forEach(header => {
    header.addEventListener("click", function () {
        const content = this.nextElementSibling;

        // Toggle visibility
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
