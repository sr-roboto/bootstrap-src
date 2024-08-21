document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('http://localhost:3368/user/');
    const users = await response.json();

    const userTableBody = document.getElementById('userTableBody');
    users.forEach((user) => {
      const row = document.createElement('tr');
      row.innerHTML = `
              <td>${user.NombreUsuario}</td>
              <td>${user.ApellidoUsuario}</td>
              <td>${user.Genero}</td>
              <td>${user.FechaNacimiento}</td>
              <td>${user.Pais}</td>
              <td>${user.Email}</td>
          `;
      userTableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
});
