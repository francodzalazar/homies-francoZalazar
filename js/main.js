// Obtencion de datos del data.json
async function obtenerDatos(categoria) {
  const respuesta = await fetch("js/data.json");
  const datos = await respuesta.json();
  rellenarDiv(divProductos, filtarProductos(categoria, datos));
}
// Recorre cada array que devuelve la funcion de filtrado y le agrega las distintas funcionalidades
async function filtrarDatos(categoria) {
  const respuesta = await fetch("js/data.json");
  const datos = await respuesta.json();
  const filtrado = filtarProductos(categoria, datos);
  filtrado.forEach((producto) => {
    seleccionarDiv(producto.id).addEventListener("click", () =>
      mostrarProducto(divProductos, producto)
      // .addEventListener("click", () =>
      //   guardarStorage(agregarAlCarrito(producto, carrito))
      // )
    );
  });
}

// Mostrar div pertinente a la categoria seleccionada
function reemplazarDiv(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}
// Agrega el contenido al nuevo div
function rellenarDiv(div, productos) {
  div.innerHTML = "";
  productos.forEach((producto) => {
    div.innerHTML += `<div id= ${producto.id}> <img src=${producto.imagen}> <h4>${producto.nombre}</h4> <h5>$ ${producto.precio}</h5> </div>`;
  });
  return div;
}
// Filtrado del array
function filtarProductos(categoria, array) {
  switch (categoria) {
    case divHamburguesa:
      return array.filter(
        (producto) => producto.clasificacion == "hamburguesa"
      );
    case divLomo:
      return array.filter((producto) => producto.clasificacion == "lomo");
    case divPapas:
      return array.filter((producto) => producto.clasificacion == "papas");
    case divBebida:
      return array.filter((producto) => producto.clasificacion == "bebida");

    default:
      break;
  }
}
// Funcionalidades de cada producto
function seleccionarDiv(id) {
  switch (id) {
    case 1:
      return document.getElementById(id);
    case 2:
      return document.getElementById(id);
    case 3:
      return document.getElementById(id);

    default:
      break;
  }
}
function mostrarProducto(div, producto) {
  div.classList.replace("justify-content-between", "justify-content-center");
  div.innerHTML = `<div id= ${producto.id}><img src=${producto.imagen}> <h4>${producto.nombre}</h4> <h5>$ ${producto.precio}</h5>
  <input type="number" name="" id="inputContador" value="1">
  <input type="submit" id="enviarDatos" value="Agregar al carrito">
  </div>`;
  const agregarCarrito = document.querySelector("#enviarDatos");
  agregarCarrito.onclick = ()=> guardarStorage(agregarAlCarrito(producto, carrito));

}
function agregarAlCarrito(producto, carrito) {
  const cantidadProductos = document.querySelector("#inputContador").value;
  const listadoCarritoNombre = document.querySelector("#carritoNombre");
  const listadoCarritoPrecio = document.querySelector("#carritoPrecio");
  let liNombre = document.createElement("li")
  liNombre.innerText = `${producto.nombre} x${cantidadProductos}`
  let liPrecio = document.createElement("li")
  liPrecio.innerText = `$ ${producto.precio*cantidadProductos}`
  carrito.push(producto.precio*cantidadProductos);
  console.log(listadoCarritoNombre);
  listadoCarritoNombre.appendChild(liNombre);
  listadoCarritoPrecio.appendChild(liPrecio);
  let totalCarrito = carrito.reduce((acumulador, total) => acumulador + total);


  return totalCarrito;
}
function guardarStorage(dato) {
  sessionStorage.setItem("total", JSON.stringify(dato));
}
function recuperarStorage(dato) {
  let datosCarrito= JSON.parse(sessionStorage.getItem(dato))
  console.log(datosCarrito);
}
// Arrays
const carrito = [];

// Variables
const divCards = document.querySelector("#divCards"),
  divProductos = document.querySelector("#divProductos"),
  divCarrito = document.querySelector("#divCarrito"),
  divInicial = document.querySelectorAll(".main__div"),
  divCategorias = document.querySelectorAll(".main__div--producto"),
  btnVolver = document.querySelector("#volverInicio"),
  btnVerCarrito = document.querySelector("#verCarrito"),
  divHamburguesa = document.querySelector("#divHamburguesa"),
  divLomo = document.querySelector("#divLomo"),
  divPapas = document.querySelector("#divPapas"),
  divBebida = document.querySelector("#divBebida");

// Ejecucion del programa
divCategorias.forEach((categoria) =>
  categoria.addEventListener("click", () => {
    reemplazarDiv(divInicial, "d-none"),
      obtenerDatos(categoria),
      filtrarDatos(categoria);
  })
);

// Boton para volver al inicio del sitio
btnVolver.addEventListener("click", () => {
  reemplazarDiv(divInicial, "d-none"), rellenarDiv(divProductos, []);
});

// Boton que lanza un alert con los productos que contiene el carrito (De momento solo muestra el precio total a pagar)
btnVerCarrito.addEventListener("click", () => {
  let guardado = recuperarStorage("total");
  if (!guardado) {
    alert("No hay productos en el carrito");
  } else {
    alert(`El total a pagar es ${guardado}`);
  }
});

// Funcion que borra los datos del sessionStorage cada vez que carga la pagina
window.onload = () => sessionStorage.clear();
