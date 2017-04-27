/*function user(){*/
	var ingresa_tarea= document.getElementById('ingresa_tarea'),
	boton= document.getElementById('boton_agregar');

   /* //editar elemento de la lista
    for (var i=0; i<=tarea-list.children.length;i++){
      tarea-list.children[i]
    }*/
// agrega la nueva tarea
function anadirTarea(){
  var input = document.getElementById("ingresa_tarea");

  var contTarea = document.getElementsByClassName("tarea-list");

  contTarea[0].innerHTML += "<li>"+ input.value +"</li><br>";

  input.value = "";
  
};
