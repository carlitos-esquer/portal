//Utilerías para extender javascript
function my(e){
	return document.getElementById(e);
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

var menus = ["inicio","desarrollo","capacitacion","portafolio","blog","nosotros"];
var imagenes = ["banner1.png","banner2.png","banner3.png"]
var imgCount = 0;

function prepararMenus(){
	$(".info").hide();
	menus.each( function(m) {
		$("#mnu-"+m).css("opacity","0.7");
	});
}

function activarMenus(){
	menus.each( function(m) {
			$("#mnu-"+m).mouseenter( function() {
				$("#mnu-"+m).css("opacity","1.0");
				/*$("#mnu-"+m).attr("width","64px");
				$("#mnu-"+m).attr("height","64px");*/
				var mnu = $("#mnu-"+m).offset();
				$("#info-"+m).css("left",mnu.left); //$(".menu").css("left")
				$("#info-"+m).slideDown();
			});
			$("#mnu-"+m).mouseleave( function() {
				$("#mnu-"+m).css("opacity","0.8");
				/*$("#mnu-"+m).attr("width","48px");
				$("#mnu-"+m).attr("height","48px");*/
				$("#info-"+m).hide();
			});
	});
}

function sliding(){
	$("#banner").fadeOut("slow", function() {
			$("#banner").attr("src","/img/"+imagenes[imgCount]);
		}
	);
	$("#banner").fadeIn("slow");
	if (imgCount < 2) { imgCount += 1 }
	else { imgCount = 0 }
}
