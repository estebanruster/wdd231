const url = "../data/members.json";
const cards = document.querySelector("#cards")

async function getCompanieData() {
    const response = await fetch(url);
    const data = await response.json();
    cardTemplate(data.companies);
}

const cardTemplate = (companies) => {
    companies.forEach((companie) => {
        
    });
}

getCompanieData();

function courseCard(courses) {
    const html = courses.map(courseTemplate);
    document.querySelector("#directory-cards").innerHTML = html.join("");
}

const allCourses = document.querySelector("#all");
allCourses.addEventListener("click", () => {
    courseCard(courses);
});

const wddCourses = document.querySelector("#wdd");
wddCourses.addEventListener("click", () => {
    courseCard(courses.filter(course => course.subject === "WDD"));
});

const cseCourses = document.querySelector("#cse");
cseCourses.addEventListener("click", () => {
    courseCard(courses.filter(course => course.subject === "CSE"));
});

courseCard(courses);