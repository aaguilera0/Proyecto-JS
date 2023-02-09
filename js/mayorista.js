//FETCH - RUTA LOCAL

const listado = document.getElementById("listado");
const listadoProductos = "../json/productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            listado.innerHTML += `
                <h2>Nombre: ${producto.nombre} </h2>
                <p> Precio: ${producto.precio} </p>
                <p> ID: ${producto.id} </p>
            `
        })
    })
    .catch(error => console.log(error))
    .finally( () => console.log("Proceso Finalizado"))
