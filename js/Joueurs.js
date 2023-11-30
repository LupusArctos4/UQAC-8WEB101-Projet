
class Joueurs {
    constructor() {
        this.Nom= null;
        this.PointsDeVictoire= 0;
        this.PointsDAlliance= {
            BeneGesserit: 0,
            TheEmperor: 0,
            SpacingGuild: 0,
            Fremen: 0
        };
        this.Ressources= {
            Money: 0,
            H2O: 1,
            Epices: 0,
            Persuasion:0
        };
        this.Combats= {
            Garnison: 0,
            Deployees: 0,
            PointsDeCombat: 0
        };
        this.CartesClassiques= {
            Deck: [],
            Defausse: [],
            Main: [],
            Joue: []
        };
        this.CartesIntrigues= {
            Complot: [],
            Combat: [],
            Endgame: []
        };
    }
}