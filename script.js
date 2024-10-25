document.getElementById('showTeams').addEventListener('click', function() {
    const teamsDiv = document.getElementById('teams');
    if (teamsDiv.classList.contains('hidden')) {
        teamsDiv.classList.remove('hidden');
        teamsDiv.innerHTML = `
            <h3>Drużyny Premier League:</h3>
            <ul>
                <li>Manchester City</li>
                <li>Liverpool</li>
                <li>Chelsea</li>
                <li>Manchester United</li>
                <li>Arsenal</li>
                <li>Tottenham Hotspur</li>
            </ul>
        `;
    } else {
        teamsDiv.classList.add('hidden');
        teamsDiv.innerHTML = '';
    }
});

