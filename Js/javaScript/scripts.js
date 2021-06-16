// Calentamiento de JavaScript
// var nombre = 'pablo';
// console.log(nombre);

// var a = 1 ;
// console.log(a);

// var b = 2;
// var c = a + b;

// console.log(c);
 

// Operaciones matematicas

// 1 pasar de horas a segundos
var horas = 2;
var segundos = horas * 3600;

console.log(segundos);

// pasar de grados celcius a fahrenhet

var gr_celcius = 30;
var gr_far = gr_celcius * 9/5 + 32;
console.log(gr_far);

// Funcion para que la salida se vea en parametros
function converter(gr_celcius) {
    var gr_far = gr_celcius * 9/5 +32;
    return gr_far;
}
console.log(converter(40));
console.log(converter(35));
console.log(converter(20));

// Concatenacion de letras

var name = "ABCD", surname = "EFG";
var n_complete = name + " " + surname;
console.log(n_complete);

console.log(name + " "+ surname);
console.log("Los años son: " + 28);

// Pomer color en las textos, funciones anidadas
function decorate(text) {
    return "###" + text + "###";
}
console.log(decorate("Hello"));

function decorate_much(text) {
    var a = decorate(text);
    return "---" + a + "---";
}
console.log(decorate_much("Hello"));

// Condicion de true and false con el IF

var distance = 100;

if(distance > 100) {
    console.log("far");
}
if(distance < 100) {
    console.log("close");
}
if(distance == 100) {
    console.log("same");
}
if(distance != 100) {
    console.log("Diferent to 100");
}
var condition = distance == 100;
console.log(condition);

if(condition) {
    console.log("condition is true");
}
//  Operaciones y logicas Booleanods

var age = 101;
var time_carrer = 10;
var is_deport = 3 > 5;
var is_smoke = true;

//  operador  and y &&
console.log(is_smoke && is_deport);
// operador or o
console.log(is_deport || is_smoke);

if(is_deport && age > 30) {
    console.log("the winner");
}
if(is_smoke && age > 100) {
    console.log("the very lucky");
}
// negacion
    var other = !is_deport;

    console.log(other);
    console.log(is_deport);

// Condiciones if else if

var note = 3.5;

if (note > 4) {
    console.log("Aprobado");
}
else if (note > 3 && note<= 4 ) {
    console.log("flojo");
}
else{
    console.log("Reprobado");
}
// Condicional Switch

// var not = "2"; pra el caso simple de casos
// Ahora se rellena cno funciones

// function message_end(note){
//     switch(not) {
//         case "a" :
//             console.log("Very nice");
//             break;
//         case "b" :
//             console.log("Nice");
//             break;
//         case "c" :
//             console.log("mmmm");
//             break;
//         default:
//             console.log("Fail");
//             break;
//     }
// }
 

// function decorador(nombre, genero) {
//         if (genero == "M") {
//             return "Sr" + nombre;
//         }
//         else if ( genero == "F") {
//             return "Sra" + nombre;
//         }
//         else {
//             return "ingresar M o F";
//         }
// }
//     console.log(decorador("Pablo", "xa  "));

    // iteracciones 

    var num = 1;
    
    while(num <= 100) {
        console.log(num);
        num++;
        // break se puede cprtar ña iteraccion
        if (num == 50 ){
            continue;
        }
        console.log(num);
    }
    console.log("se acabo el conteo")