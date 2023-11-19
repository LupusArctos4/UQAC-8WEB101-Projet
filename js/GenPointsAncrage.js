class GenPointsAncrage {
    largeurPlateau;
    hauteurPlateau;
    constructor() {
        let largeurPlateau = window.document.getElementById("plateau").width;
        let hauteurPlateau = window.document.getElementById("plateau").height;

        this.largeurPlateau = largeurPlateau;
        this.hauteurPlateau = hauteurPlateau;
    }

    display()
    {
        console.log("Largeur du plateau : " + this.largeurPlateau);
        console.log("Hauteur du plateau : " + this.hauteurPlateau);
    }
}