let producto = parseInt(
  prompt("Que vas a consumir \n1 Hamburguesa \n2 Lomito \n3 Papas con beacon")
);
let extras = prompt("Desea agregar extras?");
let envio = parseInt(
  prompt(
    "Elige tu metodo de retiro: \n1 Retiro en el local \n2 Necesito que me lo envien"
  )
);

function costoExtras(extras) {
  if (extras == "SI" || extras == "Si" || extras == "si") {
    valorExtras = 50;
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

let precioHamburguesa = 1000;
let precioLomito = 1200;
let precioPapas = 850;
let precioExtras = costoExtras(extras);
console.log(precioExtras);
let precioEnvio = costoEnvio(envio);

switch (producto) {
  case 1:
    alert("Elegiste Hamburguesa");
    alert("El costo del producto es " + precioHamburguesa);
    alert("El costo de los extras es " + precioExtras);
    alert("El costo del envio es " + precioEnvio);
    alert(
      "El costo total del producto es " +
        precioTotal(precioHamburguesa, precioExtras, precioEnvio)
    );
    break;
  case 2:
    alert("Elegiste lomito");
    alert("El costo del producto es " + precioLomito);
    alert("El costo de los extras es " + precioExtras);
    alert("El costo del envio es " + precioEnvio);
    alert(
      "El costo total del producto es " +
        precioTotal(precioLomito, precioExtras, precioEnvio)
    );
    break;
  case 3:
    alert("Elegiste papas con beacon");
    alert("El costo del producto es " + precioPapas);
    alert("El costo de los extras es " + precioExtras);
    alert("El costo del envio es " + precioEnvio);
    alert(
      "El costo total del producto es " +
        precioTotal(precioPapas, precioExtras, precioEnvio)
    );
    break;

  default:
    alert("Opcion no disponible");
    break;
}
