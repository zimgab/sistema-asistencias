function validar(){
 	try{
 	var apellidopaterno, apellidomaterno, primernombre, segundonombre, lugarnacimiento, diasnac, mesnac, anonac, colonia, domicilio,
 	 entrecalles, telefonofijo, telefonomovil1,telefonomovil2, vivocon, email, nombredelpadre, nombredelamadre, cargo,
 	 nombredelaempresa, diasquelaboras, horarios, direccion, telefonoemp, estudios, horariosest, lugarest, diasest, $diasest1,$estudios1,$lugarest17,test1,
 	lugarbut, fechabau, diaconobau, encargadoenturno, lugaresp, anobautismoesp, diaconoesp, encargadoenturnoesp, am5, am9, pm12,
 	 pm6, pm8, coro, obreros, guardia, cps, comisiones, fundacioneva, grupoyaser, otro, proviene, diaingreso, mesingreso, anoingreso,
 	 ministrotras, diacarta, mescarta, anocarta;
 	
 	 apellidopaterno = document.querySelector("#apellidopaterno").value;
 	 apellidomaterno = document.querySelector("#apellidomaterno").value;
 	 primernombre = document.querySelector("#primernombre").value;
 	/* diasnac = document.querySelector("#diasnac").value;
 	 mesnac = document.querySelector("#mesnac").value;
 	 anonac = document.querySelector("#anonac").value;
 	 domicilio = document.querySelector("#domicilio").value;
 	 entrecalles = document.querySelector("#entrecalles").value;*/
 	 //lugarnacimiento = document.querySelector("#lugarnacimiento").value;
 	email = document.querySelector("#email").value;
 	//telefono = document.querySelector("#telefono").value;
 	//cp = document.querySelector("#codp").value; 	
 	telefonofijo = document.querySelector("#telefonofijo").value;
 	telefonomovil1 = document.querySelector("#telefonomovil1").value;
 	telefonomovil2 = document.querySelector("#telefonomovil2").value;
 	/*= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;
 	= document.querySelector("#").value;*/
 	//literal y metodo test()
 	var er = /\w+@\w+\.+[a-z]/;
 			 
 	var erN = /[0-9]/;
 	if( apellidopaterno == "" || apellidomaterno == "" || primernombre == "" || lugarnacimiento == "" || diasnac == "" || mesnac == "" || anonac == "" ||  colonia == "" ||
 		domicilio == "" ||  entrecalles == "" || vivocon == "" || email == "" || nombredelpadre == "" || nombredelamadre == "" ||
 	   test1 == "" || test2 == "" || lugarbut == "" ||fechabau == "" || diaconobau == "" ||
 	  encargadoenturno == "" || lugaresp == "" || anobautismoesp == "" || diaconoesp == "" || encargadoenturnoesp == "" || proviene == "" || diaingreso == "" || 
 	  mesingreso == "" || anoingreso == "" || ministrotras == "" || diacarta == "" || mescarta == "" || anocarta == "" ){
 		alert("Los sentimos tienes que llenar los campos que estan con asterisco");
 		/*nombre.focus();
 		email.focus();
 		CP.focus();*/
 		return false;
 	}else if(apellidopaterno.length > 50 || erN.test(apellidopaterno)){
 		alert("El nombre exedio el maximo de caracteres y/o los caracteres que diste son numericos ");
 		//nombre.focus();
 		return false;
 	}else if(apellidomaterno.length > 50 || erN.test(apellidomaterno)){
 		alert("El nombre exedio el maximo de caracteres y/o los caracteres que diste son numericos ");
 		//nombre.focus();
 		return false;
 	}

 	else if(primernombre.length > 50 || erN.test(primernombre)){
 		alert("El nombre exedio el maximo de caracteres y/o los caracteres que diste son numericos ");
 		//nombre.focus();
 		return false;
 	}
 	
 	else if(email.length > 50){
 		alert("El correo exedio el maximo de caracteres y/o los caracteres que diste no contiene @");
 		//email.focus();
 		return false;
 	}else if(!er.test(email)){
 		alert(" los caracteres que diste no contiene @");
 		return false;
 	}
 	/*else if(isNaN(telefonofijo) || telefonofijo.length !== 10){
 		alert("el numero que ingresaste tiene que ser numerico y contar con 10 digitos");
 		//telefono.focus();
 		return false;
 	}
 	else if(isNaN(telefonomovil1) || telefonomovil1.length !== 10){
 		alert("el numero que ingresaste tiene que ser numerico y contar con 10 digitos");
 		//telefono.focus();
 		return false;
 	}
 	else if(isNaN(telefonomovil2) || telefonomovil2.length !== 10){
 		alert("el numero que ingresaste tiene que ser numerico y contar con 10 digitos");
 		//telefono.focus();
 		return false;
 	}*/
 	/*else if(isNaN(cp) || cp.length !== 5){
 		alert("el numero que ingresaste tiene que ser numerico y contar con 5 digitos");
 		//CP.focus();
 		return false;
 	}/*else{
 		alert("formulario enviado con exito");

 	}*/
 	}catch(e){
		alert("Error en: "+e);
	}
 }