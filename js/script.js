// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
    // va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let percorso = parseInt(prompt('inserisci kilometri del percorso'));
let etaPasseggero = parseInt(prompt('inserisci età passeggero'))


console.log('perorso:',percorso,'ed età:',etaPasseggero);
let prezzoBiglietto = 0.21;
let prezzoPercorso = prezzoBiglietto * percorso;

let outputDiv = document.getElementById("output");


if(etaPasseggero< 0 || percorso< 0 || isNaN(etaPasseggero)|| isNaN(percorso )){
    alert('errore dati');
}else{
if(etaPasseggero<=18){
    prezzoPercorso = prezzoPercorso - (prezzoPercorso*20/100); 
}else if(etaPasseggero>=65){
    prezzoPercorso = prezzoPercorso - (prezzoPercorso*40/100);
}

let prezzoFormattato = prezzoPercorso.toLocaleString('it-IT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

let risultato =
`
  il tuo biglietto costerà ${prezzoFormattato} €.
`
  console.log('Prezzo per utente:', risultato);
  outputDiv.textContent = risultato;
}