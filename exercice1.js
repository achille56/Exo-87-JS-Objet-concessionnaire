let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};


let image = document.createElement("img");
    image.src = voiture.imgUrl;
    document.body.appendChild(image);

let presentation = document.createElement("p");
    presentation.innerHTML = " Voici la nouvelle " + voiture.Nom + " de chez " + voiture.Constructeur + " avec ça jolie"
        + " couleur " + voiture.Couleur + "." + " elle dispose de " + voiture.nombresRoues + " roues " + "," +
        voiture.nombrePortes + " portes " + " ,d'une autonomie exceptionnel de " + voiture.Autonomie + "." +
        " Vous serez ravi par ça recharge " + voiture.Carburant + " et " + " ça vitesse maxi de " + voiture.vitesseMaxi
    document.body.appendChild(presentation);