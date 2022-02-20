let experienceURL = "https://sourav-site.herokuapp.com/experience";

window.addEventListener('load', function() {
    fetch(experienceURL)
    .then((res) => res.json())
    .then((data) =>{
        let expSection = document.querySelector('.expSection');
        for(i=0; i<data.length; i++){
            expSection.innerHTML += `<div class="expCard">
                                        <span class="expYear">${data[i].year}</span>
                                        <span class="companyName">${data[i].company}</span>
                                        <p>${data[i].experience}</p>
                                    </div>`
        }
    })
})