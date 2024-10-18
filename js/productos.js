let productos = []; 

const cargarProductos = () => {
    fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        productos = data; 
        pintarProductos(productos);
    })
    .catch(error => console.error('Error al cargar productos:', error));
};

