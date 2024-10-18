


const pintarProductos = (productos) => {
    const contenedor = document.getElementById("producto-contenedor");
    contenedor.innerHTML = ''; 

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <div class="card-image">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <span class="card-title">${producto.nombre}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                    <i id="${producto.id}" class="material-icons agregar">add_shopping_cart</i>
                </a>
            </div>
            <div class="card-content">
                <p>$${producto.precio}</p>
                <p>${producto.descripcion}</p>
            </div>
        `;
        contenedor.appendChild(div);
    });
};


document.addEventListener('DOMContentLoaded', cargarProductos);