$(document).ready(function () {
    $.getJSON("data/resume.json", function (data) {
        // Displays resume title
        const resumeContainer = $("#resume-container");

        // Displays basic information
        $(".card-3 .card-body").html(`
            <h5 class="card-title">${data.name}</h5>
            <p class="card-info">${data.title}</p>
            <p class="card-info">Email: ${data.contact.email}</p>
        `);

        // Displays education
        resumeContainer.append("<h5 class='card-title'>Education</h5>");
        data.education.forEach(edu => {
            resumeContainer.append(`
                <p class='card-info'>${edu.study}, ${edu.degree} (${edu.year})</p>
            `);
        });

        // Displays experience
        resumeContainer.append("<h5 class='card-title'>Experience</h5>");
        data.experience.forEach(exp => {
            resumeContainer.append(`
                <p class='card-info card-experience'>${exp.jobTitle} at ${exp.company} (${exp.duration})</p>
            `);
        });

        // Displays interests
        resumeContainer.append("<h5 class='card-title'>Interests</h5>");
        data.interests.forEach(interest => {
            resumeContainer.append(`
                <p class='card-interests'>${interest}</p>
            `);
        });
    });
});
 

fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects-container');

        const projectsTitle = document.createElement('h2');
        projectsTitle.textContent = "Personal Projects";
        projectsContainer.appendChild(projectsTitle);

        data.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.url}</p>
                <p>Tech Stack: ${project.techStack.join(', ')}</p>
            `;

            projectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));


