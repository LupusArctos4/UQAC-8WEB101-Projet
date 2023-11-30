
const cases = {
    "benegesserit_1": 0,
    "benegesserit_2": 0,
    "theemperor_1": 0,
    "theemperor_2": 0,
    "spacingguild_1": 0,
    "spacingguild_2": 0,
    "fremen_1": 0,
    "fremen_2": 0,
    "landsrand_1": 0,
    "landsrand_2": 0,
    "landsrand_3": 0,
    "choam_1": 0,
    "choam_2": 0,
    "epice_1": 0,
    "epiceBonus_1": 0,
    "epice_2": 0,
    "epiceBonus_2": 0,
    "epice_3": 0,
    "epiceBonus_3": 0,
    "marqueur_1": 0,
    "eau_1": 0,
    "eau_2": 0,
    "eau_3": 0,
    "marqueur_2": 0,
    "eau_4": 0,
    "marqueur_3": 0
};



//  && cases["choam_1"]!==0 => pour la vérif
//if (joueur.SpacingGuild >=2) {
function choam1Function(joueur) {
    joueur.Epices -=3;
    joueur.Money +=5;
    joueur.SpacingGuild +=1;
}

function choam2Function(joueur) {
    joueur.Defausse.push(espacePlisse);
    joueur.Main.push(joueur.Deck.shift());
}

// -----------------

function epice1Function(joueur) {
    joueur.Epices += 4 + cases["epiceBonus_1"];
    joueur.H2O -=3;
}
function epice2Function(joueur) {
    joueur.Epices += 2 + cases["epiceBonus_1"];
    joueur.H2O -=1;
}
function epice3Function(joueur) {
    joueur.Epices += 1 + cases["epiceBonus_1"];
}

// -----------------

function eau1Function(joueur) {
    joueur.Garnison +=1;
    joueur.H2O +=2;
}
function eau2Function(joueur) {
    joueur.Garnison +=2;
    joueur.Main.push(joueur.Deck.shift());
    joueur.Main.push(joueur.Deck.shift());
    joueur.H2O -=2;
}
function eau3Function(joueur) {
    if (joueur.Epices !==0){
        joueur.Epices -=1;
        joueur.Money +=4;
    } else{
        joueur.Money +=1;
    }
}
function eau4Function(joueur) {
    joueur.Garnison +=1;
    joueur.Main.push(joueur.Deck.shift());
}

// -----------------

function garnisonToGuerre(joueur) {
    joueur.Deployees +=1;
    joueur.PointsDeCombat +=2;
    joueur.Garnison -=1;
}

// -----------------

function verificationInfluence(joueur, alliance) {
    if (joueur.PointsDAlliance(alliance) >= 2) {
        joueur.PointsDeVictoire +=1;
    }
    if (joueur.PointsDAlliance(alliance) === 4) {
        switch (alliance) {
            case "BeneGesserit":
                joueur.CartesIntrigues.push(deckIntrigue.shift());
                break;
            case "TheEmperor":
                joueur.Garnison +=2;
                break;
            case "SpacingGuild":
                joueur.Money +=3;
                break;
            case "Fremen":
                joueur.H2O +=1;
                break;
        }
    }
}
function beneGesserit_1(joueur) {
    joueur.BeneGesserit +=1;
    verificationInfluence(joueur, "BeneGesserit");
    joueur.Main.push(joueur.Deck.shift());
    joueur.Epices -= 1;
}
function beneGesserit_2(joueur) {
    joueur.BeneGesserit +=1;
    verificationInfluence(joueur, "BeneGesserit");
    joueur.CartesIntrigues.push(deckIntrigue.shift());
    joueur.Garnison +=2;
}
function theEmperor_1(joueur) {
    joueur.TheEmperor +=1;
    verificationInfluence(joueur,"TheEmperor");
    joueur.Garnison +=4;
    joueur.CartesIntrigues.push(deckIntrigue.shift());
    joueur.Epices -=4;
}
function theEmperor_2(joueur) {
    joueur.TheEmperor +=1;
    verificationInfluence(joueur,"TheEmperor");
    joueur.Defausse.push(espacePlisse);
}
function spacingGuild(joueur) {
    joueur.SpacingGuild +=1;
    verificationInfluence(joueur,"SpacingGuild");
    joueur.Garnison +=5;
    joueur.Epices -=5;
}
function spacingGuild(joueur) {
    joueur.SpacingGuild +=1;
    verificationInfluence(joueur,"SpacingGuild");
    joueur.H2O +=1;
}
function fremen_1(joueur) {
    joueur.Fremen +=1;
    verificationInfluence(joueur, "Fremen");
    joueur.Garnison +=1;
    // pour défausser c'est compliqué pour l'instant
    joueur.H2O -=1;
}
function fremen_2(joueur) {
    joueur.Fremen +=1;
    verificationInfluence(joueur, "Fremen");
    joueur.Main.push(joueur.Deck.shift());
}