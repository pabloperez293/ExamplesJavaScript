// var firstElement = document.getElementById("first");
// firstElement.innerHTML = "New Text";
//se modifica eñ contenido el primer elemento por el new text

var element = document.createElement("li");
var content = document.createTextNode("New text");

element.appendChild(content);

var father = document.getElementsByTagName("li")[0].parentNode;
ref =  document.getElementsByTagName("li")[0];
// father.replaceChild(element,ref);
// line 5 al 12 sirve para remplazar el text

father.removeChild(ref);