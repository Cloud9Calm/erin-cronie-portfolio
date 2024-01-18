$(document).ready(function () {
    $.getJSON("data/resume.json", function (data) {
        // Displays resume title
        const resumeContainer = $(".card-2 .card-body");
        resumeContainer.append("<h2 class='card-title'>Resume</h2>");

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

        // Displays skills
        resumeContainer.append("<h5 class='card-title'>Skills</h5>");
        data.skills.forEach(skill => {
            resumeContainer.append(`
                <p class='card-interests'>${skill}</p>
            `);
        });

        // Displays certifications
        resumeContainer.append("<h5 class='card-title'>Certifications</h5>");
        data.certifications.forEach(cert => {
            resumeContainer.append(`
                <p class='card-info'>${cert.name} from ${cert.organization} (${cert.year})</p>
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
