# Appunti per la prosecuzione del progetto
* Aggiungere sistema di Power Up lungo il percorso.
    1. Un power up per il pinteggio, (una stella?) ;
    2. Un power up per la velocità(?) (una freccia verde?) ;
    3. Capacità di distruggere ostacoli, cannone;
    4. Scudo o vita extra, un cuore o uno scudo;

Per la gestione del sistema dei power up ci potrebbe essere un array di dimensione N dove N è il numero di power up esistenti, ad ogni indice corrisponde il valore del power up, ad esempio array[0] potrebbe rappresentare il molitplicatore di punteggio e sarà un numero intero oppure il numero di secondi restanti per il bonus, così come array[2] potrebbe contenere il numero di cariche o array[3] true o false per sapere se c'è o meno scudo;

## Da fare
* Usare una spotlight per il fanale della macchina
* Partenza più "lenta"
* Creare la struttura corretta per il cannone e lo scudo;
* Sistemare bordo superiore (html) che può coprire parti della scena
* Texture dal sito e di dimensione potenza di due
* Shader per power up (e per applicare le texture)
* Implementare le funzioni per la collisione con un bonus e l'aggiunta degli effetti, in particolare
    * Indicatore di bonus vicino al punteggio;
    * Comandi del cannone con barra spaziatrice e animazione dell'esplosione di un ostacolo;
    * Animazione di distruzione di un ostacolo grazie allo scudo;
* Aggiungere un bonus "misterioso" o casuale (anche con effetto negativo? es: visuale oscurata/nebbia fitta, inversione comandi)
* Controllare gli shift nei vari array
* TextureLoader() invece di loadTexture?????? cosi evitiamo un centinaio di warnings
* Aggiungere come ostacolo la pozzanghera che fa slittare la macchina fuori dalla scena
* Fare + livelli di gioco (?)

