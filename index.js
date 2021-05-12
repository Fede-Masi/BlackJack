function Verifica(){
	var nome = document.modulo.nome.value;
	var cognome = document.modulo.cognome.value;
	var nickname = document.modulo.nickname.value;
	var password = document.modulo.password.value;
	var conferma = document.modulo.conferma.value;
	var nascita = document.modulo.nascita.value;
	var indirizzo = document.modulo.indirizzo.value;
	var telefono = document.modulo.telefono.value;
	var email = document.modulo.email.value;
	var firma = document.modulo.firma.value;

	//Validazione inserimento del nome
	if(nome == "" || nome == "undefined"){
		alert("Modifica per dare un conflitto");
		alert("Devi inserire qualcosa nella casella del nome");
		document.modulo.nome.focus();
		return false;
	}

	//Validazione inserimento del cognome
	if(cognome == "" || cognome == "undefined"){
		alert("Devi inserire qualcosa nella casella del cognome");
		document.modulo.cognome.focus();
		return false;
	}
	
	//Validazione inserimento del nickname
	if(nickname == "" || nickname == "undefined"){
		alert("Devi inserire qualcosa nella casella del nickname");
		document.modulo.nickname.focus();
		return false;
	}

	//Validazione inserimento della password
	if(password.lenght < 8 || password == "" || password == "undefined"){
		alert("Devi inserire una password, almeno 8 caratteri");
		document.modulo.password.focus();
		return false;
	}

	//Validazione inserimento della conferma della password
	if(conferma == "" || conferma == "undefined"){
		alert("Devi inserire una conferma, almeno 8 caratteri");
		document.modulo.conferma.focus();
		return false;
	}

	//Validazione inserimento congruente della conferma e della password
	if(password != conferma){
		alert("Le due password inserite non sono uguali, reinserisci la conferma");
		document.modulo.conferma.value = "";
		document.modulo.conferma.focus();
		return false;
	}

	//Validazione inserimento del nascita
	if(nascita == "" || nascita == "undefined"){
		alert("Devi inserire qualcosa nella casella del nascita");
		document.modulo.nascita.focus();
		return false;
	}

	//Validazione inserimento del indirizzo
	if(indirizzo == "" || indirizzo == "undefined"){
		alert("Devi inserire qualcosa nella casella del indirizzo");
		document.modulo.indirizzo.focus();
		return false;
	}

	//Validazione inserimento del telefono
	if(isNaN(telefono) || telefono == "" || telefono == "undefined"){
		alert("Devi inserire il numero di telefono, attenzione dev'essere numerico");
		document.modulo.telefono.value = "";
		document.modulo.telefono.focus();
		return false;
	}

	//Validazione inserimento dell'email, con email regolare
	var email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
   	if (!email_valid.test(email) || (email == "") || (email == "undefined")) {
      alert("Devi inserire un indirizzo mail corretto");
      document.invio.email.focus();
      return false;
   	}

   	//Validazione inserimento del firma
	if(firma == "" || firma == "undefined"){
		alert("Devi inserire qualcosa nella casella del firma");
		document.modulo.firma.focus();
		return false;
	}
}