// FUNZIONI PER GESTIRE LE COLLISIONI

		// Controlla se la macchina collide con un bersaglio, in caso affermativo
		// cambia il valore di gameOver a true e la partita termina
		function controllaCollisioni(){
			// controllo con il prossimo ostacolo, ovvero con il primo ostacolo che si trova + avanti della macchina
			var i = Math.floor(-pivotMacchina.position.z/50);
			var posOstacoloZ = (50*(i+1));
			var distanzaZ = calcolaDistanzaZ(i); // Meta' della "lunghezza" dell'ostacolo
			var distanzaX = calcolaDistanzaX(i); // Meta' della "larghezza" dell'ostacolo
			if(collisioneAsseZ("avanti", posOstacoloZ, offsetMacchinaZ, distanzaZ) && collisioneAsseX(i, offsetMacchinaX, distanzaX)){
				gameOver = true;
			}  // altrimenti gameOver = false (valore assegnato all'inizio, quindi rimane inalterato)

			// controllo anche con l'ostacolo "precedente" (la macchina potrebbe aver superato di poco un ostacolo ma potrebbe ancora colpirlo)
			i--;  // prendo l'indice dell'ostacolo precedente
			if(i >= 0){  // se ha senso
				var posOstacoloZ = (50*(i+1));
				var distanzaZ = calcolaDistanzaZ(i); // Meta' della "lunghezza" dell'ostacolo
				var distanzaX = calcolaDistanzaX(i); // Meta' della "larghezza" dell'ostacolo
				if(collisioneAsseZ("indietro", posOstacoloZ, offsetMacchinaZ, distanzaZ) && collisioneAsseX(i, offsetMacchinaX, distanzaX)){
					gameOver = true;
				}  // altrimenti gameOver = false (valore assegnato all'inizio, quindi rimane inalterato)
			}
		}

		// Funzione per calcolare la misura su X dell'oggetto, in modo da coprire l'intera superfice;
		function calcolaDistanzaX(i){
			switch(tipoOstacoli[i]){
				case "tronco":
					return 1.5;
				case "masso":
					return 1;
			  case "asteroide":
					return 2;
			}
		}

		// Controlla che ci sia collisione sull'asse delle X
		function collisioneAsseX(i, offsetMacchinaX, distanzaX){
			if(posizioneOstacoli[i] > 0){ // Se l'ostacolo si trova a destra
				if((pivotMacchina.position.x + offsetMacchinaX) >= (posizioneOstacoli[i] - distanzaX)){
					return true;
				}else{
					return false;
				}
			}else{ // Se l'ostacolo si trova a sinistra
				if((pivotMacchina.position.x - offsetMacchinaX) <= (posizioneOstacoli[i] + distanzaX)){
					return true;
				}else{
					return false;
				}
			}
		}

		// Funzione per calcolare metà la distanza dell'oggetto, in modo da coprire l'intera superfice;
		function calcolaDistanzaZ(i){
			switch(tipoOstacoli[i]){
				case "tronco":
					return 0.5;
					case "masso":
					return 1;
					case "asteroide":
					return 2;
			}
		}

		// Controlla se la faccia della macchina passata come argomento collide, sull'asse Z, con l'ostacolo
		function collisioneAsseZ(faccia, posOstacoloZ, offsetMacchinaZ, distanzaZ){
			if(faccia == "avanti"){
				var facciaAvanti = -pivotMacchina.position.z + offsetMacchinaZ;
				var collisioneAvanti = collisioneAvantiAsseZ(facciaAvanti, posOstacoloZ, distanzaZ);
				return collisioneAvanti;
			}else if(faccia == "indietro"){
				var facciaDietro = -pivotMacchina.position.z - offsetMacchinaZ;
				var collisioneIndietro = collisioneDietroAsseZ(facciaDietro, posOstacoloZ, distanzaZ);
				return collisioneIndietro;
			}
		}

		function collisioneAvantiAsseZ(facciaAvanti, posOstacoloZ, distanzaZ){
			var facciaAvantiOstacolo = posOstacoloZ - distanzaZ;
			var facciaDietroOstacolo = posOstacoloZ + distanzaZ;
			if(facciaAvanti <= facciaDietroOstacolo   //  parte davanti della macchina non ha ancora superato la faccia dietro dell'oggetto AND...
					&& facciaAvanti >= facciaAvantiOstacolo){  // parte davanti della macchina ha "superato" la faccia avanti dell'oggetto
				return true;
			}else{
				return false;
			}
		}

		function collisioneDietroAsseZ(facciaDietro, posOstacoloZ, distanzaZ){
			var facciaAvantiOstacolo = posOstacoloZ - distanzaZ;
			var facciaDietroOstacolo = posOstacoloZ + distanzaZ;
			if(facciaDietro <= facciaDietroOstacolo   //  parte dietro della macchina non ha ancora superato la faccia dietro dell'oggetto AND...
					&& facciaDietro >= facciaAvantiOstacolo){  // parte dietro della macchina ha "superato" la faccia avanti dell'oggetto
				return true;
			}else{
				return false;
			}
		}