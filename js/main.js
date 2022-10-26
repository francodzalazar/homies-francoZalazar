// Funciones
function reemplazarDiv(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}
function rellenarDiv(div, productos) {
  div.innerHTML = "";
  productos.forEach((producto) => {
    div.innerHTML += `<div id= ${producto.id}> <img src=${producto.imagen}> <h4>${producto.nombre}</h4> <h5>$ ${producto.precio}</h5> </div>`;
  });
  return div;
}
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
  <button id="botonResta">-</button>
  <input type="number" name="" id="inputContador" readonly value="1">
  <button id="botonSuma">+</button> 
  <input type="submit" id="enviarDatos" value="Agregar al carrito">
  </div>`;
  const agregarCarrito = document.querySelector("#enviarDatos");
  return agregarCarrito;
}
function agregarAlCarrito(producto, carrito) {
  carrito.push(producto.precio);
  let totalCarrito = carrito.reduce((acumulador, total) => acumulador + total);
  console.log(totalCarrito);
  return totalCarrito;
}
function guardarStorage(dato) {
  sessionStorage.setItem("total", JSON.stringify(dato));
}
function recuperarStorage(dato) {
  return JSON.parse(sessionStorage.getItem(dato));
}
// Clases
class Producto {
  constructor(nombre, clasificacion, precio, imagen, id) {
    this.nombre = nombre.toUpperCase();
    this.clasificacion = clasificacion;
    this.precio = parseFloat(precio);
    this.imagen = imagen;
    this.id = id;
  }
}

// Arrays
const stock = [
  new Producto(
    "hamburguesa simple",
    "hamburguesa",
    850,
    "assets/img/hamburguesas/hambur-simple.png",
    1
  ),
  new Producto(
    "hamburguesa doble",
    "hamburguesa",
    950,
    "assets/img/hamburguesas/hambur-doble.png",
    2
  ),
  new Producto(
    "hamburguesa triple",
    "hamburguesa",
    1050,
    "assets/img/hamburguesas/hambur-triple.png",
    3
  ),
  new Producto(
    "lomo simple",
    "lomo",
    1050,
    "assets/img/lomos/lomo-simple.png",
    1
  ),
  new Producto(
    "lomo completo",
    "lomo",
    1150,
    "assets/img/lomos/lomo-completo.png",
    2
  ),
  new Producto(
    "papas cheddar",
    "papas",
    800,
    "assets/img/papas/papas-beacon.png",
    1
  ),
  new Producto(
    "papas huevo",
    "papas",
    750,
    "assets/img/papas/papas-huevo.png",
    2
  ),
  new Producto(
    "agua saborizada de manzana 500 ml",
    "bebida",
    500,
    "assets/img/bebidas/agua-mzna-500ml.png",
    1
  ),
  new Producto(
    "coca 500 ml",
    "bebida",
    500,
    "assets/img/bebidas/coca-500ml.png",
    2
  ),
  new Producto(
    "pinta de cerveza",
    "bebida",
    600,
    "assets/img/bebidas/cerveza-500ml.png",
    3
  ),
];
const carrito = [];
const arrayVacio = [];

// Variables
const divCards = document.querySelector("#divCards"),
  divProductos = document.querySelector("#divProductos"),
  divIntercambiable = document.querySelectorAll(".main__div"),
  divCategorias = document.querySelectorAll(".main__div--producto"),
  btnVolver = document.querySelector("#volverInicio"),
  btnVerCarrito = document.querySelector("#verCarrito"),
  divHamburguesa = document.querySelector("#divHamburguesa"),
  divLomo = document.querySelector("#divLomo"),
  divPapas = document.querySelector("#divPapas"),
  divBebida = document.querySelector("#divBebida"),
  hamburguesas = stock.filter((producto) =>
    producto.clasificacion.includes("hamburguesa")
  ),
  lomos = stock.filter((producto) => producto.clasificacion.includes("lomo")),
  papas = stock.filter((producto) => producto.clasificacion.includes("papas")),
  bebidas = stock.filter((producto) =>
    producto.clasificacion.includes("bebida")
  );

// Selecciona el array por categoria y devuelve el array correspondiente
function filtarProductos(categoria) {
  switch (categoria) {
    case divHamburguesa:
      return hamburguesas;
    case divLomo:
      return lomos;
    case divPapas:
      return papas;
    case divBebida:
      return bebidas;

    default:
      break;
  }
}


// Mostrar div pertinente a la categoria seleccionada
divCategorias.forEach((categoria) =>
  categoria.addEventListener("click", () => {
    reemplazarDiv(divIntercambiable, "d-none"),
      rellenarDiv(divProductos, filtarProductos(categoria));

// Recorre cada array que devuelve la funcion de filtrado y le agrega las distintas funcionalidades      
    filtarProductos(categoria).forEach((producto) =>
      seleccionarDiv(producto.id).addEventListener("click", () =>
        mostrarProducto(divProductos, producto).addEventListener("click", () =>
          guardarStorage(agregarAlCarrito(producto, carrito))
        )
      )
    );
  })
);

// Boton para volver al inicio del sitio
btnVolver.addEventListener("click", () => {
  reemplazarDiv(divIntercambiable, "d-none"),
    rellenarDiv(divProductos, arrayVacio);
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
