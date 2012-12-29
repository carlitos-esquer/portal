//alert("probar que carga");
$j(document).ready( function () {
	$j("#boton_index").click(function (){
		alert("Hacer click");
	});
	$j("#boton_index").mouseenter( function() {
		$j("#boton_index").css("background-color","#3670C7");
	});
	$j("#boton_index").mouseleave( function() {
		$j("#boton_index").css("background-color","#2c5aa0");
	});
});
