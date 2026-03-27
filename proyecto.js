const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");

async function getPost() {
  try {
    const response = await fetch("./proyectos/" + id + ".json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    document.getElementById("id").innerText = data.id;
    document.getElementById("proyecto").innerText = data.proyecto;
    document.getElementById("unidad").innerText = data.unidad;
    document.getElementById("turno").innerText = data.turno;
    document.getElementById("domicilio").innerText = data.domicilio;
    document.getElementById("contacto").innerText = data.contacto;
    document.getElementById("responsable").innerText = data.responsable;
    document.getElementById("objetivo").innerText = data.objetivo;
    document.getElementById("modalidad").innerText = data.modalidad;

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getPost();
