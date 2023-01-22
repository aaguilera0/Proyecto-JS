class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img; 
        this.cantidad = 1; 
    }
}

const cocaCola = new Producto(1,"Coca Cola", 380, "img/cocaCola.png");
const fernet = new Producto(2, "Branca", 1000, "img/fernetBranca.png");
const whisky = new Producto(3,"Johnnie Walker", 9000, "img/whiskyWalker.png");
const vodka = new Producto(4, "Smirnoff", 920, "img/vodkaSmirnoff.png");
const fanta = new Producto(5, "Fanta",320, "img/fanta.png");
const fernandito = new Producto(6, "Fernandito", 230, "img/fernandito.png");
const vino = new Producto(7, "Trumpeter", 550, "img/vinoTrumpeter.jpg"); 

const productos = [cocaCola, fernet, whisky, vodka, fanta, fernandito, vino];


let carrito = []; 

 
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}


const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

       
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();


const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
     
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}


const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

 
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar Producto </button>
                    </div>
                </div>
                        `
        contenedorCarrito.appendChild(card);

         
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
}


const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

     
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})


const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    
    localStorage.clear();
}


const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        
    })
    total.innerHTML = `Total: $${totalCompra}`;
}


//LIBRERIA: SWEET ALERT

const preciosMayoristas = document.getElementById("preciosMayoristas");

preciosMayoristas.addEventListener("click", () => {
    Swal.fire({
        icon: 'info',
        title: 'Estimado cliente',
        text: 'Presione el siguiente link para ver el listado',
        footer: '<a href="pages/mayorista.html">Listado Mayorista</a>'
      })
    })



