//Déclaration des variables
let boutonJouer = window.document.getElementById("jouer");
let boutonRegles = window.document.getElementById("regles");

//Code exécuté lorsque le bouton règles est cliqué
boutonRegles.addEventListener("click", function () {
    alert("Là on charge les règles");
});

//Code exécuté lorsque le bouton jouer est cliqué
boutonJouer.addEventListener("click", function () {
    //On récupère la valeur du nombre de joueurs sélectionné
    let nbJoueurs = window.document.getElementById("choixJoueurs").value;

    //On envoie un message à l'utilisateur si aucun nombre de joueur n'a été choisi
    if (nbJoueurs === "aucun")
    {
        alert("Veuillez choisir le nombre de joueurs.");
    }
    else
    {
        //On enregistre le nombre de joueurs dans le stockage local et on lance la partie
        localStorage.setItem("nbJoueurs", nbJoueurs);
        /*
         *todo : Rediriger vers la page de partie
         */
    }
})