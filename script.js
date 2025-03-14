const button = document.getElementById("toggleButton");
const list = document.getElementById("qualifications");

button.addEventListener("click", () => {
    if (list.style.display === "none") {
        list.style.display = "block";
        button.textContent = "Hide Qualifications";
    } else {
        list.style.display = "none";
        button.textContent = "Show Qualifications";
    }
});
