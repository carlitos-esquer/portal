var next = 1;

$j(document).ready( function () {
	$j("#boton_index").click(function (){
		//alert("si entra");
		cambiarfoto(next);
		if (next < 3) {
		next += 1;
		}
		else {
			next = 0;
		}
	});
	$j("#boton_index").mouseenter( function() {
		$j("#boton_index").css("background-color","#3670C7");
	});
	$j("#boton_index").mouseleave( function() {
		$j("#boton_index").css("background-color","#2c5aa0");
	});
});

var fotos = ["keyboard-540x360.jpg","circuito-540x360.jpg","wires-540x360.jpg","classroom-540x360.jpg" ]

var texto = new Object;
texto.h1 = "Otro texto ";
function cambiarfoto(n){
	$j("#img_index").attr("src","/img/fotos/"+fotos[n]);
	$j(".texto h1").text(texto.h1+n.toString());
}
