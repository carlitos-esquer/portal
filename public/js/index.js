var pagina = 0;

$j(document).ready( function () {
	$j("#boton_index").click( function (){
		window.location.assign("/"+paginas[pagina]);
	});
	$j("#boton_index").mouseenter( function() {
		$j("#boton_index").css("background-color","#3670C7");
	});
	$j("#boton_index").mouseleave( function() {
		$j("#boton_index").css("background-color","#2c5aa0");
	});
	setInterval(function(){fotograma()},5000);
	prepararEfectosRecuadros();
});

function texto(h1,h3_first,h3_last){
	this.h1 = h1;
	this.h3_first = h3_first;
	this.h3_last = h3_last;
}
 
var fotos = ["keyboard-540x360.jpg","classroom-540x360.jpg" ,"circuito-540x360.jpg"];

var textos = [ new texto("Soluciones a la medida",
			       "Todo lo que quieres en tu sitio para atraer clientes",
			       "Diseños a tu alcance con las mejores herramientas"),
			   new texto("Capacitación contínua",
			       "Entender la tecnología que necesitas",
			       "Cursos de programación, diseño web y linux"),
			   new texto("Soporte rápido y efectivo",
			       "Mantener tus equipos en perfecto estado",
			       "Optimizar tus recursos de hardware")
			 ];  

function fotograma(){
	if (pagina < 2) {
		pagina += 1;
	}
	else {
		pagina = 0;
	}
	$j(".texto h1").hide("slow");
	$j(".imagen").fadeOut("slow",function() {cambiarfoto(pagina)});
}

function cambiarfoto(n){
	$j("#img_index").attr("src","/img/fotos/"+fotos[n]);
	$j(".texto h1").text(textos[n].h1);
	$j(".texto h3:first").text(textos[n].h3_first);
	$j(".texto h3:last").text(textos[n].h3_last);
	$j(".imagen").fadeIn("slow");
	$j(".texto h1").show("slow");
}

var paginas = ["soluciones","capacitacion","soporte"];

function prepararEfectosRecuadros(){
	//alert("si prepara");
	$j(".recuadros div").mouseenter(function(){
		$j(this).css("background-color","#F4ECF5");
	});
	$j(".recuadros div").mouseout(function(){
		$j(this).css("background-color","#E2DBE3");
	});
}
