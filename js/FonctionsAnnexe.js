function afficherCartes(joueur)
{
    if (joueur === "Vert")
    {
        for (let i = 0 ; i < joueurVert.CartesClassiques.Main.length ; i++)
        {
            var nouvelleImage = document.createElement('img');

            // Configurer les attributs de l'image
            nouvelleImage.src = joueurVert.CartesClassiques.Main[i].lienImage;
            nouvelleImage.alt = 'Description de l\'image';
            nouvelleImage.width = 150; // spécifiez la largeur si nécessaire
            nouvelleImage.height = 240;
            // spécifiez la hauteur si nécessaire

            // Sélectionner la div dans laquelle vous souhaitez insérer l'image
            var maDiv = document.getElementById('conteneur_J1');
            maDiv.appendChild(nouvelleImage);
        }
    }
}