// Variables
const divCards = document.querySelector("#divCards"),
  divProductos = document.querySelector("#divProductos"),
  divInicial = document.querySelectorAll(".main__div"),
  divCategorias = document.querySelectorAll(".main__div--producto"),
  btnVolver = document.querySelector("#volverInicio"),
  btnVerCarrito = document.querySelector("#verCarrito"),
  btnVaciarCarrito = document.querySelector("#btn-vaciar"),
  btnComprar = document.querySelector("#btn-comprar"),
  divHamburguesa = document.querySelector("#divHamburguesa"),
  divLomo = document.querySelector("#divLomo"),
  divPapas = document.querySelector("#divPapas"),
  divBebida = document.querySelector("#divBebida"),
  listadoCarrito = document.querySelector("#listadoCarrito"),
  totalCarrito = document.querySelector("#totalCarrito");
// Arrays
const carrito = [],
  controlProductos = [];
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
    document
      .getElementById(producto.id)
      .addEventListener("click", () => mostrarProducto(divProductos, producto));
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
// Filtrado de productos segun categoria que seleccionemos
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
function mostrarProducto(div, producto) {
  div.classList.replace("justify-content-between", "justify-content-center");
  div.innerHTML = `<div>
  <img src=${producto.imagen}>
  <h4>${producto.nombre}</h4>
  <h5>$ ${producto.precio}</h5>
  <label for="inputContador">Seleccione cantidad</label>
  <input type="number" name="inputContador" id="inputContador" value="1" class="w-25">
  <input type="submit" id="enviarDatos" value="Agregar al carrito" class="btn btn-primary">
  </div>`;
  const agregarCarrito = document.querySelector("#enviarDatos");
  agregarCarrito.addEventListener("click", () => {
    if (!controlProductos.includes(producto)) {
      controlProductos.push(producto);
      guardarStorage(
        "total",
        sumaCarrito(producto, carrito),
        "productos",
        producto.nombre
      ),
        agregarAlDivCarrito(crearDivCarrito(producto), producto.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya has agregado este producto al carrito",
      });
    }
  });
}
// Agregar o quitar contenido al carrito
function crearDivCarrito(producto) {
  let cantidadProductos = document.querySelector("#inputContador").value;
  const divCarrito = document.createElement("div");
  divCarrito.setAttribute(`id`, `div${producto.id}`);
  divCarrito.classList.add("col-12", "d-flex");
  divCarrito.innerHTML += `<div class="col-4">${producto.nombre}</div>
  <div class="col-4">${cantidadProductos} - $ ${
    producto.precio * cantidadProductos
  }
  </div>
  <div class="col-4">
  <button id="${
    producto.id
  }" class="btn btn-danger mx-5 my-3 btn--eliminar" type="button" >Eliminar</button>
  </div>`;
  return divCarrito;
}
function agregarAlDivCarrito(div, id) {
  listadoCarrito.appendChild(div);
  let btnEliminar = document.getElementById(id);
  btnEliminar.addEventListener("click", () => eliminarProducto(id));
}
function eliminarProducto(id) {
  const buscarId = controlProductos.find((element) => element.id === id);
  let productosFiltrados = [];
  console.log(controlProductos);
  productosFiltrados = controlProductos.filter((idProductos) => {
    return idProductos !== buscarId;
  });
  sessionStorage.clear();
  carrito.splice(0, carrito.length);
  controlProductos.splice(0, controlProductos.length);
  let divBorrar = document.getElementById("div" + id);
  divBorrar.remove();
  productosFiltrados.forEach((producto) => controlProductos.push(producto));
  if (productosFiltrados.length == 0) {
    guardarStorage("total", 0);
    return (totalCarrito.textContent = 0);
  }
  productosFiltrados.forEach((producto) =>
    guardarStorage(
      "total",
      sumaCarrito(producto, carrito),
      "productos",
      producto.nombre
    )
  );
  console.log("Carrito luego de realizar suma nueva " + carrito);
}
// Suma de los productos en el carrito
function sumaCarrito(producto, carrito) {
  let cantidadProductos = document.querySelector("#inputContador").value;
  carrito.push(producto.precio * cantidadProductos);
  let total = carrito.reduce((acumulador, total) => acumulador + total);
  totalCarrito.textContent = total;
  console.log("total carrito " + carrito);
  return total;
}
// Se guardan los datos del carrito en storage para su futura utilizacion
function guardarStorage(key, valor, key2, valor2) {
  sessionStorage.setItem(key, JSON.stringify(valor));
  sessionStorage.setItem(key2, JSON.stringify(valor2));
}
function recuperarStorage(dato) {
  let datosCarrito = JSON.parse(sessionStorage.getItem(dato));
  return datosCarrito;
}
// Acciones al vaciar carrito o confirmar compra
function vaciarCarrito() {
  totalCarrito.textContent = 0;
  carrito.splice(0, carrito.length);
  controlProductos.splice(0, controlProductos.length);
  sessionStorage.clear();
  listadoCarrito.innerHTML = "";
}
function compraExitosa() {
  vaciarCarrito();
  Swal.fire({
    icon: "success",
    title: "Wujuu!",
    text: "Compra exitosa",
  });
}

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

// Boton para visualizar carrito
btnVerCarrito.addEventListener("click", () => {
  let guardado = recuperarStorage("total");
  totalCarrito.textContent = guardado;
});

// boton para vaciar carrito o confirmar compra de productos
btnVaciarCarrito.addEventListener("click", () => vaciarCarrito());
btnComprar.addEventListener("click", () => {
  let alerta = Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No existen productos en el carrito",
  });
  carrito.length <= 0 ? alerta : compraExitosa();
});
