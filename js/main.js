function validateForm(){
    var nombre = document.getElementById("name").value;
       if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
          alert("Tiene que escribir su nombre");
         }
    var apellido = document.getElementById("lastname").value;
       if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
          alert("Tiene que escribir su apellido");
         }
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
    }
    var contra = document.getElementById("input-password").value;
        if(contra.length < 5 ){
            alert("Contraseña al menos de 6 caracteres");
        }else if(contra == "123456" || contra =="password" || contra == "098754"){
            alert("Por favor escriba otra contraseña");
        }
    if (document.getElementsByTagName("select")[0].value == 0){
        alert("Selecciona tu tipo de bici");
    }
}
