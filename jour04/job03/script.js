function filtrerPokemon() {
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const id = document.getElementById('id').value;
            const nom = document.getElementById('nom').value.toLowerCase();
            const type = document.getElementById('type').value;

            let filteredData = data;

            if (id) {
                filteredData = filteredData.filter(pokemon => pokemon.id == id);
            }
            if (nom) {
                filteredData = filteredData.filter(pokemon => pokemon.nom.toLowerCase().includes(nom));
            }
            if (type) {
                filteredData = filteredData.filter(pokemon => pokemon.type === type);
            }

            displayResults(filteredData);
        });
}

function displayResults(pokemons) {
    const resultSection = document.getElementById('resultats');
    resultSection.innerHTML = '';

    if (pokemons.length > 0) {
        pokemons.forEach(pokemon => {
            const pElement = document.createElement('p');
            pElement.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.nom}, Type: ${pokemon.type}`;
            resultSection.appendChild(pElement);
        });
    } else {
        resultSection.textContent = 'Aucun Pokémon ne correspond à vos critères de recherche.';
    }
}
