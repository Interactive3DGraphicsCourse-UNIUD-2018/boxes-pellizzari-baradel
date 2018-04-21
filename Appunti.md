# Appunti per la prosecuzione del progetto
* Aggiungere sistema di Power Up lungo il percorso.
    1. Un power up per il pinteggio, (una stella?) ;
    2. Un power up per la velocità(?) (una freccia verde?) ;
    3. Capacità di distruggere ostacoli, cannone;
    4. Scudo o vita extra, un cuore o uno scudo;

Per la gestione del sistema dei power up ci potrebbe essere un array di dimensione N dove N è il numero di power up esistenti, ad ogni indice corrisponde il valore del power up, ad esempio array[0] potrebbe rappresentare il molitplicatore di punteggio e sarà un numero intero oppure il numero di secondi restanti per il bonus, così come array[2] potrebbe contenere il numero di cariche o array[3] true o false per sapere se c'è o meno scudo;

## Da fare
* Creare la struttura corretta per la stella, il cannone e lo scudo;
* Aggiungere degli shader per i 3 bonus per creare degli effetti migliori;
* Implementare le funzioni per la collisione con un bonus e l'aggiunta degli effetti, in particolare
    * Indicatore di bonus vicino al punteggio;
    * Comandi del cannone con barra spaziatrice e animazione dell'esplosione di un ostacolo;
    * Animazione di distruzione di un ostacolo grazie allo scudo;
* Aggiungere un bonus "misterioso" o casuale (anche con effetto negativo? es: visuale oscurata/nebbia fitta)
* Aggiungere come ostacolo la pozzanghera che fa slittare la macchina fuori dalla scena
* Fare + livelli di gioco (?)
* Punteggio in giallo quando è attivo il moltiplicatore
* Usare una spotlight per il fanale della macchina
