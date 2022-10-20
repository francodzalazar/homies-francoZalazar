// Funciones
function costoEnvio(envio) {
  if (envio == 2) {
    valorEnvio = 100;
  } else {
    valorEnvio = 0;
  }
  return valorEnvio;
}
let precioTotal = (producto, envio) => producto + envio;
function generarProducto(producto) {
  switch (producto) {
    case "HAMBURGUESA":
      let hamburguesa =
        producto +
        " " +
        prompt(
          "Elige una opcion \n- Simple \n- Doble \n- Triple"
        ).toUpperCase();
      return hamburguesa;
    case "LOMITO":
      let lomito =
        producto +
        " " +
        prompt("Elige una opcion \n- Simple \n- Completo").toUpperCase();
      return lomito;
    case "PAPAS":
      let papas =
        producto +
        " " +
        prompt("Elige una opcion \n- Cheddar \n- Huevo").toUpperCase();
      return papas;
    case "BEBIDA":
      let bebida =
        producto +
        " " +
        prompt("Elige una opcion \n- Agua \n- Coca \n- Cerveza").toUpperCase();
      return bebida;

    default:
      alert("Opción no disponible");
      break;
  }
}
function agregarAlCarrito(producto, stock, carrito) {
  let eleccion = stock.filter((elemento) => elemento.nombre.includes(producto));
  carrito.push.apply(carrito, eleccion);
}
// Fin funciones

// Clases
class Producto {
  constructor(nombre, clasificacion, precio, imagen) {
    this.nombre = nombre.toUpperCase();
    this.clasificacion = clasificacion;
    this.precio = parseFloat(precio);
    this.imagen = imagen;
  }
}
// // Fin clases

// // Arrays
const stock = [
  new Producto(
    "hamburguesa simple",
    "hamburguesa",
    850,
    "assets/img/hamburguesas/hambur-simple.png"
  ),
  new Producto(
    "hamburguesa doble",
    "hamburguesa",
    950,
    "assets/img/hamburguesas/hambur-doble.png"
  ),
  new Producto(
    "hamburguesa triple",
    "hamburguesa",
    1050,
    "assets/img/hamburguesas/hambur-triple.png"
  ),
  new Producto(
    "lomo simple",
    "lomo",
    1050,
    "assets/img/lomos/lomo-simple.png"
  ),
  new Producto(
    "lomo completo",
    "lomo",
    1150,
    "assets/img/lomos/lomo-completo.png"
  ),
  new Producto(
    "papas cheddar",
    "papas",
    800,
    "assets/img/papas/papas-beacon.png"
  ),
  new Producto(
    "papas huevo",
    "papas",
    750,
    "assets/img/papas/papas-huevo.png"
  ),
  new Producto(
    "agua saborizada de manzana 500 ml",
    "bebida",
    500,
    "assets/img/bebidas/agua-mzna-500ml.png"
  ),
  new Producto(
    "coca 500 ml",
    "bebida",
    500,
    "assets/img/bebidas/coca-500ml.png"
  ),
  new Producto(
    "pinta de cerveza",
    "bebida",
    600,
    "assets/img/bebidas/cerveza-500ml.png"
  ),
];
// const carrito = [];
// // Fin Arrays

// // // Variables
// const total = "";
// let validarEntrada = true;
// // Fin variables

// // Ciclos
// while (validarEntrada) {
//   let productoCliente = prompt(
//     "¿Que vas a consumir? \n- Hamburguesa \n- Lomito \n- Papas \n- Bebida"
//   ).toUpperCase();
//   agregarAlCarrito(generarProducto(productoCliente), stock, carrito);

//   let nuevoProducto = prompt("Deseas agregar mas productos? SI - NO");

//   if (nuevoProducto.toUpperCase() != "SI") {
//     validarEntrada = false;
//     if (
//       productoCliente == "HAMBURGUESA" ||
//       productoCliente == "LOMITO" ||
//       productoCliente == "PAPAS" ||
//       productoCliente == "BEBIDA"
//     ) {
//       let envio = parseInt(
//         prompt(
//           "Elige tu metodo de retiro: \n1 Retiro en el local \n2 Necesito que me lo envien"
//         )
//       );

//       carrito.forEach((producto) => {
//         alert(
//           "Elegiste " + producto.nombre + " y su precio es " + producto.precio
//         );
//       });

//       alert("El costo del envio es " + costoEnvio(envio));

//       const total = carrito.reduce((acumulador, producto) => {
//         return (acumulador += producto.precio);
//       }, 0);

//       alert("El total es " + precioTotal(total, costoEnvio(envio)));
//     }
//   }
// }
// Fin ciclos

function reemplazarDiv(div1, div2) {
  div1.classList.replace("div--visible", "div--invisible");
  div2.classList.replace("div--invisible", "div--visible");
}
function rellenarDiv(div, productos) {
  productos.forEach(producto => {
    div.innerHTML += `<img src=${producto.imagen}> `
  });
  ;
  return div
}
const divCards = document.querySelector("#divCards"),
  divProductos = document.querySelector("#divProductos"),
  divCategorias = document.querySelectorAll(".main__div--producto"),
  divHamburguesa = document.querySelector("#divHamburguesa"),
  divLomo = document.querySelector("#divLomo"),
  divPapas = document.querySelector("#divPapas"),
  divBebida = document.querySelector("#divBebida");

// divCategorias.forEach((elemento) =>
//   elemento.addEventListener("click", () =>
//     reemplazarDiv(divCards, divProductos)
//   )
// );

const hamburguesas = stock.filter((producto) =>
  producto.clasificacion.includes("hamburguesa")
);
const lomos = stock.filter((producto) =>
  producto.clasificacion.includes("lomo")
);
const papas = stock.filter((producto) =>
  producto.clasificacion.includes("papas")
);
const bebidas = stock.filter((producto) =>
  producto.clasificacion.includes("bebida")
);

divHamburguesa.addEventListener("click", () =>
  reemplazarDiv(divCards, rellenarDiv(divProductos, hamburguesas))
);
divLomo.addEventListener("click", () =>
  reemplazarDiv(divCards, rellenarDiv(divProductos, lomos))
);
divPapas.addEventListener("click", () =>
  reemplazarDiv(divCards, rellenarDiv(divProductos, papas))
);
divBebida.addEventListener("click", () =>
  reemplazarDiv(divCards, rellenarDiv(divProductos, bebidas))
);

// );
// let img = `<img src="assets/img/hamburguesas/hambur-simple.png" alt="hamburguesa-simple">`;
// divProductos.innerHTML = img;