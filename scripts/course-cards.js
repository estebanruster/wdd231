/*Array of course objects to dynamically create course cards for the html
to display them and change dynamically*/

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function totalCredits(courses) {
    const sum = courses.reduce((accumulator, course) => accumulator + course.credits, 0);
    const courseCredits = document.querySelector("#credits")
    courseCredits.textContent = `The total number of credits listed below is ${sum}`;
}
/*
const totalCredits = (courses) => courses.reduce((accumulator, course) => accumulator + course.credits, 0);
document.querySelector("#credits").innerHTML = `The total number of credits listed below is ${totalCredits}`;*/

function courseTemplate(course) {
    let check = "";
    if (course.completed === true) {
        check = "✔️";
    }
    let template = document.createElement('p');
    template.setAttribute('id', `course-${course.subject}${course.number}`);
    template.textContent = `${check}${course.subject} ${course.number}`;
    document.querySelector("#course-cards").appendChild(template);
}

function courseCard(courses) {
    //const html = courses.map(courseTemplate);
    //document.querySelector("#course-cards").innerHTML = html.join("");
    courses.forEach(course => {
        courseTemplate(course);
        document.querySelector(`#course-${course.subject}${course.number}`).addEventListener("click", () => {
            displayCourseDetails(course);
        });
    });
}

const allCourses = document.querySelector("#all");
allCourses.addEventListener("click", () => {
    courseCard(courses);
    totalCredits(courses);
});

const wddCourses = document.querySelector("#wdd");
wddCourses.addEventListener("click", () => {
    courseCard(courses.filter(course => course.subject === "WDD"));
    totalCredits(courses.filter(course => course.subject === "WDD"));
});

const cseCourses = document.querySelector("#cse");
cseCourses.addEventListener("click", () => {
    courseCard(courses.filter(course => course.subject === "CSE"));
    totalCredits(courses.filter(course => course.subject === "CSE"));
});

/*Function and code for the dialog modal*/
const modal = document.querySelector('#course-details');

function displayCourseDetails(course) {
    //Button to close course details modal
    let closeModalButton = document.createElement('button');
    closeModalButton.setAttribute('id', 'closeModal');
    closeModalButton.innerHTML = '❌';
    //h2 title with subject and number
    let courseSubject = document.createElement('h2');
    courseSubject.innerHTML = `${course.subject} ${course.number}`;
    //h3 title for course title
    let courseTitle = document.createElement('h3');
    courseTitle.innerHTML = `${course.title}`;
    //p for course credits info
    let courseCredits = document.createElement('p');
    courseCredits.innerHTML = `${course.credits} credits`;
    //p for course description
    let courseDescription = document.createElement('p');
    courseDescription.innerHTML = `${course.description}`;
    //p for course certificate
    let courseCertificate = document.createElement('p');
    courseCertificate.innerHTML = `Certificate ${course.certificate}`;
    //p with .join for the array of technolgy
    let courseTechnology = document.createElement('p');
    courseTechnology.innerHTML = `Technologies: ${course.technology.join(', ')}`;
    //appending the elements created as childs of modal
    modal.appendChild(closeModalButton);
    modal.appendChild(courseSubject);
    modal.appendChild(courseTitle);
    modal.appendChild(courseCredits);
    modal.appendChild(courseDescription);
    modal.appendChild(courseCertificate);
    modal.appendChild(courseTechnology);
    //managing the modal of course details
    modal.showModal();
    closeModalButton.addEventListener("click", () => {
        modal.close();
        modal.innerHTML = '';
    });
}

courseCard(courses);
totalCredits(courses);