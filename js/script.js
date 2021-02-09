var contatore = 0;
var persone = new Array(20); // Imposto un massimo di 20 nomi
var blocco;
var indice = 0;
var nomeIntero;
             
jQuery(function () {

    // listener per aggiungere un nome
    jQuery("#btnAccetta, #btnChiudi").on("click", function () {
        if (this.id == "btnAccetta") {
            addingInput(nomeIntero);
        }
    });

    // prendo i dati
    jQuery("#btnInserisci").on("click", function () {
        var nome = jQuery("#txtNome").val().trim();
        var cognome = jQuery("#txtCognome").val().trim();
        nomeIntero = nome + " " + cognome;
        
        // controllo che i dati inseriti siano unici
        if (checkInput(nomeIntero)) {
            if (contatore > 0) {
                // Se non esiste allora chiedo la conferma e lo aggiungo
                activeModalAccettazione("Per confermare l'inserimento di " + nomeIntero + " cliccare su 'accetto'!");
            } else { 
                activeModalAccettazione("Per confermare l'inserimento di " + nomeIntero +" cliccare su 'accetto'!");
            }
            contatore++;
        }
    });
});

// Metodo per attivare il modal
function activeModalAccettazione(testo) {
    jQuery("#testo-modal").html(testo);
    jQuery("#modal-accettazione").modal("toggle");
}

// richiamo il modal per l'errore
function activeModalError(testo) {
    jQuery("#modal-error-text").html(testo);
    jQuery("#error-modal").modal("toggle");
}

function addingInput(nomeIntero) {
    // Lo aggiungo alla lista di persone
    persone[indice] = nomeIntero;
    // Creo un blocco gli aggiungo una clase e lo appendo al div numero 7
    blocco = jQuery("<p>" + nomeIntero + "</p>");
    blocco.addClass("inseriti");
    blocco.appendTo("#div7");
    indice++;
}

function checkInput(nomeIntero) {
    for (var i = 0; i < persone.length; i++) {
        if (nomeIntero == persone[i]) {
            activeModalError("Il nome " + nomeIntero + " è già stato inserito!");
            return false;
        }
    }
    return true;
}