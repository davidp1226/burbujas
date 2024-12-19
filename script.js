const burbujas = document.querySelectorAll('.burbuja');
const mensajeFinal = document.querySelector('.mensaje-final');

function verificarBurbujas() {
    if ([...burbujas].every(burbuja => burbuja.style.display == 'none')) {
        mensajeFinal.style.display = 'block'; 
    }
}

burbujas.forEach(burbuja => {
    burbuja.addEventListener('click', () => {
        burbuja.style.display = 'none'; 
        verificarBurbujas(); 
    });
});