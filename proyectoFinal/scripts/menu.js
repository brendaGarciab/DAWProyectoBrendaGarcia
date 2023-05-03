// Selecciona el botón de hamburguesa
var menuToggle = document.getElementById("menu-toggle");

// Selecciona la barra de navegación
var navbarCollapse = document.getElementById("bs-example-navbar-collapse-1");

// Agrega un evento de clic al botón de hamburguesa
menuToggle.addEventListener("click", function() {
  // Alterna la clase 'collapse' en la barra de navegación
  navbarCollapse.classList.toggle("collapse");
});
