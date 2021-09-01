var Global =  "esto es global";

var funcion = function(){
    // Tiene que estar adentro de la funcion para que se pueda acceder al contenido
    // var local = "Esta es local";

    // example
    alert(local);
 
    //Nivel de scope en javaScript
    var funLocal = function(){
        // var local = "Esto es una variable loca, dentro de una funcion local";
        alert(local);
    }
    funLocal();
    // alert(Global);
    // //cambia el valor de la varibale
    // Global = "se modifica la variable global";
}

funcion();
// alert(local);

