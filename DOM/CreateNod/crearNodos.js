// getElementsByTagNameNS() 
var elementP = document.getElementsByTagName("p");
var second = document.getElementById("segundo");

//tengo que crear un elemento o nodo

//1- Crear el elemento
var elemento = document.createElement("h2");
//2- Cread un nodo de texto
var contenido =  document.createTextNode("Este es el titulo");
//3- añadir nodo de texto al elemento
elemento.appendChild(contenido);
//4- agregar atributos al elemento
elemento.setAttribute("align","center");
//5- agregar el elemento al documento
document.getElementById("sub").appendChild(elemento);

// estos sirven para colocar informacion en el html sin tener que suarlo, 
// appendchild sirve para agregar elemento , dependiendo del lugar depende el getElementById