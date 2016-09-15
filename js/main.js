function validateForm(){
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var contra = document.getElementById("input-password").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(nombre.length == 0 && apellido.length == 0 && document.querySelector('select').value == 0)
        alert("No se permiten campos vacios");
    else{

/* Los campos nombre y apellido la primera letra debe ser mayúscula */

        if (nombre.charAt(0) == nombre.charAt(0).toLowerCase())
            alert("La primera letra del nombre debe ser Mayuscula");
        else
        return true;
        if (apellido.charAt(0) == apellido.charAt(0).toLowerCase())
            alert("La primera letra del apellido debe ser Mayuscula");
        else
        return true;

/* Validar que el campo email tenga un formato válido. Ej: name@domain.com */

        if ( !expr.test(email) ){
            alert("Error: La dirección de correo " + email + " es incorrecta.");
        }

/*  El campo password debe tener al menos 6 caracteres y password no puede ser igual a "password" ó "123456" ó "098754" */

        if(contra.length < 5 ){
            alert("Contraseña al menos de 6 caracteres");
        }else if(contra == "123456" || contra =="password" || contra == "098754"){
            alert("Por favor escriba otra contraseña");
        }

/* El valor seleccionado de bicis, debe ser una de las opciones presentadas */

        if (document.getElementsByTagName("select")[0].value == 0){
            alert("Selecciona tu tipo de bici");
        }
    }
}
