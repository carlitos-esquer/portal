//alert("probar que carga");


var next = 0;

$j(document).ready( function () {
	$j("#boton_index").click(function (){
		//alert("si entra");
		cambiarfoto(next);
		if (next < 2) {
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

function cambiarfoto(n){
	alert("Foto " + n.toString());
}

