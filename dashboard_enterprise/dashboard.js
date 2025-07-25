// 1. Validar sesión activa
const user = JSON.parse(localStorage.getItem('user'));

if (!user || !user.session_token) {
  alert('Tu sesión ha expirado. Inicia sesión nuevamente.');
  window.location.href = '../auth/index.html';
}

// 2. Mostrar datos del usuario
document.querySelector('.user-name').textContent = `${user.name} ${user.lastname}`;
document.querySelector('.user-email').textContent = user.email;

// 3. Funcionalidad para cerrar sesión
const logoutLink = document.querySelector('.logout a');

logoutLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevenir navegación directa
  localStorage.removeItem('user'); // Eliminar sesión del almacenamiento local
  window.location.href = '../auth/index.html'; // Redirigir al login
});
