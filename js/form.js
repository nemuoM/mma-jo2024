//charger le document et l'initaliser

//lire le document en entier

function checkForm() {
    let nom = document.getElementById("nom").value;
    console.log(nom);

    if (nom == "") {
        createElement(p, "erreur-nom");
        appendChild();
    }
}
