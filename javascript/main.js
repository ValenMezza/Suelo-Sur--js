const catalogoProductos = [
    { id: 1,cantidad: 1 ,nombre: 'MAQUINARIA', Precio: 20000, img: '../imagenes/aquiles.jpg' },
    { id: 2,cantidad: 1 ,nombre: 'CONTENEDOR', Precio: 9000, img: '../imagenes/contenedor-carrusel.jpeg' },
    { id: 3,cantidad: 1 ,nombre: 'ARENA', Precio: 1500, img: '../imagenes/arena.jpeg' },
    { id: 4,cantidad: 1 ,nombre: 'TIERRA', Precio: 1800, img: '../imagenes/relleno.jpeg' },
    { id: 5,cantidad: 1 ,nombre: 'PIEDRA', Precio: 2500, img: '../imagenes/triturado.jpeg' },
];
const contenedorProductos = document.getElementById('contenedor-productos');
const contendorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

let carrito = [];

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('carrito')){
        carrito =JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito()
    }
    })


botonVaciar.addEventListener('click', () => {
    carrito.length =0;
    actualizarCarrito();
})


catalogoProductos.forEach((producto) => {
    const div1 = document.createElement('div');
    div1.classList.add('producto');
    div1.innerHTML = `
    <img class="img-catalogo_productos" src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio: $${producto.Precio}</p>
    <button id="${producto.id}" class="boton-agregar">Agregar al Carrito</button>
    `
    contenedorProductos.appendChild(div1); 

    const boton = document.getElementById(`${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

    boton.addEventListener('click', () =>{
        swal.fire ({title: "Genial",
        text: `Agregaste ${producto.nombre} al carrito`,
        icon: "success",
        confirm: "Ok",
        timer: 2000})})
});


const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id ===prodId);

    if (existe){
        const prod = carrito.map( prod => {
            prod.id ===prodId && prod.cantidad++;
        })
    } else {

    
    const item = catalogoProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito()
    console.log(carrito)
}
actualizarCarrito();
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId );
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();

}

const actualizarCarrito = () => {
    contendorCarrito.innerHTML= ""
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoENCarrito');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$ ${prod.Precio}</p>
        <p>Cantidad:<span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = 'eliminarDelCarrito(${prod.id})' class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contendorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito));
    
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc , prod) => acc + prod.cantidad * prod.Precio, 0)
    })
}       
// A algunas estructuras me pareció mejor no utilizar sugar syntax, ya que me parecería más engorroso a la hora de leer el código. No se si está bien, me gustaría una sugerencia de su parte!

//SWEET ALERT

const btnConfirm = document.getElementById('vaciar-carrito');
btnConfirm.addEventListener('click', () =>{
    swal.fire({
        title: "Confirmación",
        text: `Eliminaste todos los productos de tu carrito`,
        icon: "success",
        confirm: "ok",
        timer: 2000
        

    })
    actualizarCarrito();
})