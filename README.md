# Generador de HTML

Importando el módulo se accede a una función make que recibe dos parámetros. 
1. Un objeto con propiedad valor de las propiedades html y su valor. 
2. Un string con el tipo de elemento.

document.getElementById('id').appendChild(Make(stringElemento,{propiedad:valor}));

Dos propiedades especiales:
content: para contenido.
child: recibe un objeto con un elemento para ser anidado. 
events: eventos en elementos.
