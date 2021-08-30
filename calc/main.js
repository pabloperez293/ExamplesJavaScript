// Calculadora
// los parametros no tienen que ser iguales al id que se encuentra en el index, es opcional
var suma =  function (num1, num2){
    // getElementById extrae el valor del elemento en html
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var res = num1 + num2;

    return res;
}

// funcion de javascript transforma el texto en entero parseFloat