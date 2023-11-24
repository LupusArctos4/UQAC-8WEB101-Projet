class GenPointsAncrage {
    hauteurPage;
    hauteurPlateau;
    constructor() {
        let hauteurPage = window.document.body.offsetHeight;
        let hauteurPlateau = window.document.getElementById("plateau").offsetHeight;

        this.hauteurPage = hauteurPage;
        this.hauteurPlateau = hauteurPlateau;

    }

    display()
    {
        console.log("Hauteur de la page : " + this.hauteurPage);
        console.log("Hauteur du plateau : " + this.hauteurPlateau);
    }
}