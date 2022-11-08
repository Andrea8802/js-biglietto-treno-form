// Calcolo prezzo biglietto del viaggio in base all'età e ai km da percorrere 2.0

// Dichiarazioni variabili
const nomeInput = document.getElementById("nomeInput");
const nomeCognome = nomeInput.value;

const kmInput = document.getElementById("kmInput");
const kmViaggio = kmInput.value;

const etaInput = document.getElementById("etaInput");
const fasciaEta = etaInput.value;

const prezzoAlKm = 0.21;
let prezzoViaggio;
let sconto;

const genera = document.querySelector("#genera");
const annulla = document.querySelector("#annulla");

// Pulizia input iniziale
        nomeInput.value = null;
        kmInput.value = null;
        etaInput.value = null;

// Bottone "Genera"
genera.addEventListener("click",
    function() {
        // Moltiplicare km X 0.21€
        prezzoViaggio = prezzoAlKm * kmViaggio;

        // Se è minorenne sconto del 20%
        if(fasciaEta === "minorenne"){
            sconto = prezzoViaggio * 0.20;
            prezzoViaggio -= sconto;

        } else if (fasciaEta === "over65"){// Altrimenti se è over65 sconto del 40%
            sconto = prezzoViaggio * 0.40;
            prezzoViaggio -= sconto;

        }

        // Output del prezzo finale (massimo 2 decimali)
        document.getElementById("prezzo").innerHTML = `Il prezzo del tuo biglietto è di ${prezzoViaggio.toFixed(2)}€`;  

        // Pulizia input
        nomeInput.value = null;
        kmInput.value = null;
        etaInput.value = null;
    }
)

// Bottone "Cancella"
annulla.addEventListener("click",
    function() {
        // Pulizia input
        nomeInput.value = null;
        kmInput.value = null;
        etaInput.value = null;
    }
)





