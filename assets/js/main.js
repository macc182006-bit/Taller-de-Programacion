// ==========================================
// MAIN.JS - HORIZONTE ANDINO TOURS
// ==========================================

// 1. BOTÓN DE SCROLL (Volver arriba)
const botonArriba = document.querySelector(".scroll-up");

function mostrarBotonArriba() {
    if (botonArriba) {
        // Si el scroll vertical es menor o igual a 400px, oculta el botón; de lo contrario, lo muestra
        if (window.scrollY <= 400) {
            botonArriba.hidden = true;
        } else {
            botonArriba.hidden = false;
        }
    }
}

// Ejecuta solo si el botón existe en la página actual
if (botonArriba) {
    mostrarBotonArriba();
    window.addEventListener("scroll", mostrarBotonArriba);
}

// 2. BOTÓN HAMBURGUESA (Menú móvil y tablets)
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btn-menu");
    const navMenu = document.getElementById("nav-menu");

    if (btnMenu && navMenu) {
        // Alternar visibilidad del menú al hacer clic
        btnMenu.addEventListener("click", () => {
            const estaAbierto = navMenu.classList.toggle("menu-abierto");
            btnMenu.setAttribute("aria-expanded", estaAbierto);
        });

        // Cerrar el menú automáticamente si se agranda la ventana a tamaño de escritorio (> 992px)
        window.addEventListener("resize", () => {
            if (window.innerWidth > 992 && navMenu.classList.contains("menu-abierto")) {
                navMenu.classList.remove("menu-abierto");
                btnMenu.setAttribute("aria-expanded", "false");
            }
        });
    }
});