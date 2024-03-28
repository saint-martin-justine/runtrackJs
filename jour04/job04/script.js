document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("updateButton").addEventListener("click", function() {
        fetch('utilisateur.json')
            .then(response => response.json())
            .then(users => {
                const tbodyElement = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
                tbodyElement.innerHTML = ''; // Effacer les anciens utilisateurs
                users.forEach(user => {
                    const trElement = document.createElement('tr');
                    trElement.innerHTML = `<td>${user.id}</td><td>${user.nom}</td><td>${user.prenom}</td><td>${user.email}</td>`;
                    tbodyElement.appendChild(trElement);
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
    });
});
