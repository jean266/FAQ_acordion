document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    mostrarAcordion();
}

function mostrarAcordion() {
    const preguntas = document.querySelectorAll('.pregunta');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            pregunta.nextElementSibling.classList.toggle('mostrar');
            pregunta.classList.toggle('activo');
        });
    });
}
