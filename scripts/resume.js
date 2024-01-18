$(document).ready(function () {
    $.getJSON("data/resume.json", function (data) {
        // Displays basic information
        $(".card-3 .card-body").html(`
            <h5 class="card-title">${data.name}</h5>
            <p class="card-info">${data.title}</p>
            <p class="card-info">Email: ${data.contact.email}</p>
        `);

        // Displays education
        $(".card-2 .card-body").append("<h5 class='card-title'>Education</h5>");
        data.education.forEach(edu => {
            $(".card-2 .card-body").append(`
                <p class='card-info'>${edu.study}, ${edu.degree} (${edu.year})</p>
            `);
        });

        // Displays experience
        $(".card-2 .card-body").append("<h5 class='card-title'>Experience</h5>");
        data.experience.forEach(exp => {
            $(".card-2 .card-body").append(`
                <p class='card-info card-experience'>${exp.jobTitle} at ${exp.company} (${exp.duration})</p>
            `);
        });

        // Displays skills
        $(".card-2 .card-body").append("<h5 class='card-title'>Skills</h5>");
        data.skills.forEach(skill => {
            $(".card-2 .card-body").append(`
                <p class='card-info'>${skill}</p>
            `);
        });

        // Displays certifications
        $(".card-2 .card-body").append("<h5 class='card-title'>Certifications</h5>");
        data.certifications.forEach(cert => {
            $(".card-2 .card-body").append(`
                <p class='card-info'>${cert.name} from ${cert.organization} (${cert.year})</p>
            `);
        });

        // Displays interests
        $(".card-2 .card-body").append("<h5 class='card-title'>Interests</h5>");
        data.interests.forEach(interest => {
            $(".card-2 .card-body").append(`
                <p class='card-info'>${interest}</p>
            `);
        });
    });
});
