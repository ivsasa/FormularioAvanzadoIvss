
document.querySelector("#myForm").addEventListener("submit", validarFormulario);
    
function validarFormulario (evento) {
    evento.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    if(nombre.length == 0){
         alert ("No has escrito nada en el nombre");
    }

    var apellidos = document.querySelector("#apellidos").value;
    if(apellidos.length == 0){
         alert ("No has escrito nada en apellidos");
    }

    var email = document.querySelector("#email").value;
    if(email.length == 0){
         alert ("No has escrito nada en email");
    }

}

