### Da fare:

* Inserire alcune animazioni  "*a comando*" come la mongolfiera ecc;
* Inserire animazione dell'asteroide *n* ostacoli prima;
* Inserire scritte: Start, Lose,...
* Aggiungere i "fanali" alla macchina
* Aggiungere nuovi ostacoli: pozzanghera (?)
* Aggiungere pale eoliche sulla strada (?)


### Attualmente:
* Tento di sistemare la collisione del retro della macchina (non trovo errori nella logica, non dovrebbe fare una piega, eppure con il *- offset* non funziona più niente, ho provato anche a usare la parte che funziona e usarla per il lato dietro, quando metto *-offset* salta tutto);
* Creo la rotazione della camera a fine percorso (aggiunto pivotCamera a cui *pivotCamera.add(camera)* e successivamente *pivotMacchina.add(pivotCamera)*);
