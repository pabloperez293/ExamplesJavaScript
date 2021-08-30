// Arrays
let friends = ["Agustin", "PAblo", "catriel"];
document.write(friends[10]);

friends[0] = "ariel";
//agrega el primer nombre

//propiedad de length que cuenta cuantos elemento
document.write(" tienes " + friends.length + "amiguitoss");
//de esta forma se agrega al final 
friends[friends.length] = "Agustina";
//con push se agrega al final
friends.push("esteban","lau","hernan");
//se elimina con pop
friends.pop();
//otros arrayas
let friends2 = ["luis","lucas","juan"];

let friends3 = friends.concat(friends2);
document.write(friends3);
//nos permite agregar caracteres a nuestros elementos
document.write(friends.join(" : "));
//deja el elemento del array ordenado
let order = friends.join();
document.write(order);
