//Utilerías para extender javascript
function my(id){
	return document.getElementById(id);
}

/* Estas funciones ya están en prototype.js
Object.prototype.mouseenter = function(f) { 
	if (this.onmouseenter != undefined ) {
		this.onmouseenter = f;
	}
}
*/

function array_each(f){
	for (e=0; e<this.length; e++){
		f(this[e]);
	}
}
/* Estas funciones ya están en prototype.js
Array.prototype.each  = array_each;
Array.prototype.empty = function() { return this.length == 0; }
Array.prototype.first = function() { return this.empty() ? undefined : this[0]; }
Array.prototype.last  = function() { return this.empty() ? undefined : this[this.length - 1]; }
*/
var menus = ["inicio","desarrollo","capacitacion","portafolio","blog","nosotros"];
var imagenes = ["slider1.png","slider2.png","slider3.png","slider4.png","slider5.png","slider6.png"];
var imgCount = 0;

function prepararEfectos(){
	menus.each( function(m) {
		my("mnu-"+m).style.opacity = "0.7";
		my("mnu-"+m).onmouseenter = function() {
			this.style.opacity = "1";
			my("info-"+m).style.left = this.offsetParent.offsetLeft;
			my("info-"+m).style.display = "inline";
		}
		my("mnu-"+m).onmouseout = function() {
			this.style.opacity = "0.7";
			my("info-"+m).style.display = "none";
		}
		//my("info-"+m).style.display = "none";
	});
}

function doIt() {
		//alert("Hola");
		$j("#facebook").css("opacity","0.2");
		win1.setContent("contenido",true,true);
		win1.show();
}

function prepararMenus(){
	$j(".info").hide();
	menus.each( function(m) {
		$j("#mnu-"+m).css("opacity","0.7");
	});
	$j("#btnAceptar").click( function() {
		doIt();
	});
}

function activarMenus(){
	menus.each( function(m) {
			$j("#mnu-"+m).mouseenter( function() {
				$j("#mnu-"+m).css("opacity","1.0");
				/*$j("#mnu-"+m).attr("width","64px");
				$j("#mnu-"+m).attr("height","64px");*/
				var mnu = $j("#mnu-"+m).offset();
				$j("#info-"+m).css("left",mnu.left); //$j(".menu").css("left")
				//$j("#info-"+m).css("left",mnu.top);
				$j("#info-"+m).slideDown("fast");
			});
			$j("#mnu-"+m).mouseleave( function() {
				$j("#mnu-"+m).css("opacity","0.7");
				/*$j("#mnu-"+m).attr("width","48px");
				$j("#mnu-"+m).attr("height","48px");*/
				$j("#info-"+m).slideUp("fast");
			});
	});
}

function sliding(){
	$j(".slider").fadeOut("slow", function() {
			$j(".slider").css("background-image","url('/img/"+imagenes[imgCount]+"')");
		}
	);
	$j(".slider").fadeIn("slow");
	if (imgCount < 5) { imgCount += 1 }
	else { imgCount = 0 }
}

var opaco = false;
function fotograma(){
	//alert("hola","mundo");
	var o = Math.random(1);
	var opacities = [0.4,0.5,0.6,0.7,0.8,0.9,1];
	if (opaco) {
		my("slider").style.opacity = "1.0";
		opaco = false; }
	else {
		my("slider").style.opacity = "0.7";
		opaco = true;
	} 
	/*opacities.each( function(o) {
		my("slider").style.opacity = o.toString();
		for (var i=0; i < 2000000; i++);*/
}
var win1 = "";
function mostrarVentana(){
	win1 = new Window("foto", {className: "bluelighting", title: "Zinlim Soluciones", 
										width:256, height:150, destroyOnClose: true, recenterAuto:false
						}); 
	win1.getContent().update("<h1>¡Bienvenido a Zinlim!</h1><p>Soluciones de Código Abierto, para la Web y el Escritorio<p>"); 
	win1.showCenter();
}
var temas=[   [ "white","#3C003D","#E2DBE3"],
			 ["#214478","#3C003D","#E2DBE3"],
			 ["#142F45","#336E9E","#DAE2E9"],
             ["#231862","#483D8B","#D2CDEF"],
             ["#154815","#39BF39","#CFEBCF"],
             ["#3C003D","#9A5F9B","#F1D5F2"],
             ["#336E9E","#142F45","#DAE2E9"],
             ["#483D8B","#231862","#D2CDEF"],
             ["#39BF39","#154815","#B9E6B9"],
             ["#9A5F9B","#3C003D","#F1D5F2"],
             ["#3C003D","white","lightgray"],
             ["#235C72","#2BB7EC","#C3D2D8"]
           ];
var temaActual = 0;
var tn = temas.length - 1;

function cambiarTema(){
	$j(".banner").css("background-color",temas[temaActual][1]);
	$j(".menubar").css("background-color",temas[temaActual][0]);
	$j("body").css("background-color",temas[temaActual][2]);
	$j(".creditos").css("background-color",temas[temaActual][0]);
	$j(".derechos").css("background-color",temas[temaActual][1]);
	$j(".slider").css("border-color",temas[temaActual][2]);
	$j(".social").css("background-color",temas[temaActual][0]);
	if (temaActual < tn) { 
		temaActual += 1;
	}
	else {
		temaActual = 0;
	}
}

function activarControles(){
	$j("#index").accordion();
	$j("#tema").button().click( function(event){
			cambiarTema();
		}
	);
	$j("#ingresar").button().click( function(event){
			//cambiarTema();
		}
	);
	$j("#slider").resizable();
	$j("#slider").draggable({appendTo: "body"});
}
