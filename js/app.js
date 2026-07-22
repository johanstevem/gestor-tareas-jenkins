const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

function actualizarContador() {
    const pendientes = document.querySelectorAll("li:not(.completada)").length;
    contador.textContent = "Tareas pendientes: " + pendientes;
}

function agregarTarea() {

    const entrada = document.getElementById("nuevaTarea");

    const texto = entrada.value.trim();

    if (texto === "") {
        alert("Ingrese una tarea.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    const acciones = document.createElement("div");
    acciones.className = "acciones";

    const completar = document.createElement("button");
    completar.textContent = "✓";

    completar.onclick = function () {
        li.classList.toggle("completada");
        actualizarContador();
    };

    const eliminar = document.createElement("button");
    eliminar.textContent = "🗑";

    eliminar.onclick = function () {
        li.remove();
        actualizarContador();
    };

    acciones.appendChild(completar);
    acciones.appendChild(eliminar);

    li.appendChild(span);
    li.appendChild(acciones);

    lista.appendChild(li);

    entrada.value = "";

    actualizarContador();
}