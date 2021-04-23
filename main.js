var button = document.getElementById('button');

button.addEventListener('click', function () {
	notify();
	// body...
})
function notify(){

	if (!("Notification" in window)){
		alert("Tu navegador no soporta notificaciones");


	}else if(Notification.permission === "granted"){

		var Notification = new Notification("Mi primer notificacion");

	}else if(Notification.permission !== "denied"){
		notification.requestPermission(function(permission){
			if (Notification.permission === "granted") {

				var notification = new Notification("HOla perros");
			}




		});
	}
}