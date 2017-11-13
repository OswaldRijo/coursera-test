
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var firstLetter ;
for (var i = 0; i < names.length; i++) {
  firstLetter = names[i].toLowerCase().charAt(0);
  if ( firstLetter == "j") {
    byeSpeaker.speak(names[i]);
  }else{
    helloSpeaker.speak(names[i]);
  }
  names[i];

}
//para que no importe donde colocar los archivos .js
// se debe agregar un evento de la siguiente forma

document.addEventListener("DOMContentLoaded", 
function (event){
	function sayHello (event){
		var message = "hola" + document.getElementById("input").value;
		console.log(message);
		document.getElementById("content").textContent = message;
		// para introducir elementos html se usa:
		// var message = "<h2>hola</h2>";
		// document.getElementById("content").innerHTML = message;
	}

	function reset(event){
		document.getElementById("content").textContent = "";
		document.getElementById("input").value = "";
	}
	document.querySelector("button").addEventListener("click", sayHello);
	document.querySelector("button").addEventListener("blur", reset);

}

	);







