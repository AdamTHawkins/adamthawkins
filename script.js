/* General Page Styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f3faff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Main Container */
.container {
    background: white;
    width: 60%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Top Section - Profile Picture & Name */
.top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    border-bottom: 2px solid #0073b1;
}

.profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #0073b1;
}

.name {
    font-size: 24px;
    font-weight: bold;
    color: #0073b1;
    margin-top: 10px;
}

/* Sidebar Styling */
.sidebar {
    margin-top: 20px;
}

/* Category Headers */
.category-header {
    width: 100%;
    background-color: #0073b1;
    color: white;
    border: none;
    padding: 10px;
    font-size: 18px;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 5px;
}

.category-header:hover {
    background-color: #005a8c;
}

/* Collapsible Content */
.category-content {
    list-style: none;
    padding: 0;
    margin: 0;
    display: none; /* Hidden by default */
    background: #e6f2ff;
    padding: 10px;
    border-radius: 5px;
}

.category-content li {
    padding: 5px 0;
    font-size: 16px;
}
