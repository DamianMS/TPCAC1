document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nombre = document.getElementById("nombre").value;
    let provincia = document.getElementById("select-provincia").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let checkbox = document.getElementById("checkbox").checked;
    

    let errorNombre = document.getElementById("error-nombre");
    let errorProvincia = document.getElementById("error-provincia");
    let errorPhone = document.getElementById("error-phone");
    let errorEmail = document.getElementById("error-email");
    let errorCheckbox = document.getElementById("error-checkbox");

    let isValid = true;

    
    if (!isNaN(nombre) || nombre.length < 3) {
        errorNombre.textContent = "El nombre es incorrecto";
        isValid = false;
    } else {
        errorNombre.textContent = "";
    }

    
    if (provincia === "opcion1") {
        errorProvincia.textContent = "Elija una provincia";
        isValid = false;
    } else {
        errorProvincia.textContent = "";
    }

    
    if (isNaN(phone) || phone.length < 9) {
        errorPhone.textContent = "El numero es incorrecto";
        isValid = false;
    } else {
        errorPhone.textContent = "";
    }

    
    if (!email.includes("@") || !email.endsWith(".com") || email.split("@")[0].length < 1) {
        errorEmail.textContent = "El mail es incorrecto";
        isValid = false;
    } else {
        errorEmail.textContent = "";

        
    if (!checkbox) {
        errorCheckbox.textContent = "Debe aceptar los términos y condiciones";
        isValid = false;
    } else {
        errorCheckbox.textContent = "";
    }
    }

    
    if (isValid) {
        document.getElementById("form").submit();
    }
});