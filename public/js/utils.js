function $(id) {
	return document.getElementById(id);
}
function array_each(f){
	for (e=0; e<this.length; e++){
		f(this[e]);
	}
}

Array.prototype.each  = array_each;
Array.prototype.empty = function() { return this.length == 0; }
Array.prototype.first = function() { return this.empty() ? undefined : this[0]; }
Array.prototype.last  = function() { return this.empty() ? undefined : this[this.length - 1]; }

function get_nombre(nom) {
	datos = {nombre: $(nom).value, edad: 35 }
	//nombre = document.getElementById(nom).value;
	return datos;
}
function demo(nom) {
	datos = get_nombre(nom);
	alert("Hola amigo " +datos.nombre + " : " +datos.edad.toString());
}
function bclick(){
	alert("Click...");
	return false;
}
function add_click(){
	$('informativa1').style.display="inline";
}
function menu1_mouse_over() {
	$('menu1').style.border = "3px solid RoyalBlue";
	$('texto_menu').style.MozTransform = "rotate(0deg)";
	$('add_button1').style.display = "inline";
	$('add_button1').style.opacity = "1.0";
	$('edit_button1').style.display = "inline";
	estilos = "";
	for (e in $('menu1').style){
		estilos += e.toString() + "\n";
	}
	//alert(estilos);
	//alert(trans);
	//alert(estilos);
}
function menu1_out(){
	$('menu1').style.border = "2px solid orange";
	$('texto_menu').style.MozTransform = "rotate(90deg)";
	$('add_button1').style.display = "none";
	$('edit_button1').style.display = "none";
}
function menu1_click() {
	//$('menu1').style.border = "2px solid orange";
	numeros = "";
	[1,2,3,4].each( function (e) { numeros += e.toString() + ","; } );
	alert(numeros + [5,6,7].first()+","+[5,6,7,8,9,10].last());
}
function dialog_click(){
	$('informativa1').style.display="none";
}
