//1 crear el elemento
var elemento = document.createElement("li"), // se utiliza la coma para decir que sigue otra var
//2-el nodo del texto
    contenido = document.createTextNode("New text");
//3- se agrega el elemtno
    elemento.appendChild(contenido);
//con el getElementById busca el id con el respectivo nombre bien 
var padre = document.getElementsByTagName("li")[0].parentNode,
// con el getElementByTagName busca los elementos li ol p etc...
     primerElemento = document.getElementsByTagName("li")[0];

    padre.insertBefore(elemento, primerElemento);
// body es para agregar al final el elemento
// document.body.appendChild(elemento);