document.getElementById('showTeams').addEventListener('click', function() {
    const teamsDiv = document.getElementById('teams');
    if (teamsDiv.classList.contains('hidden')) {
        teamsDiv.classList.remove('hidden');
        fetch('/api/products')  // Wysłanie zapytania do API, które zwraca listę produktów
            .then(response => response.json())  // Przetwarzamy odpowiedź w formacie JSON
            .then(products => {
                // Tworzymy listę z nazwami produktów
                teamsDiv.innerHTML = `
                    <h3>Produkty:</h3>
                    <ul>
                        ${products.map(product => `<li>${product.productName}</li>`).join('')}
                    </ul>
                `;
            })
            .catch(error => {
                console.error('Błąd podczas ładowania produktów:', error);
                teamsDiv.innerHTML = `<p>Wystąpił problem podczas ładowania produktów.</p>`;
            });
    } else {
        teamsDiv.classList.add('hidden');
        teamsDiv.innerHTML = '';
    }
});

