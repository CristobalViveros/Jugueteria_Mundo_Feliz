// ============================================
// FUNCIÓN 1: Año actual dinámico en el footer
// ============================================
document.getElementById("anio-actual").textContent = new Date().getFullYear();


// ============================================
// FUNCIÓN 2: Marcar tarjetas como favoritas
// ============================================
const tarjetas = document.querySelectorAll(".tarjeta");
const contadorFavoritos = document.getElementById("contador-favoritos");
let totalFavoritos = 0;

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("favorito");

        if (tarjeta.classList.contains("favorito")) {
            totalFavoritos++;
        } else {
            totalFavoritos--;
        }

        contadorFavoritos.textContent = "Favoritos: " + totalFavoritos;
    });
});


// ============================================
// FUNCIÓN 3: Validación del formulario de contacto
// ============================================
const formContacto = document.getElementById("form-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formContacto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeFormulario.textContent = "Por favor completa todos los campos antes de enviar.";
        mensajeFormulario.style.color = "red";
        return;
    }

    mensajeFormulario.textContent = "¡Gracias " + nombre + "! Tu mensaje fue enviado.";
    mensajeFormulario.style.color = "green";
    formContacto.reset();
});
