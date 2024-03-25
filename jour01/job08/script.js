// Fonction pour vérifier si un nombre est premier
const estNombrePremier = nombre => {
    //Math.sqrt() est une fonction native qui permet de calculer la racine carrée d'un nombre.
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) return false;
    }
    return nombre > 1;
};

// Fonction pour calculer la somme de deux nombres premiers
const sommeNombresPremiers = (nombre1, nombre2) => estNombrePremier(nombre1) && estNombrePremier(nombre2) ? nombre1 + nombre2 : false;


console.log(sommeNombresPremiers(3, 5)); 
console.log(sommeNombresPremiers(4, 7)); 
console.log(sommeNombresPremiers(11, 13)); 