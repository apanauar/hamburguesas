
const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');


abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active');
});


modalContenedor.addEventListener('click', (event) => {
    if (event.target === modalContenedor) {
        cerrarCarrito.click();
    }
});

modalCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('boton-eliminar')) {
        eliminarProducto(event.target.value);
    }
});

document.getElementById('btn-finalizar-compra').addEventListener('click', () => {
    finalizarCompra();
});

