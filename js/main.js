function validateForm(){

    //Todos los campos son obligatorios, excepto los dos últimos.

    //Los campos nombre y apellido sólo deben permitir caracteres de la A-Z


    //Para los campos nombre y apellido la primera letra debe ser mayúscula

    //El campo password debe tener al menos 6 caracteres
    if(document.getElementById('input-password').value.length < 5){
        alert("Inserte su contraseña de al menos 6 caracteres")
    }
    //El campo password no puede ser igual a "password" ó "123456" ó "098754"
    var contraseña = document.getElementById('input-password').value;
        if (contraseña == "123456" || contraseña == "password" || contraseña == "0987654"){
            alert ("Ingresa contraseña valida");
        }

    //El valor seleccionado de bicis, debe ser una de las opciones presentadas
     if(document.getElementsByTagName('select')[0].value == 0){
            alert("Selecciona un tipo de bici");
    }

}
