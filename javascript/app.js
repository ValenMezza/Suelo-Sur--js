
// class Producto {

//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = Number(precio);
//         this.stock = stock;
//     }
//     actualizarStock(cantidad) {
//         this.stock = this.stock - cantidad;
//     }
// }
// const arrayProductos = [];
// const producto1 = new Producto("MAQUINARIA", 10500, 1000009000);
// const producto2 = new Producto("CONTENEDOR", 9000, 900000900);
// const producto3 = new Producto("ARENA", 1500, 7000000009);
// const producto4 = new Producto("TIERRA", 1800, 700000000);
// const producto5 = new Producto("PIEDRA", 2500, 700000000);
// arrayProductos.push(producto1, producto2, producto3, producto4, producto5);

// console.log(arrayProductos);

// //FUNCIONES PARA ORDENAR DE MENOR A MAYOR

// const ordMenorMayor = () => {
//     arrayProductos.sort((a, b) => a.precio - b.precio)
//     console.log(arrayProductos)
// };

// const ordMayorMenor = () => {
//     arrayProductos.sort((a, b) => b.precio - a.precio)
//     mostrarlistaOrdenada();
// }

// const mostrarlistaOrdenada = () => {
//     let array = [];
//     arrayProductos.forEach(producto => array.push(producto.nombre + "$" + producto.precio));

//     alert("Lista de precios:" + "\n" + array.join("\n"));
// };

// let total = 0;
// const agregarAlCarrito = () => {
//     let añadirProducto = false;
//     let producto = "";
//     let cantidad = 0;
//     let precio = 0;

//     do {
//         producto = prompt("que queres comprar").toUpperCase();
//         cantidad = Number(prompt('que cantidad queres?'));

//         switch (producto) {
//             case arrayProductos[0].nombre:
//                 arrayProductos[0].actualizarStock(cantidad);
//                 if (arrayProductos[0].stock <= 0 || Number.isNaN(cantidad)) {
//                     alert("NO HAY STOCK DISPONIBLE")
//                     precio = 0;
//                     cantidad = 0
//                 } else {
//                     precio = arrayProductos[0].precio;
//                 }
//                 break;
//             case arrayProductos[1].nombre:
//                 arrayProductos[1].actualizarStock(cantidad);
//                 if (arrayProductos[1].stock <= 0 || Number.isNaN(cantidad)) {
//                     alert("NO HAY STOCK DISPONIBLE")
//                     precio = 0;
//                     cantidad = 0
//                 } else {
//                     precio = arrayProductos[1].precio;
//                 }
//                 break;
//             case arrayProductos[2].nombre:
//                 arrayProductos[2].actualizarStock(cantidad);
//                 if (arrayProductos[2].stock <= 0 || Number.isNaN(cantidad)) {
//                     alert("NO HAY STOCK DISPONIBLE")
//                     precio = 0;
//                     cantidad = 0
//                 } else {
//                     precio = arrayProductos[2].precio;
//                 }
//                 break;
//             case arrayProductos[3].nombre:
//                 arrayProductos[3].actualizarStock(cantidad);
//                 if (arrayProductos[3].stock <= 0 || Number.isNaN(cantidad)) {
//                     alert("NO HAY STOCK DISPONIBLE")
//                     precio = 0;
//                     cantidad = 0
//                 } else {
//                     precio = arrayProductos[2].precio;
//                 }
//                 break;
//             case arrayProductos[4].nombre:
//                 arrayProductos[4].actualizarStock(cantidad);
//                 if (arrayProductos[4].stock <= 0 || Number.isNaN(cantidad)) {
//                     alert("NO HAY STOCK DISPONIBLE")
//                     precio = 0;
//                     cantidad = 0
//                 } else {
//                     precio = arrayProductos[2].precio;
//                 }
//                 break;
//             case arrayProductos[5].nombre:
//                 arrayProductos[5].actualizarStock(cantidad);
//                 if (arrayProductos[5].stock <= 0 || Number.isNaN(cantidad)) {
//                     alert("NO HAY STOCK DISPONIBLE")
//                     precio = 0;
//                     cantidad = 0
//                 } else {
//                     precio = arrayProductos[2].precio;
//                 }
//                 break;
//             default:
//                 alert('INCORRECTO');
//                 precio = 0;
//                 cantidad = 0;
//                 break;

//         }

//         total = total + precio * cantidad;

//         añadirProducto = confirm('agregar otro producto?');

//     } while (añadirProducto);
//             alert('COMPRA: '+producto+ '\n TOTAL: '+total);

// }
// agregarAlCarrito();
