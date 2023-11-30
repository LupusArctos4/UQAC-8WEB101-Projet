
/* TEMPLATE CARTE
NomCarte=null;
Bonus={
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 0,
    Money: 0
}
 */

class CartesIntrigues {
    constructor(nomCarte, bonus) {
        this.NomCarte = nomCarte;
        this.Bonus = bonus
    }
}

// -----------------

const intriguePlot1 = new CartesIntrigues("SecertOfTheSisterhood", {
    BeneGesserit: 1,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 0,
    Money: 0
})
const intriguePlot2 = new CartesIntrigues("FavoredSubject", {
    BeneGesserit: 0,
    TheEmperor: 1,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 0,
    Money: 0
})
const intriguePlot3 = new CartesIntrigues("GuildAuthorization", {
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 1,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 0,
    Money: 0
})
const intriguePlot4 = new CartesIntrigues("KnowTheirWays", {
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 1,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 0,
    Money: 0
})
const intriguePlot5 = new CartesIntrigues("WaterPeddlersUnion", {
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 1,
    Combat: 0,
    Money: 0
})
const intriguePlot6 = new CartesIntrigues("WindFall", {
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 0,
    Money: 2
})
const intrigueCombat1 = new CartesIntrigues("Ambush", {
    BeneGesserit: 0,
    TheEmperor: 0,
    SpacingGuild: 0,
    Fremen: 0,
    Landsraad: 0,
    Epices: 0,
    Eau: 0,
    Combat: 4,
    Money: 0
})

// -----------------

const  deckIntrigue = [
    intriguePlot1, intriguePlot2, intriguePlot3, intriguePlot4, intriguePlot5, intriguePlot6, intrigueCombat1, intrigueCombat1
];