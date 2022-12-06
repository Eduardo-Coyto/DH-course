// perfil

// si esta en blanco => debe especificar el perfil de usuario

// si es "administrador" => ud tiene todos los permisos

// si es "asisente" => ud solo tiene permisos de registrar, modificar y consultar datos

// si es perfil "invitado" => ud solo tiene permisos para consultar datos

// si no es ninguno de los de arriba => perfil invalido

let perfil = "asistente".toLocaleLowerCase();

switch(perfil){
    case "":
        console.log("Debe especificar el perfil del usuario");
        break;
    case "administrador":
        console.log("ud tiene todos los permisos");
        break;
    case "asistente":
        console.log("ud solo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
        console.log("ud solo tiene permisos para consultar datos");
        break;
    default:
        console.log("perfil invalido");
        break;
}