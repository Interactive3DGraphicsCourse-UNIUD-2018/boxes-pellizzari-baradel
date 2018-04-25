/*
* AGGIUNGO I POWER UP ALLA SCENA (come cubi/oggetti presenti sulla strada da raccogliere per ottenere i potenziamenti)
*/
function aggiungiPowerUp(){
  // dichiaro e inizializzo i tre vettori
  powerUpAttivi = new Array();
  powerUpInScena = new Array();
  powerUpInScenaTipo = new Array();
  powerUpAttivi.push(0); // TEMP per indicare la z dove terminera';
  powerUpAttivi.push(0); // TEMP per indicare i colpi di cannone restanti;
  powerUpAttivi.push(0); // TEMP per indicare la presenza o meno di uno scudo; (0 assente, 1 presente);
  // aggiungo i power up alla macchina (ma finche non vengono "presi" non sono visibili)
  aggiungiCannoneMacchina();
  aggiungiScudoMacchina();
  // inserisco i power up "a caso" sulla strada
  var distanzaPowerUp = 10000 / (numeroPowerUp+1);
  var tipologiePowerUp = 3; // Tipologie Possibili di powerUp; TEMP attualmente 3;
  for(var i = 0; i < numeroPowerUp - 1; i++){ // -2 perche' 48+1*200+25 = 9825, non ce ne starebbero altri;
    var prossimoPowerUp = randomConRange(0, tipologiePowerUp-1);
    switch (prossimoPowerUp){
      case 0:
        aggiungiStella((i+1)*distanzaPowerUp + 25); // Aggiungo il powerUp a 200*i + 25 per evitare gli ostacoli
        break;
      case 1:
        aggiungiCannone((i+1)*distanzaPowerUp + 25);
        break;
      case 2:
       aggiungiScudo((i+1)*distanzaPowerUp + 25);
       break;
    }
  }
}

// Aggiunge la stella (moltiplicatore) alla scena e agli array
function aggiungiStella(z){
  var x = scegliLato();
  var geometriaStella = new THREE.BoxGeometry(2,2,2); // TEMP per testare;
  var materialeStella = new THREE.MeshPhongMaterial({color: 0xffff00});
  var stellaMesh = new THREE.Mesh(geometriaStella, materialeStella);

  stellaMesh.position.set(x/7.2, 1, -z);

  scene.add(stellaMesh);
  powerUpInScena.push(stellaMesh);
  powerUpInScenaTipo.push("stella");
}

// Aggiunge il cannone alla scena e agli array
function aggiungiCannone(z){
  var x = scegliLato();
  var geometriaCannone = new THREE.BoxGeometry(2,2,2); //TEMP per testare;
  var materialeCannone = new THREE.MeshPhongMaterial({color: 0x555555});
  var cannoneMesh = new THREE.Mesh(geometriaCannone, materialeCannone);

  cannoneMesh.position.set(x/7.2, 1, -z);

  scene.add(cannoneMesh);
  powerUpInScena.push(cannoneMesh);
  powerUpInScenaTipo.push("cannone");
}

// Aggiunge lo scudo alla scena e agli array
function aggiungiScudo(z){
  var x = scegliLato();
  var geometriaScudo = new THREE.BoxGeometry(2,2,2); //TEMP per testare;
  var materialeScudo = new THREE.MeshPhongMaterial({color: 0xff0000}); // TEMP di colore rosso per test;
  var scudoMesh = new THREE.Mesh(geometriaScudo, materialeScudo);

  scudoMesh.position.set(x/7.2, 1, -z);

  scene.add(scudoMesh);
  powerUpInScena.push(scudoMesh);
  powerUpInScenaTipo.push("scudo");
}
// aggiungo i bonus alla macchina quando li "prende" colpendoli
function aggiungiBonus(tipoProssimoBonus){
  switch( tipoProssimoBonus ){
    case "stella":
      powerUpAttivi[0] = -pivotMacchina.position.z + 100;  // posizione in cui finira l'effetto del bonus
	  audioPowerUp.play();
	  document.getElementById("punteggio").style.color = "yellow";
      break;
    case "cannone":
      powerUpAttivi[1] = 3;  // 3 colpi disponibili
      cannoneBonus.visible = true;
	  audioPowerUp.play();
      break;
    case"scudo":
      powerUpAttivi[2] = 1;  // 1 = scudo attivo, 0 = scudo non attivo
      scudoBonus.visible = true;
	  audioPowerUp.play();
      break;
  }
}
// AGGIUNGO I POWER UP ALLA MACCHINA (la stella non serve aggiungerla, il colore del punteggio diventa giallo per indicare che e' attivo il moltiplicatore)
function aggiungiCannoneMacchina(){ 
  var geometriaCannone = new THREE.BoxGeometry(0.5, 0.5, 0.5); //TEMP per testare;
  var materialeCannone = new THREE.MeshBasicMaterial({color: 0x333333});
  cannoneBonus = new THREE.Mesh(geometriaCannone, materialeCannone);
  cannoneBonus.position.set(0, 2, 0);

  pivotMacchina.add(cannoneBonus);
}

function aggiungiScudoMacchina(){
  var geometriaScudo = new THREE.BoxGeometry(1, 1, 0.1); //TEMP per testare;
  var materialeScudo = new THREE.MeshPhongMaterial({color: 0x555555});
  scudoBonus = new THREE.Mesh(geometriaScudo, materialeScudo);
  scudoBonus.position.set(0, 0.5, -2.5);

  pivotMacchina.add(scudoBonus);
}
// CONTROLLO SE I BONUS SONO ANCORA VALIDI ALTRIMENTI LI RIMUOVO
function aggiornaBonus(){
  // Controllo per il bonus stella (moltiplicatore)
  if(powerUpAttivi[0] == 0 || powerUpAttivi[0] <= -pivotMacchina.position.z || gameOver == true){
	document.getElementById("punteggio").style.color = "black";  // riporto il punteggio al suo colore originale
    powerUpAttivi[0] = 0;
  }else if(powerUpAttivi[0] > 0){  // se e' ancora attiva applico l'effetto del suo bonus
    punteggioBonus += Math.round(3 * spostamentoMacchinaZ);
  }
  // Controlli per il bonus cannone
  if(powerUpAttivi[1] == 0 || gameOver == true){
    cannoneBonus.visible = false;
  }
  // Controlli per il bonus scudo
  if(powerUpAttivi[2] == 0 || gameOver == true){
    scudoBonus.visible = false;
  }
}
