let nbJoueurs = localStorage.getItem("nbJoueurs");
console.log("Partie lancée avec " + nbJoueurs + " joueurs");

let PointsAncrage = new GenPointsAncrage();

PointsAncrage.display();