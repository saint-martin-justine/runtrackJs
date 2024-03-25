//function permet d'organiser le code en le divisant en tâches plus petites et plus gérables.
function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test de la fonction
let anneeTest = 2024; 
console.log("L'année", anneeTest, "est bissextile ?", bisextile(anneeTest));
