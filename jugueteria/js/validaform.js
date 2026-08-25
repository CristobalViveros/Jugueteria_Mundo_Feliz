let formulario =document.getElementById("contacto");
let nombre=document.getElementById("nombre");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        alert("El nombre debe contener solo letras");
        nombre.focus();
        return;
    }

    alert("Compra exitosa!!");
});