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
          "Elige una opcion \n1 Simple \n2 Doble \n3 Triple"
        ).toUpperCase();
      return hamburguesa;
    case "LOMITO":
      let lomito =
        producto +
        " " +
        prompt("Elige una opcion \n1 Simple \n2 Completo").toUpperCase();
      return lomito;
    case "PAPAS":
      let papas =
        producto +
        " " +
        prompt("Elige una opcion \n1 Cheddar \n2 Huevo").toUpperCase();
      return papas;
    case "BEBIDA":
      let bebida =
        producto +
        " " +
        prompt(
          "Elige una opcion \n1 Agua \n2 Gaseosa \n3 Cerveza"
        ).toUpperCase();
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
  constructor(codigo, nombre, clasificacion, precio) {
    this.codigo = codigo;
    this.nombre = nombre.toUpperCase();
    this.clasificacion = clasificacion;
    this.precio = parseFloat(precio);
  }
}
// Fin clases

// Arrays
const stock = [
  new Producto(1, "hamburguesa simple", "hamburguesa", 850),
  new Producto(2, "hamburguesa doble", "hamburguesa", 950),
  new Producto(3, "hamburguesa triple", "hamburguesa", 1050),
  new Producto(4, "lomito simple", "lomito", 1050),
  new Producto(5, "lomito completo", "lomito", 1150),
  new Producto(6, "papas cheddar", "papas", 800),
  new Producto(7, "papas huevo", "papas", 750),
  new Producto(8, "bebida agua", "bebida", 500),
  new Producto(9, "bebida coca", "bebida", 500),
  new Producto(10, "bebida cerveza", "bebida", 600),
];
const carrito = [];
// Fin Arrays

// // Variables
const total = "";
let validarEntrada = true;
// Fin variables

// Ciclos
while (validarEntrada) {
  let productoCliente = prompt(
    "¿Que vas a consumir? \n1 Hamburguesa \n2 Lomito \n3 Papas \n4 Bebida"
  ).toUpperCase();
  agregarAlCarrito(generarProducto(productoCliente), stock, carrito);
  let nuevoProducto = prompt("Deseas agregar mas productos? SI - NO");
  if (nuevoProducto.toUpperCase() != "SI") {
    validarEntrada = false;
    if (
      productoCliente == "HAMBURGUESA" ||
      productoCliente == "LOMITO" ||
      productoCliente == "PAPAS" ||
      productoCliente == "BEBIDA"
    ) {
      let envio = parseInt(
        prompt(
          "Elige tu metodo de retiro: \n1 Retiro en el local \n2 Necesito que me lo envien"
        )
      );
      carrito.forEach((producto) => {
        alert(
          "Elegiste " + producto.nombre + " y su precio es " + producto.precio
        );
      });
      alert("El costo del envio es " + costoEnvio(envio));
      const total = carrito.reduce((acumulador, producto) => {
        return (acumulador += producto.precio);
      }, 0);
      alert("El total es " + precioTotal(total, costoEnvio(envio)));
    }
  }
}

// Fin ciclos
