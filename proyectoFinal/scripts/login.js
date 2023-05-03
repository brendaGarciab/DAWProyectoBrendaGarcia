const loginBtn = document.getElementById('login-btn');
const cancelBtn = document.getElementById('cancel-btn');
const form = document.querySelector('form');

loginBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const firstName = form['first-name'].value;
  const lastName = form['last-name'].value;
  const username = form.username.value;
  const password = form.password.value;
  console.log(`Nombre: ${firstName}, Apellido: ${lastName}, Nombre de usuario: ${username}, Contraseña: ${password}`);
  // Aquí puedes agregar la lógica para verificar el nombre de usuario y contraseña
});

cancelBtn.addEventListener('click', function(event) {
  event.preventDefault();
  form.reset();
});
