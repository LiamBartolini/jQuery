var persone = [];
var blocco;
var indice = 0;
var nomeIntero;

jQuery(function () {
    // listener per aggiungere un nome
    jQuery("#btnAccetta, #btnDeclino").on("click", function () {
        if (this.id == "btnAccetta") {
            addingInput(nomeIntero);
        }
    });

    // prendo i dati
    jQuery("#btnInserisci").on("click", function () {
        var nome = jQuery("#txtNome").val();
        var cognome = jQuery("#txtCognome").val();
        nomeIntero = nome + " " + cognome;
        
        // controllo che i dati inseriti siano unici
        if (checkInput(nomeIntero)) {
            activeModalAccettazione("Per confermare l'inserimento di " + nomeIntero +" cliccare su 'accetto'!");
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