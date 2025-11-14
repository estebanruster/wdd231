/*Getting from the computer the date; and adding it dynamically to the page*/
let currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;

let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;