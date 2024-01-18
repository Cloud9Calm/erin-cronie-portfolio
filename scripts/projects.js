fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        // Displays projects on the page
        const projectsContainer = document.getElementById('projects-container');

        const projectsTitle = document.createElement('h2');
        projectsTitle.textContent = "Projects";
        projectsContainer.appendChild(projectsTitle);

        data.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>Tech Stack: ${project.techStack.join(', ')}</p>
            `;

            projectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));
