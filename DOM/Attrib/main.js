var element = document.createElement("div"),
 father = document.getElementById("content"),
 ref = document.getElementsByTagName("div")[0];
element.setAttribute("class","red");
father.insertBefore(element,ref);

//esto sirve para cambiar atributos