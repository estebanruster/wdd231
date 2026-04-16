export function localS() {
    const welcome = document.querySelector('#localS');
    // Check for existing date in local storage
    const lastVisit = localStorage.getItem("visitDate");

    //if condition to check the existance of an element with querySelector of #localS
    if (welcome) {
        if (lastVisit) {
            //Getting lasvisit as a timstamp in milliseconds and comparing to a new date
            const timeStamp = Date.parse(lastVisit);
            const today = Date.now();

            // Convert string back to a Date object
            const dateObj = new Date(lastVisit);

            //86,400,000 is the number of miliseconds that represents 1 day
            const msDay = 86400000;

            if ((today + msDay) >= timeStamp) {
                welcome.textContent = `Back so soon! Awesome!`;
            }
            
            else {
                const msPassed = today - timeStamp;
                const daysPassed = msPassed / msDay;
                welcome.textContent = `You last visited ${daysPassed.toFixed(0)} days ago.`;
            }
            //console.log("Welcome back! Your last visit was: " + dateObj.toLocaleString());
        }
        
        else {
            //console.log("This is your first visit.");
            welcome.textContent = `Welcome! Take a look to our catalogue.`;
        }

        // Update the storage with the current visit date
        const currentVisit = new Date().toISOString();
        localStorage.setItem("visitDate", currentVisit);
    }
}