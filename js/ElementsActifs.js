/*
Fichier contenant les variables indiquant les éléments actifs
ex: Quel joueur est en train de jouer / Quelle case a été cliquée
en premier pour savoir quoi faire s'il en sélectionne une deuxieme
 */

var tabIdCaseActive = ["id_1", "id_2"];
var caseActive = null;  //On remplace cette variable par l'index de la case
                             //correspondante du taleau tabIdCaseActive
                             //TODO : Rajouter tous les id utiles dans ce tableau
                             //Penser à repasser cela sur Null à la fin du tour d'un joueur

var joueurActif = 1; //Id du joueur dont c'est le tour actuelement
                             //1 = vert ; 2 = rouge ; 3 = bleu ; 4 = jaune
function tourSuivant()
{

}
function joueurSuivant()
{
    let nbJoueurs = localStorage.getItem("nbJoueurs");
    switch (nbJoueurs) {
        case 2:
            if (joueurActif === 1)
            {
                joueurActif++;
            }
            else
            {
                joueurActif = 1;
                tourSuivant();
            }
            caseActive = null;
            break;

        case 3:
            if (joueurActif < 3)
            {
                joueurActif++;
            }
            else
            {
                joueurActif = 1;
                tourSuivant();
            }
            caseActive = null;
            break;
        case 4:
            if (joueurActif < 4)
            {
                joueurActif++;
            }
            else
            {
                joueurActif = 1;
                tourSuivant();
            }
            caseActive = null;
            break;

        default:
            window.console.log("Erreur lors du passage de tour, regarder dans ElementsActifs.js");
    }
}

