document.addEventListener('DOMContentLoaded', function () {
    // Script para el slider
    const sliderLists = document.querySelectorAll('.slider-list');
    const parentContainer = document.querySelector(".hero-slider");

    if (sliderLists.length > 0 && parentContainer) {
        const parentWidth = parentContainer.offsetWidth;
        const listWidth = sliderLists[0].offsetWidth;

        function updateSliderPositions() {
            sliderLists.forEach(list => {
                if (list.offsetLeft <= -listWidth) {
                    list.style.left = `${listWidth - 20}px`;
                }
            });
        }

        function animateSliders() {
            sliderLists.forEach(list => {
                const currentLeft = parseFloat(list.style.left || 0) || 0;
                list.style.left = `${currentLeft - 1}px`;
            });
            updateSliderPositions();
            requestAnimationFrame(animateSliders);
        }

        animateSliders();
    }

    // Script para el texto cambiante
    const textElement = document.querySelector('.changing-text');
    const texts = [
        "I'm Roberto",
        "I'm a Learner",
        "I'm a Software Developer",
        "I'm always learning, always growing",
        "I'm a tech enthusiast"
    ];
    let index = 0;
    let isDeleting = false;
    let currentText = '';
    let typingSpeed = 100; // Velocidad de escritura (en milisegundos)

    function typeText() {
        const fullText = texts[index];

        if (isDeleting) {
            // Borrar texto
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            // Escribir texto
            currentText = fullText.substring(0, currentText.length + 1);
        }

        // Actualizar el contenido del elemento
        textElement.textContent = currentText;

        // Determinar la velocidad de escritura/borrado
        let delta = typingSpeed;
        if (isDeleting) {
            delta /= 2; // Borrar más rápido
        }

        // Cambiar entre escritura y borrado
        if (!isDeleting && currentText === fullText) {
            // Esperar antes de borrar
            delta = 2000; // Tiempo de espera antes de borrar
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            // Cambiar al siguiente texto
            isDeleting = false;
            index = (index + 1) % texts.length;
            delta = 500; // Tiempo de espera antes de escribir
        }

        // Llamar a la función de nuevo
        setTimeout(typeText, delta);
    }

    // Iniciar el efecto de tipado
    typeText();
})

document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll(".timeline-event");
    let lastScrollPosition = 0; // Para rastrear la posición del scroll anterior

    function checkScroll() {
        const currentScrollPosition = window.scrollY;

        timelineEvents.forEach(event => {
            const position = event.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                // Mostrar el evento si está visible en el viewport
                event.classList.add("show");
                event.classList.remove("hide");
            } else if (currentScrollPosition < lastScrollPosition) {
                // Contraer el evento si se hace scroll hacia arriba
                event.classList.remove("show");
                event.classList.add("hide");
            }
        });

        // Actualizar la posición del scroll anterior
        lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar al cargar la página
});

// Scroll suave para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Scroll suave global (opcional)
let isScrolling;
window.addEventListener("scroll", function () {
    window.clearTimeout(isScrolling);

    // Agregar una clase al body mientras se hace scroll
    document.body.classList.add("scrolling");

    // Eliminar la clase después de un tiempo sin scroll
    isScrolling = setTimeout(() => {
        document.body.classList.remove("scrolling");
    }, 300);
});

document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector("#contact");
    let lastScrollPosition = 0; // Para rastrear la posición del scroll anterior

    function checkContactScroll() {
        const currentScrollPosition = window.scrollY;
        const position = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            // Mostrar la sección de contacto si está visible en el viewport
            contactSection.classList.add("show");
            contactSection.classList.remove("hide");
        } else if (currentScrollPosition < lastScrollPosition) {
            // Ocultar la sección de contacto si se hace scroll hacia arriba
            contactSection.classList.remove("show");
            contactSection.classList.add("hide");
        }

        // Actualizar la posición del scroll anterior
        lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", checkContactScroll);
    checkContactScroll(); // Ejecutar al cargar la página
});