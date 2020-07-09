/*** IMPORT src/maker.js */
var fn = function(){
   alert('hola');
}

document.getElementById("app").appendChild(make('p',{
    id:'id',class:'clase',content:"Este es un texto en un párrafo", events:{'click':fn,'mouseover':fn}
})); 