/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #e5e5e5; /* Light gray background */
    color: #000000; /* Default text color */
    transition: background 0.3s ease, color 0.3s ease;
}

/* Dark Mode */
.dark-mode {
    background-color: #000000; /* Dark background */
    color: #ffffff; /* White text */
}
.dark-mode .sidebar {
    background: #14213d; /* Dark Blue */
}
.dark-mode .collapsible {
    background: #fca311; /* Gold-ish button background */
}
.dark-mode #dark-mode-toggle {
    color: #ffffff;
}

/* Sidebar */
.sidebar {
    width: 250px;
    background: #14213d; /* Dark Blue */
    color: white;
    padding: 20px;
    position: fixed;
    top: 0; /* Align with the top of the page */
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 3px solid #006699;
}
.profile-pic-container {
    margin-top: 20px;
}
.profile-pic {
    width: 100px;
    border-radius: 50%;
    border: 3px solid white;
}
.contact-item {
    background-color: #ffffff;
    color: #000000;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    width: 100%;
}
.contact-logo {
    width: 20px;
    margin-right: 10px;
}
.contact-btn {
    background: #fca311; /* Gold button */
    color: white;
    padding: 15px;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-top: 10px;
}
.contact-btn:hover {
    background: #d89c0d;
}
.download-cv-btn {
    background: #fca311;
    color: white;
    padding: 15px;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-top: 10px;
}
.download-cv-btn:hover {
    background: #d89c0d;
}

/* Modal Styles (Popup) */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); /* Black with transparency */
}
.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px;
}
.close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    right: 10px;
    top: 10px;
}
.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Main Content */
.main-content {
    margin-left: 280px;
    padding: 20px;
    background-color: #e5e5e5; /* Light gray background for the main content */
}

/* Header - Profile Picture & Name */
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    justify-content: center;
}

header .header-content {
    display: flex;
    justify-content: center; /* Center the name horizontally */
    width: 100%;
    padding: 0 20px;
}

h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
    display: inline-block; /* Ensure name stays inline */
}

.underline {
    width: 40%; /* Adjust width to shift it left */
    height: 3px;
    background-color: #0073b1; /* Blue color */
    margin-top: 10px;
    align-self: center;
}

/* Typing Effect */
#typing-text::after {
    content: '|';
    animation: blink 0.7s infinite;
}
@keyframes blink {
    50% {
        opacity: 0;
    }
}

/* Collapsible Sections */
.collapsible {
    background: #fca311; /* Gold button */
    color: #000000;
    padding: 15px;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-size: 1.2rem;
    margin-bottom: 10px;
    border-radius: 10px;
}
.content {
    display: none;
    padding: 15px; /* Equal padding on all sides */
    background-color: #ffffff; /* White background for content */
    font-size: 1rem;
    border-radius: 10px;
    margin-bottom: 20px; /* Added margin to separate sections */
    padding-top: 15px; /* Ensure consistent padding at top and bottom */
}
.show {
    display: block;
}

/* Dark Mode Toggle */
#dark-mode-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #fca311;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
#dark-mode-toggle:hover {
    background-color: #d89c0d;
}

/* Settings Icon */
#settings-icon {
    position: absolute;
    top: 20px;
    right: 60px;
    cursor: pointer;
}

/* Add more styling for settings */
