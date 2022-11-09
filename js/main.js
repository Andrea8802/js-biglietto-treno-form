// Calcolo prezzo biglietto del viaggio in base all'età e ai km da percorrere 2.0

// Dichiarazioni variabili
const prezzoAlKm = 0.21;
let prezzoViaggio;
let sconto;
const nCasuale = Math.floor (Math.random() * 10) + 1;
const genera = document.querySelector("#genera");
const annulla = document.querySelector("#annulla");
const blockOutput = document.querySelector(".outputBlock");
let n = 0;

// Pulizia input iniziale
        nomeInput.value = null;
        kmInput.value = null;
        etaInput.value = null;

// Bottone "Genera"
genera.addEventListener("click",

    function() {
        if (n == 0){
        n = 1;
        // Dichiarazioni costanti per il bottone
        const nomeInput = document.getElementById("nomeInput");
        const nomeCognome = nomeInput.value;

        const kmInput = document.getElementById("kmInput");
        const kmViaggio = parseInt(kmInput.value);

        const etaInput = document.getElementById("etaInput");
        const fasciaEta = etaInput.value;

        // Rendiamo visibile blocco output
        blockOutput.classList.remove("d-none");

        // Se l'utente lascia vuoti i campo non può procedere
        if(nomeCognome != "" || kmViaggio != ""){
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

            // Output

            // Nome passeggero
            document.getElementById("nomePasseggero").innerHTML = nomeCognome;

            // Offerta
            document.getElementById("offerta").innerHTML = "Biglietto Standard";

            // Numero Carrozza
            document.getElementById("nCarrozza").innerHTML = nCasuale;

            // Codice CP
            document.getElementById("codiceCP").innerHTML = "92911";

            // Prezzo finale (massimo 2 decimali)
            document.getElementById("costoBiglietto").innerHTML = prezzoViaggio.toFixed(2) + "€";

            // Pulizia input
            nomeInput.value = null;
            kmInput.value = null;
            etaInput.value = null;
            } else{
                alert("Compila i campi per procedere!")
                blockOutput.classList.add("d-none");
            }
        
        }
    }
        
)

// Bottone "Cancella"
annulla.addEventListener("click",
    function() {
        n = 0;
        // Pulizia input
        nomeInput.value = null;
        kmInput.value = null;
        etaInput.value = null;

        // Rendiamo visibile blocco output
        blockOutput.classList.add("d-none");

        // Pulizia output

        // Nome passeggero
        document.getElementById("nomePasseggero").innerHTML = null;

        // Prezzo finale (massimo 2 decimali)
        document.getElementById("costoBiglietto").innerHTML = null;

        // Offerta
        document.getElementById("offerta").innerHTML = null;

        // Numero Carrozza
        document.getElementById("nCarrozza").innerHTML = null;

        // Codice CP
        document.getElementById("codiceCP").innerHTML = null;
    }
)