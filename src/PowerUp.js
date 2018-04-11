/*
*  Aggiunge i powerUp alla scena ponendoli con una certa probabilita'
*  nello spazio fra due ostacoli in modo che sia possibile prenderli;
*/
function aggiungiPowerUp(){

  powerUpAttivi = new Array();
  powerUpInScena = new Array();
  powerUpInScenaTipo = new Array();
  powerUpAttivi.push(0); // TEMP per indicare la z dove terminera';
  powerUpAttivi.push(0); // TEMP per indicare i colpi di cannone restanti;
  powerUpAttivi.push(0); // TEMP per indicare la presenza o meno di uno scudo; (0 assente, 1 presente);

  aggiungiStellaBonus();
  stella.visible = false;
  //aggiungiCannoneBonus();
  //aggiungiScudoBonus();

  var distanzaPowerUp = 10000 / (numeroPowerUp+1);
  var tipologiePowerUp = 3; //Tipologie Possibili di powerUp; TEMP attualmente 3;
  for(var i = 0; i < numeroPowerUp - 1; i++){ // -2 perche' 48+1*200+25 = 9825, non ce ne starebbero altri;
    var prossimoPowerUp = randomConRange(0, tipologiePowerUp-1);
    switch (prossimoPowerUp){
      case 0:
      aggiungiMoltiplicatorePunti((i+1)*distanzaPowerUp + 25); //Aggiungo il powerUp a 200*i + 25 per evitare gli ostacoli
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

// Aggiunge un moltiplicatore di punteggio alla scena a distanza z;
function aggiungiMoltiplicatorePunti(z){
  var x = scegliLato();
  var geometriaStella = new THREE.BoxGeometry(2,2,2); //TEMP per testare;
  var materialeStella = new THREE.MeshPhongMaterial({color: 0xffff00});
  var moltiplicatore = new THREE.Mesh(geometriaStella, materialeStella);

  moltiplicatore.position.set(x/7.2, 1, -z);

  scene.add(moltiplicatore);
  powerUpInScena.push(moltiplicatore);
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

function aggiungiBonus(tipoProssimoBonus){
  switch( tipoProssimoBonus ){
    case "stella":
    powerUpAttivi[0] = -pivotMacchina.position.z + 100;
    stella.visible = true;
    break;
    case "cannone":
    powerUpAttivi[1] = 3;
    break;
    case"scudo":
    powerUpAttivi[2] = 1;
    break;
  }
}
function aggiungiStellaBonus(){
  var geometriaStella = new THREE.BoxGeometry(1,1,1); //TEMP per testare;
  var materialeStella = new THREE.MeshPhongMaterial({color: 0xffff00});
  stella = new THREE.Mesh(geometriaStella, materialeStella);
  stella.position.set(0,3,0);

  pivotMacchina.add(stella);
}
function aggiornaBonus(){
  if(powerUpAttivi[0] == 0 || powerUpAttivi[0] <= -pivotMacchina.position.z){
    //Questo controllo permette alla stella di sparire dopo 100;
    stella.visible = false;
    powerUpAttivi[0] = 0;
  }else if (powerUpAttivi[0] > 0){
    stella.rotateY(0.05);
    punteggio += 10; //TEMP NON FUNZIONA
  }
}