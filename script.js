const productos = [
  {
    id: 1,
    nombre: "Wilson Blade 98",
    descripcion: "Raqueta orientada a jugadores avanzados que buscan control.",
    precio: 25000,
    imagen: "https://wilsonstore.com.co/wp-content/uploads/2024/05/64f57681e7f6dd11f39f8e30_thumbnail.png"
  },
  {
    id: 2,
    nombre: " Wilson Clash 100",
    descripcion: "Raqueta versátil para jugadores de nivel intermedio.",
    precio: 18000,
    imagen: "https://wilsonstore.com.co/wp-content/uploads/2025/02/6702eb02ae55261721231e5b_thumbnail.png"
  },
  {
    id: 3,
    nombre: "Wilson Pro Staff 97",
    descripcion: "Raqueta para jugadores que priorizan precisión y sensaciones.",
    precio: 30000,
    imagen: "https://wilsonstore.com.co/wp-content/uploads/2026/02/68bfcb2f25a22abea0e13f4a_thumbnail.webp"
  },
  {
    id: 4,
    nombre: "Wilson US Open Pink Jumbo Ball",
    descripcion: "Pelota gigante edición especial del US Open. Ideal para decorar, coleccionar o conseguir autógrafos. 🩷",
    precio: 18000,
    imagen: "https://www.wilson.com/en-us/media/catalog/product/article_images/WR8218901_/WR8218901__96aa9d78103b380b9198adf9a0b929a7.png?auto=webp&quality=95&crop=false&fit=cover&orient=1&format=pjpg&optimize=high&enable=upscale&width=1057&height=1292&canvas=9%3A11&bg-color=F3F1EDg"
  },
  {
    id: 5,
    nombre: "Wilson Super Tour 9 Pack",
    descripcion: "Bolso para transportar raquetas y accesorios.",
    precio: 22000,
    imagen: "https://wilsonstore.com.co/wp-content/uploads/2024/05/60132869894f820500b48577_thumbnail.jpg"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
