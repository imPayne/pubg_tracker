
const playerName = document.getElementById('pseudoPubg');
const form = document.getElementById('form');

let apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwZTE0OTdlMC03MWQzLTAxM2ItOTYzZi0zN2YzNjJkYzhhZjkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjczMjE3NDkxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InBheW5lcHViZ3RyYWNrIn0.Iwd3GMM9XMTFPb3SJKp7xMAJA3BOoieC7wHNJ_AM-8s";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    requestPlayerData(playerName.value, "pc-eu");
    //checkApiStatus();
});

function checkApiStatus() {
    const url = "https://api.pubg.com/status";
    let options = {
        method: 'GET',
        headers: {
            "Accept": "application/vnd.api+json"
        }
    }
    fetch(url, options)
    .then((response) => {
        response.json()
        console.log(response);
    })
    .catch(error => console.log(error));
}

function requestPlayerData(playerName, platformRegion) {
    let authorization = `"Authorization": "Bearer ${apiKey}"`;
    const url = `https://api.pubg.com/shards/${platformRegion}/playersNames/${playerName}`;
    let options = {
        method: 'GET',
        headers: {
            authorization,
            "Accept": "application/vnd.api+json"
        },
    }
    console.log(`player name: ${playerName}`);
    fetch(url, options)
    .then(response => response.json())
    .catch(err => console.log(err));
}

function getLeaderboardData(playerName, platformRegion, seasonId, gameMode) {
    let authorization = `"Authorization": "Bearer ${apiKey}"`;
    const url = `https://api.pubg.com/shards/${platformRegion}/leaderboards/${seasonId}/${gameMode}`;
    let options = {
        method: 'GET',
        headers: {
            authorization,
            "Accept": "application/vnd.api+json"
        },
    }
    fetch(url, options)
    .then((response) => {
        response.json()
        console.log(response);
    })
    .catch(error => console.log(error));
}