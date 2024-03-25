function jourTravaille(date) {
    const joursFeries = ["01-01", "05-01", "08-05", "05-30", "06-10", "07-14", "08-15", "11-01", "11-11", "12-25"];
    const weekEnds = [0, 6];
    
    const jour = date.getDate(), mois = date.toLocaleString('default', { month: 'long' }), annee = date.getFullYear();
    const jourSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][date.getDay()];
    const dateStr = `${("0" + jour).slice(-2)}-${("0" + (date.getMonth() + 1)).slice(-2)}`;

    if (joursFeries.includes(dateStr))
        return console.log(`${jourSemaine} ${jour} ${mois} ${annee} est un jour férié.`);
    
    if (weekEnds.includes(date.getDay()))
        return console.log(`Non, ${jourSemaine} ${jour} ${mois} ${annee} est un week-end.`);
    
    console.log(`Oui, ${jourSemaine} ${jour} ${mois} ${annee} est un jour travaillé.`);
}


jourTravaille(new Date(2022, 0, 1)); 
jourTravaille(new Date(2022, 5, 9)); 
jourTravaille(new Date(2022, 5, 25)); 
