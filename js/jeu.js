let nbJoueurs = localStorage.getItem("nbJoueurs");
console.log("Partie lancée avec " + nbJoueurs + " joueurs");

let PointsAncrage;

setTimeout('PointsAncrage = new GenPointsAncrage();', 1000 );

setTimeout('PointsAncrage.display();', 1500);