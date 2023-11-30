
/* TEMPLATE CARTE
NomCarte=null;
Jeu={
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0
}
BonusAchat={
    UpInfluence: 0,
    UpPtsVictoire: 0
}
Effet={
    Piocher: 0,
    Detruire: 0
}
Revelation={
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 0
}
 */

class CartesClassiques {
    constructor(nomCarte, jeu, bonusAchat, effet, revelation, prix) {
        this.NomCarte = nomCarte;
        this.Jeu = jeu;
        this.BonusAchat = bonusAchat;
        this.Effet = effet;
        this.Revelation = revelation;
        this.Prix = prix
    }
}

// Function to shuffle the deck
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    }
}


// -----------------
// Carte Imperium
const espacePlisse = new CartesClassiques("EspacePlisse",{
    BeneGesserit: 1,
    TheEmperor: 1,
    SpacingGuild: 1,
    Fremen: 1,
    Landsraad: 1,
    Epices: 1,
    Eau: 1,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 0
}, 0);
const epiceDoitCouler = new CartesClassiques("EpiceDoitCouler",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 1
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 1,
    Eau: 0,
    Persuasion: 0
}, 9);
const contactArrakis = new CartesClassiques("ContactArrakis",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 1,
    Epices: 0,
    Eau: 1,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 2
}, 2);

// -----------------------------------
// Deck
const dague = new CartesClassiques("Dague",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 1,
    Epices: 0,
    Eau: 0,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 1,
    Epice: 0,
    Eau: 0,
    Persuasion: 0
}, 0);
const duneSables = new CartesClassiques("duneSables",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 1,
    Eau: 0,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 1,
    Epice: 0,
    Eau: 0,
    Persuasion: 1
}, 0);
const argument = new CartesClassiques("Argument",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 2
}, 0);
const diplomatie = new CartesClassiques("Diplomatie",{
    BeneGesserit: 1,
    TheEmperor: 1,
    SpacingGuild: 1,
    Fremen: 1,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 1
}, 0);
const chevaliere = new CartesClassiques("Chevaliere",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 1,
    Epices: 1,
    Eau: 1,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 1
}, 0);
const rechercheAllies = new CartesClassiques("RechercheAllies",{
    BeneGesserit: 1,
    TheEmperor: 1,
    SpacingGuild: 1,
    Fremen: 1,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 1
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 0
}, 0);
const reconnaissance = new CartesClassiques("Reconnaissance",{
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 1,
}, {
    UpInfluence: 0,
    UpPtsVictoire: 0
}, {
    Piocher: 0,
    Detruire: 0
}, {
    Combat: 0,
    Epice: 0,
    Eau: 0,
    Persuasion: 1
}, 0);

const  deckStarter= [
    duneSables, duneSables, dague, dague, argument, argument, diplomatie, chevaliere, rechercheAllies, rechercheAllies
];
