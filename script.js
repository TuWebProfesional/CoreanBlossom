// Función para abrir el modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // Lo mostramos como flexbox para centrarlo
        document.body.style.overflow = 'hidden'; // Bloquea el scroll de la página de fondo
    }
}

// Función para cerrar el modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Lo ocultamos
        document.body.style.overflow = 'auto'; // Restauramos el scroll
    }
}

// Cerrar el modal si el usuario hace clic fuera del recuadro blanco
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
