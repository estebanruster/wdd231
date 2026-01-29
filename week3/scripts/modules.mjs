//Importing the byuiCourse class
import byuiCourse from "./course.mjs";

//Importing the setSectionSelection function
import { setSectionSelection } from "./section.mjs";

//Importing the functions from output module
import { setTitle, renderSections } from "./output.mjs";

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);