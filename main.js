//Inicio de sesion plataforma

const usuarioAutorizado = "usuario1";
const passwordAutorizada = "123456";

let usuarioIngresado = prompt("Ingresa tu nombre de usuario");
let passwordIngresada = prompt("Ingresa tu contraseña");

if(usuarioIngresado === usuarioAutorizado && passwordIngresada === passwordIngresada) {
    alert("Los datos ingresados son correctos, pase señor usuario");
}else {
    alert("Los datos ingresados son incorrectos, volá de acá ratonnnn")
}
 

//Clase bebidas

class Bebidas {
    constructor(nombre, marca, precio) {
        this.nombre = nombre; 
        this.marca = marca;
        this.precio = precio;
    }
}

const gaseosa = new Bebidas("gaseosa","Coca Cola", 380);
const fernet = new Bebidas("fernet", "Branca", 1000);
const whisky = new Bebidas("whisky","Johnnie Walker", 9000);
const vodka = new Bebidas("vodka", "Smirnoff", 920);

const arrayBebidas = [];

arrayBebidas.push(gaseosa);
arrayBebidas.push(fernet);
arrayBebidas.push(whisky);
arrayBebidas.push(vodka);



function menu() {
    alert("¡Bienvenido a AA Bebidas!");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Agregar bebida \n 2) Eliminar bebida \n 3) Modificar bebida \n 4) Recetas de tragos \n 5) Salir"));
    return opcion;
}

//Funcion para agregar bebida

function agregarBebida () {
    let nombre = prompt("Ingrese el nombre de la bebida ");
    let marca = prompt("Ingrese la marca de la bebida: ");
    let precio = prompt("Ingrese el precio de la bebida: ");
    let bebidas = new Bebidas(nombre, marca, precio);
    arrayBebidas.push(bebidas);
    console.log(arrayBebidas);
}

//Funcion para eliminar bebida

function eliminarBebida () {
    let nombre = prompt("Ingrese el nombre de la bebida: ");
    let bebidas = arrayBebidas.find(bebidas => bebidas.nombre === nombre);
    let indice = arrayBebidas.indexOf(bebidas);
    arrayBebidas.splice(indice, 1);
    console.log(arrayBebidas);
}

//Funcion para modificar bebida

function modificarBebida () {   
    let nombre = parseInt(prompt("Ingrese el nombre de la bebida: "));
    let bebidas = arrayBebidas.find(bebidas => bebidas.nombre === nombre);
    let indice = arrayBebidas.indexOf(bebidas);
    let marca = prompt("Ingrese la marca: ");
    let precio = prompt("Ingrese el precio de la bebida: ");
    let bebidaModificada = new Cliente(nombre, marca, precio);
    arrayBebidas.splice(indice, 1, bebidaModificada);
    console.log(arrayBebidas);
}

//Funcion para ver recetas de tragos

function recetasTragos() {
    let bebidas = prompt("Elija la receta de que bebida quiere ver: caipiroska, margarita, mojito, daiquiri.")

switch(bebidas) {
    case "caipiroska":
    console.log("Esta bebida se prepara con vodka, lima, azúcar y hielo picado.");
    break;
    case "margarita":
        console.log("Esta bebida se prepara con tequila, triple seco y lima.");
    break;
    case "mojito":
        console.log("Esta bebida se prepara con hojas de menta, lima, ron blanco, azucar y soda.")
    break;
    case "daiquiri":
        console.log("Esta bebida se prepara con ron blanco, lima, azucar y hielo.");
    break;
}
}

//Funcion para salir

function salir() {
    alert("Gracias por utilizar AA Bebidas");
}


//Ejecucion del programa 

let opcion = menu();
switch (opcion) {
    case 1:
        agregarBebida();
        break;
    case 2:
        eliminarBebida();
        break;
    case 3:
        modificarBebida();
        break;
    case 4:
        recetasTragos();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Pusiste cualquier cosa, campeón, fijate bien las opciones");
        break;
}