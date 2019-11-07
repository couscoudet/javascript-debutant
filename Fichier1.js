let prenom = "yannick";
console.log(prenom);

//créer un tableau : array
let episodes = ["starlion découvre la planete X","la revanche de Mumvra","L'épée du pouvoir","la vision par delà la vision"];
alerte = episodes[2];
alert(alerte);

//exercice sur les boucles for 

const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++){
    console.log("Passager embarqué!")
}
//première commande : démarrage de la boucle
//deuxième commande : instruction de fin de boucle : sort de la boucle lorsqu'elle est false
//troiseme commande : incrementation


//pour les odres, précis, tableaux : for...of et for...in

const passengers = [
    "John Mclain",
    "Sylvester Stallone",
    "Carole Mamour",
    "Jean Claude Van Damme",
    "Charlize Theron",
]

for (let i in passengers) {
    console.log("Embarquement immédiat du passager" + passengers[i]);
}

for (let passenger of passengers){
    console.log("Passager " + passenger + " embarqué");
}