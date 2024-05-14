document.getElementById('form-contacto').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Gracias por tu mensaje. Te responderemos pronto.');
    }
});

function startScrolling() {
    const container = document.querySelector('.habilidades-container');
    const skills = document.querySelectorAll('.habilidad-box');
    let containerWidth = container.clientWidth;
    let totalWidth = 0;

    skills.forEach(skill => {
        totalWidth += skill.offsetWidth + 20;
    });

    let scrollAmount = 0;

    function scrollSkills() {
        container.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });

        scrollAmount += 2;

        if (scrollAmount >= totalWidth) {
            scrollAmount = 0;
        }

        requestAnimationFrame(scrollSkills);
    }

    scrollSkills();
}

window.onload = startScrolling;

