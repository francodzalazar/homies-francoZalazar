// Funciones
function costoExtras(extras) {
  if (extras.toLowerCase() == "si") {
    for (let i = 3; i > 0; i--) {
      let extras = parseInt(
        prompt("Ingrese la cantidad de extras a agregar (Max 5.)")
      );
      if (extras <= 5 && extras >= 1) {
        for (let i = 0; i <= extras; i++) {
          valorExtras = i * 50;
        }
        i = 0;
      } else {
        alert("Opcion invalida, te quedan " + (i - 1) + " intentos");
      }
    }
  } else {
    valorExtras = 0;
  }
  return valorExtras;
}
function costoEnvio(envio) {
  if (envio == 2) {
    valorEnvio = 100;
  } else {
    valorEnvio = 0;
  }
  return valorEnvio;
}
let precioTotal = (producto, extras, envio) => producto + extras + envio;
function generarProducto(producto) {
  switch (producto) {
    case "HAMBURGUESA":
      let hamburguesa =
        producto +
        " " +
        prompt("Elige una opcion \n- Simple \n- Doble \n- Triple");
      return hamburguesa;
    case "LOMITO":
      let lomito =
        producto + " " + prompt("Elige una opcion \n- Simple \n- Completo");
      return lomito;
    case "PAPAS":
      let papas =
        producto + " " + prompt("Elige una opcion \n- Cheddar \n- Huevo");
      return papas;
    case "BEBIDA":
      let bebida =
        producto +
        " " +
        prompt("Elige una opcion \n- Agua \n- Gaseosa \n- Cerveza");
      return bebida;

    default:
      alert("Opción no disponible");
      break;
  }
}
function clasificar(producto, tipo, array) {
  if (tipo.toLowerCase() == "comida") {
    array.push(producto);
  } else if (tipo.toLowerCase() == "bebida") {
    array.push(producto);
  }
}
// Fin funciones

// Clases
class Producto {
  constructor(nombre, clasificacion, precio) {
    this.nombre = nombre.toUpperCase();
    this.clasificacion = clasificacion;
    this.precio = parseFloat(precio);
  }
}
// Fin clases

// Variables
let contador = 0;
let validarEntrada = true;
// Fin variables

// Ciclos
while (validarEntrada) {
  let productoCliente = prompt(
    "¿Que vas a consumir? \n- Hamburguesa \n- Lomito \n- Papas \n- Bebida"
  );

  const producto = new Producto(
    generarProducto(productoCliente.toUpperCase()),
    productoCliente,
    1000
  );
  console.log(producto);
  let nuevoProducto = prompt("Deseas agregar mas productos? SI - NO");
  if (nuevoProducto.toUpperCase() == "SI") {
    contador++;
  } else {
    validarEntrada = false;
  }
}
// Fin ciclos

// Condicionales
// if (producto > 0 && producto < 4) {
//   let extras = prompt("¿Desea agregar extras? \nSi \nNo");
//   let precioExtras = costoExtras(extras);
//   let envio = parseInt(
//     prompt(
//       "Elige tu metodo de retiro: \n1 Retiro en el local \n2 Necesito que me lo envien"
//     )
//   );
// }
// let precioEnvio = costoEnvio(envio);
//   switch (producto) {
//     case 1:
//       alert("Elegiste Hamburguesa");
//       alert("El costo del producto es $" + precioHamburguesa);
//       alert("El costo de los extras es $" + precioExtras);
//       alert("El costo del envio es $" + precioEnvio);
//       alert(
//         "El costo total del producto es $" +
//           precioTotal(precioHamburguesa, precioExtras, precioEnvio)
//       );
//       break;
//     case 2:
//       alert("Elegiste lomito");
//       alert("El costo del producto es " + precioLomito);
//       alert("El costo de los extras es " + precioExtras);
//       alert("El costo del envio es " + precioEnvio);
//       alert(
//         "El costo total del producto es " +
//           precioTotal(precioLomito, precioExtras, precioEnvio)
//       );
//       break;
//     case 3:
//       alert("Elegiste papas con beacon");
//       alert("El costo del producto es " + precioPapas);
//       alert("El costo de los extras es " + precioExtras);
//       alert("El costo del envio es " + precioEnvio);
//       alert(
//         "El costo total del producto es " +
//           precioTotal(precioPapas, precioExtras, precioEnvio)
//       );
//       break;

//     default:
//       alert("Opcion no disponible");
//       break;
//   }
// } else {
//   alert("Opcion no disponible");
// }
// Fin condicionales

// Arrays
// const comidas = [];
// const bebidas = [];
// Fin Arrays

// Objetos
// const producto1 = new Producto(
//   "hamburguesa simple",
//   "hamburguesa",
//   "comida",
//   850
// );
// const producto2 = new Producto(
//   "hamburguesa doble",
//   "hamburguesa",
//   "comida",
//   950
// );
// const producto3 = new Producto("lomito simple", "lomito", "comida", 1050);
// const producto4 = new Producto("lomito completo", "lomito", "comida", 1150);
// const producto5 = new Producto(
//   "coca 500 ml",
//   "bebida sin alcohol",
//   "bebida",
//   500
// );

// clasificar(producto1, producto1.tipo, comidas);
// clasificar(producto2, producto2.tipo, comidas);
// clasificar(producto3, producto3.tipo, comidas);
// clasificar(producto4, producto4.tipo, comidas);
// clasificar(producto5, producto5.tipo, bebidas);
// console.log(comidas);
// console.log(bebidas);

// for (const comida of comidas) {
//   console.log(
//     "Se agregó el producto " + comida.nombre + ", su precio es " + comida.precio
//   );
// }
// for (const bebida of bebidas) {
//   console.log(
//     "Se agregó el producto " + bebida.nombre + ", su precio es " + bebida.precio
//   );
// }
