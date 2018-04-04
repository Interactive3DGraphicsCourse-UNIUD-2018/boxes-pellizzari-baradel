# Interactive 3DGraphics / Pellizzari-Baradel-Project
Primo progetto per il corso di Interactive 3D Graphics, anno accademico 2017/2018

## Descrizione del Progetto
Il progetto consiste in una web-app di un gioco di simulazione di guida. In questa applicazione l'utente potrà controllare un veicolo con lo scopo di raggiungere il traguardo cercando di evitare gli ostacoli, generati casualmente.
I comandi disponibili sono quelli di movimenti laterale e uno per l'accelerazione (Freccia Sinistra, Freccia Destra, Freccia Su), oppure le lettere *W, A e D* (dai tasti *WASD*);

Durante il gioco esiste una variabile punteggio che varia in base alla distanza percorsa, la velocità della macchina **TEMP** dipende sia dalla distanza percorsa (aumenti graduali ogni tot. unità) e dalla pressione del tasto *SU* che provoca un'accelerazione irreversibile della macchina per rendere il gioco più complesso e il punteggio più alto per la difficoltà.

## Risultato del Progetto
### Generazione degli ostacoli e decorazioni
Dopo la costruzione della scena di base, gli ostacoli vengono inseriti casualmente in base alla distanza fra ostacoli seguenti grazie alla funzione
```
function scegliLato(posizione){
	var random = randomConRange(0,1); //Ritorna un numero casuale intero fra 0 e 1;
	if(posizione == "interno"){       //La posizione "esterno" invece indica un "ostacolo" esterno alla strada, ossia una decorazione
	 if(random == 0){
	  return xDestra;                 //Posizione centrale della corsia di destra, centro dell'ostacolo
   } else {
		return xSinistra;               //Posizione centrale della corsia di sinistra, centro dell'ostacolo
   }
   [...]
```
Le decorazioni invece sono state inserite analogamente agli ostacoli, però la funzione *scegliLato(posizione)* viene chiamata con
```
posizione = "esterno";
scegliLato("esterno");
```
Ogni ostacolo viene aggiunto dalla funzione *aggiungiOstacolo(posizione, x, z)* dove posizone è sempre una stringa "interno" o "esterno", x rappresenta la coordinata x del centro dell'ostacolo mentre z rappresenta la distanza su Z dall'origine.

### Gestione delle collisioni
Durante la creazione degli ostacoli vengono aggiornati due array dichiarati globalmente, *posizioneOstacoli* e *tipoOstacoli*.
*posizioneOstacoli* è un array di interi che serve solamente a determinare se l'ostacolo in posizione *(i+1)*50* da Z è a destra o sinistra inserendo rispettivamente un numero maggiore o minore di zero.

*tipoOstacoli* è un array di stringhe dove viene specificato il tipo di ostacolo alla distanza *(i+1)*50* da Z. Questo serva a determinare al momento del controllo delle collisioni l'area occupata dall'ostacolo;

Grazie a questi due array è possibile controllare le collisioni ad ogni iterazione della ricorsione della funzione Render(), in quanto viene chiamata la funzione *controllaCollisioni()* che ha il compito di verificare che la posizione attuale di tutti i vertici della macchina non coincida o sia compresa in nessun ostacolo sulla pista, in caso contrario la variabile globale *gameOver* viene impostata a *true* e il gioco termina.

### Animazione delle decorazioni e degli asteroidi

### Utilizzo della heightmap

## Considerazioni finali
