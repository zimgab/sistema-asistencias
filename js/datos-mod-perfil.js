$(document).ready(function() {
	// miembro
	$('#datos-personales').click(function() {
	        $('#contenidos').load('../datos-perfil/datos-personales.html')
	    });
	$('#cambio-pass').click(function() {
	        $('#contenidos').load('../datos-perfil/cambio-password.html')
	    });
	$('#cambio-laboral').click(function() {
	        $('#contenidos').load('../datos-perfil/datos-info-laboral.html')
	    });
	$('#cambio-academico').click(function() {
	        $('#contenidos').load('../datos-perfil/datos-info-academico.html')
	    });
	$('#cambio-oraciones').click(function() {
	        $('#contenidos').load('../datos-perfil/datos-info-oraciones.html')
	    });
	$('#notificaciones').click(function() {
	        $('#contenidos').load('../notificacion/notificacion.html')
	    });

	// encargado
	$('#datos-personales').click(function() {
	        $('#contenidos').load('../datos-enc-perfil/datos-personales.html')
	    });
	$('#cambio-pass').click(function() {
	        $('#contenidos').load('../datos-enc-perfil/cambio-password.html')
	    });

	// movil miembro
	$('#load-personal').click(function(evt){
		$('#personal-movil').load('../datos-perfil-movil/datos-personales.html')
	});
	   
	$('#load-contra').click(function(evt){
		$('#contra-movil').load('../datos-perfil-movil/cambio-password.html')
	});

	$('#load-laboral').click(function(evt){
		$('#laboral-movil').load('../datos-perfil-movil/datos-info-laboral.html')
	});

	$('#load-academia').click(function(evt){
		$('#academia-movil').load('../datos-perfil-movil/datos-info-academico.html')
	});

	$('#load-religiosa').click(function(evt){
		$('#religiosa-movil').load('../datos-perfil-movil/datos-info-oraciones.html')
	});
	$('#load-notificaciones').click(function(evt){
		$('#notificaciones-movil').load('../datos-perfil-movil/notificaciones-movil.html')
	});

	// movil encargado
	$('#load-personal').click(function(evt){
		$('#personal-movil').load('../datos-enc-perfil-m/datos-personales.html')
	});
	   
	$('#load-contra').click(function(evt){
		$('#contra-movil').load('../datos-enc-perfil-m/cambio-password.html')
	});
});