// Check for existing date in local storage
const lastVisit = localStorage.getItem("visitDate");

if (lastVisit) {
    // Convert string back to a Date object
    const dateObj = new Date(lastVisit);
    console.log("Welcome back! Your last visit was: " + dateObj.toLocaleString());
} else {
    console.log("This is your first visit.");
}

// Update the storage with the current visit date
const currentVisit = new Date().toISOString();
localStorage.setItem("visitDate", currentVisit);