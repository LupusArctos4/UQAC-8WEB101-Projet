//Mettre les fonctions à appeler pour initialiser les différents éléments de la partie ici
var joueurVert;
var joueurRouge;
var joueurBleu;
var joueurJaune;
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

function InitialiserJoueurs(nbJoueurs)
{
    joueurVert = new Joueurs("Vert");
    joueurRouge = new Joueurs("Rouge");

    joueurVert.CartesClassiques.Deck = shuffleArray(joueurVert.CartesClassiques.Deck);
    joueurRouge.CartesClassiques.Deck = shuffleArray(joueurRouge.CartesClassiques.Deck);

    for (let i = 0 ; i<5 ; i++)
    {
        joueurVert.CartesClassiques.Main.push(joueurVert.CartesClassiques.Deck.shift());
        joueurRouge.CartesClassiques.Main.push(joueurRouge.CartesClassiques.Deck.shift());
    }
    if (nbJoueurs >= 3)
    {
        joueurBleu = new Joueurs("Bleu");
        joueurBleu.CartesClassiques.Deck = shuffleArray(joueurBleu.CartesClassiques.Deck);

        for (let i = 0 ; i<5 ; i++)
        {
            joueurBleu.CartesClassiques.Main.push(joueurBleu.CartesClassiques.Deck.shift());
        }
    }
    if (nbJoueurs === 4)
    {
        joueurJaune = new Joueurs("Jaune");
        joueurJaune.CartesClassiques.Deck = shuffleArray(joueurJaune.CartesClassiques.Deck);

        for (let i = 0 ; i<5 ; i++)
        {
            joueurJaune.CartesClassiques.Main.push(joueurJaune.CartesClassiques.Deck.shift());
        }

    }
}

function MelangerDeckIntrigue()
{
    deckIntrigue = shuffleArray(deckIntrigue);
}
