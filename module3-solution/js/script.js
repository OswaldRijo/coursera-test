$(function (){
	$("#boton").blur(function(event){
		if(window.innerWidth<768){	
			$("#myNavbar").collapse('hide');
		}
	});
});
	
(function(global){
	var dinamic = {};
	var mainContent= "/partes/main-content.html";

	var insertaHtml = function (target, html){
		console.log(html);
		document.querySelector(target).innerHTML = html;
	};

	var cargando = function (target){
		var html = "<div class='text-center'>";
		html+="<img src='/viajes/logo_portada.gif'></div>";
		insertaHtml(target,html);

	};

	document.addEventListener("DOMContentLoaded", function(event){ // pude haber puesto--> $(function() {})
		cargando("#content");
		$ajaxUtils.sendGetRequest(mainContent, function(request){
			document.querySelector("#content").innerHTML = request;
			console.log(request);
		},false);
	});


	var slide = {};




	global.$slide=slide;
	global.$dinamic = dinamic;
})(window);	
		