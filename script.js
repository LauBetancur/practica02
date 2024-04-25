const agregarPersonaje = (nombre, imagen) => {
    const contenedor = document.getElementById("personajes");
  
    const personaje = document.createElement("div");
    personaje.innerHTML = `
    <div class="personaje">
      <h5 class="personaje__nombre">${nombre}</h5>
      <img class="personaje__imagen" src="${imagen}" />
    </div>`;
  
    contenedor.appendChild(personaje);
  };
  const render = async () => {
    try {
        const response = await fetch('personajes.json');
        const data = await response.json();
        const personajes = data.personajes;
        personajes.forEach(personaje => {
            agregarPersonaje(personaje.name, personaje.image);
        });
    } catch (error) {
        console.error('Error fetching and parsing data:', error);
    }
};

document.addEventListener("DOMContentLoaded", render);