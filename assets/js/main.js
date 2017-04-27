function user(){
	var newtarea= document.getElementById('ingresa_tarea'),
	boton= document.getElementById('boton_agregar');
};
// agrega la nueva tarea
function anadirTarea(){
  var input = document.getElementById("ingresa_tarea");

  var contTarea = document.getElementsByClassName("tarea-list");

  contTarea[0].innerHTML += "<li>"+ input.value +"</li><br>";

  input.value = "";
}
