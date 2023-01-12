
const playerName = document.getElementById('pseudoPubg');
const form = document.getElementById('form');

const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwZTE0OTdlMC03MWQzLTAxM2ItOTYzZi0zN2YzNjJkYzhhZjkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjczMjE3NDkxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InBheW5lcHViZ3RyYWNrIn0.Iwd3GMM9XMTFPb3SJKp7xMAJA3BOoieC7wHNJ_AM-8s";
const authorization = `Bearer ${apiKey}`;
const options = {
    method: 'GET',
    headers: {
        Accept: "application/vnd.api+json",
        Authorization: authorization
    },
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getPlayerRankedData();
    // getPlayerSeasonStats(playerName.value, "steam", "19");
    // getPlayerData(playerName.value, "steam");
    // checkApiStatus();
});

const checkApiStatus = async() => {
    const url = "https://api.pubg.com/status";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

function getPlayerId(stringId) {
    console.log(stringId);
    let index = stringId.indexOf('.');  
    let res = stringId.substring(index + 1);
    return (res);
}

const getPlayerData = async(playerName, platform) => {
    const url = `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${playerName}`;
    const response = await fetch(url, options);
    const datas = await response.json();
    return (datas.data[0].id);
};

const getPlayerRankedData = async() => {
    const platform = "steam";
    const lastSeasonId = await getLastSeason();
    console.log("lastSeasonId: " + lastSeasonId);
    const playerId = await getPlayerData(playerName.value, platform);
    const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/seasons/${lastSeasonId}/ranked`;
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

const getListSeasons = async() => {
    const url="https://api.pubg.com/shards/steam/seasons";
    const response = await fetch(url, options);
    const datas = await response.json();
    datas.data.forEach(elem => {
        console.log(elem.id);
    });
    return (datas);
}

const getLastSeason = async() => {
    const url="https://api.pubg.com/shards/steam/seasons";
    const response = await fetch(url, options);
    const datas = await response.json();
    let res = "";
    for (elem of datas.data) {
        if (elem.id.includes("pc") && elem.id.includes("21")) {
            res = elem.id;
        }
    }
    return (res);
}

const getPlayerSeasonStats = async(playerName, platform, season) => {
    const url = `https://api.pubg.com/shards/${platform}/players/${playerName}/seasons/${season}?filter[gamepad]=true`;
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

function getLeaderboardData(platformRegion, seasonId, gameMode) {
    const url = `https://api.pubg.com/shards/${platformRegion}/leaderboards/${seasonId}/${gameMode}`;
    fetch(url, options)
    .then((response) => {
        response.json();
        console.log(response);
    })
    .catch(error => console.log(error));
}