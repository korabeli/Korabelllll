let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Obține elementul modal
    var modal = document.getElementById("myModal");

    // Obține butonul care deschide modalul
    var btn = document.querySelector(".cta-button");

    // Obține elementul <span> care închide modalul
    var span = document.getElementsByClassName("close")[0];

    // Când utilizatorul face clic pe buton, deschide modalul
    btn.onclick = function() {
        modal.style.display = "block";
        setTimeout(() => {
            modal.querySelector('.modal-content').style.bottom = '0';
        }, 10);
    }

    // Când utilizatorul face clic pe <span> (x), închide modalul
    span.onclick = function() {
        modal.querySelector('.modal-content').style.bottom = '-300px';
        setTimeout(() => {
            modal.style.display = "none";
        }, 400); // Durata animației
    }

    // Când utilizatorul face clic în afara modalului, închide modalul
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.querySelector('.modal-content').style.bottom = '-300px';
            setTimeout(() => {
                modal.style.display = "none";
            }, 400); // Durata animației
        }
    }
});

