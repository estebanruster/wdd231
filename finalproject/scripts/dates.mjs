/*Getting from the computer the date; and adding it dynamically to the page*/
export function dates() {
    let currentyear = new Date().getFullYear();
    let lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentyear;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
}
