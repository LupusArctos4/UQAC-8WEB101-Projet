let nbJoueurs = localStorage.getItem("nbJoueurs");
console.log("Partie lancée avec " + nbJoueurs + " joueurs");

MasquerJoueursInutilises(nbJoueurs);
InitialiserJoueurs(nbJoueurs);
MelangerDeckIntrigue();
setTimeout('enableOnClick()', 6000);
