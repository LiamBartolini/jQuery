var exist = false;
var contatore = 0;
var persone = new Array(10);
var blocco;
var indice = 0;
var nomeIntero;
             
jQuery(function () {

    jQuery("#btnAccetta, #btnChiudi").on("click", function () {
        if (this.id == "btnAccetta") {
            addingInput(nomeIntero);
        }
    });

    jQuery("#btnInserisci").on("click", function () {
        var nome = jQuery("#txtNome").val().trim();
        var cognome = jQuery("#txtCognome").val().trim();
        nomeIntero = nome + " " + cognome;
        
        if (checkInput(nomeIntero)) {
            if (contatore > 0) {
                // Se non esiste allora chiedo la conferma e lo aggiungo
                activeModalAccettazione("Per confermare l'inserimento di " + nomeIntero + " cliccare su 'accetto'!");
                // jQuery("#btnAccetta, #btnChiudi").on("click", function () {
                //     if (this.id == "btnAccetta") {
                //         addingInput(nomeIntero);
                //     }
                // });

                contatore++;
            } else if (contatore == 0) { 
                activeModalAccettazione("Per confermare l'inserimento di " + nomeIntero +" cliccare su 'accetto'!");
                // jQuery("#btnAccetta, #btnChiudi").on("click", function () {
                //     if (this.id = "btnAccetta") {
                //         addingInput(nomeIntero);
                //     }
                // });
                contatore++;
            }
            // if (contatore == 0) {
                // per il primo nome inserito lo chiede la conferma ma non verifica se è gia stato inserito
                // activeModal("Per confermare l'inserimento cliccare su 'accetto'!", "Conferma Input");
                // jQuery("#btnAccetta, #btnChiudi").on("click", function () {
                //     if (this.id == "btnAccetta") {
                //         addingInput(nomeIntero);
                //     }
                // });
                // jQuery("#btnAccetta").off("click");

                // if (jQuery("#btnAccetta").on("click"))
                //     addingInput(nomeIntero);
                // // jQuery("#btnAccetta").on("click", addingInput(nomeIntero));   
            // } else {
                // verifico se l'input sia corretto e non gia inserito
                // for (var i = 0; i < persone.length; i++) {
                //     if (nomeIntero == persone[i]) {
                //         activeModal("Il nome è gia stato inserito!", "Errore input");
                //         uguale = true;
                //     }
                // }

                // if (!uguale) {
                    // Se non è stato inserito attivo il modale
                    // activeModal("Per confermare l'inserimento cliccare su 'accetto'!", "Conferma Input");
                    // if (jQuery("#btnAccetto").on("click"))
                    //     addingInput(nomeIntero);

                    // jQuery("#btnAccetta, #btnChiudi").on("click", function () {
                    //     if (this.id == "btnAccetta") {
                    //         addingInput(nomeIntero);
                    //         // // Lo aggiungo alla lista di persone
                            // persone[indice] = nomeIntero;
                            // // Creo un blocco gli aggiungo una clase e lo appendo al div numero 7
                            // blocco = jQuery("<p>" + nomeIntero + "</p>");
                            // blocco.addClass("inseriti");
                            // blocco.appendTo("#div7");
                    //     }
                    // });

                    // jQuery("#btnAccetta, #btnChiudi").on("click", function (){
                    //     if (this.id == "btnAccetta") {}
                    //     else if (this.id == "btnChiudi") {}
                    // });

                    // jQuery("#btnAccetta").on("click", addingInput(nomeIntero));

                    // Controllo se è stato premuto il stato accetta
                    // jQuery("#btnAccetta").on("click", function () )
                    //     if (!uguale) {
                    //         // Lo aggiungo alla lista di persone
                    //         persone.push(nomeIntero);
                    //         // Creo un blocco gli aggiungo una clase e lo appendo al div numero 7
                    //         blocco = jQuery("<p>" + nomeIntero + "</p>");
                    //         blocco.addClass("inseriti");
                    //         blocco.appendTo("#div7");
                    //     }
                    // }
            //     }
            //     uguale = false;
            //     indice++;
            // }
            // contatore++;
        }
    });
});

// Metodo per attivare il modal di bootstrap
function activeModalAccettazione(testo) {
    // jQuery("#btnInserisci").on("click", function () {
    //     jQuery("#testo-modal").html(testo);
    //     jQuery("#modal-accettazione").modal("toggle");
    // });
    jQuery("#testo-modal").html(testo);
    jQuery("#modal-accettazione").modal("toggle");
}

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