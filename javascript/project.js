let projectURL = "https://sourav-site.herokuapp.com/projects"

window.addEventListener('load', function() {
    fetch(projectURL)
    .then((res) => res.json())
    .then((data) =>{
        let container = document.querySelector('.projectContainer');
        for(i=0; i<data.length; i++){
            container.innerHTML += `<div class="projectCard">
                                        <img src="${data[i].project_image}"> alt="${data[i].project_name}">
                                        <div class="projectContent">
                                        <h2>${data[i].project_name}</h2>
                                        <p>${data[i].description}</p>
                                        <a href="${data[i].project_link}">Learn More...</a>
                                        </div>
                                    </div>`
        }
    })
})