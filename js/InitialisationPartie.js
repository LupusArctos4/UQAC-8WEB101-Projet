//Mettre les fonctions à appeler pour initialiser les différents éléments de la partie ici

function MasquerJoueursInutilises(nbJoueurs) {
    window.console.log("Valeur de nbJoueurs dans le js : " + nbJoueurs);
    if (nbJoueurs === "3")
    {
        window.document.getElementById("conteneur_J4").style.backgroundColor = "black";
        window.console.log("Joueur 4 masqué");
    }
    if (nbJoueurs === "2")
    {
        window.document.getElementById("conteneur_J4").style.backgroundColor = "black";
        window.document.getElementById("conteneur_J3").style.backgroundColor = "black";
        window.console.log("Joueurs 3 et 4 masqués");
    }
    window.console.log("Les emplacements des joueurs ont été initialisés");
}
