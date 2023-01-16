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
    getPlayerMasteryWeapon("steam");
    // checkApiStatus();
});

export const getPlayerLastSeasonStats = async(platform) => {
    const lastSeasonId = await getLastSeason();
    const playerId = await getPlayerData(playerName.value, platform);
    const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/seasons/${lastSeasonId}?filter[gamepad]=false`;
    const response = await fetch(url, options);
    const data = await response.json();
    return (data);
}

export const getPlayerRankedData = async(platform) => {
    const lastSeasonId = await getLastSeason();
    const playerId = await getPlayerDataId(playerName.value, platform);
    const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/seasons/${lastSeasonId}/ranked`;
    const response = await fetch(url, options);
    const data = await response.json();
    return (data);
}

export const getPlayerMasteryWeapon = async(platform) => {
    const playerId = await getPlayerDataId(playerName.value, platform);
    const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/weapon_mastery`;
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return (data);
}

export const getLeaderboardDataByGameMod = async(platformRegion) => {
    //Need to do some fix cannot get in json response
    const option = {
        method: 'GET',
        headers: {
            Accept: "*/*",
            Authorization: authorization
        },
    }
    const gameMode = "squad";
    const currentSeasonId = await getLastSeason();
    const url = `https://api.pubg.com/shards/${platformRegion}/leaderboards/${currentSeasonId}/${gameMode}`;
    const response = await fetch(url, option);
    return (response);
}

// basic and useful request 
export const checkApiStatus = async() => {
    const url = "https://api.pubg.com/status";
    const response = await fetch(url, options);
    const data = await response.json();
    return (data);
}

export function getPlayerId(stringId) {
    let index = stringId.indexOf('.');  
    let res = stringId.substring(index + 1);
    return (res);
}

export const getListSeasons = async() => {
    const url="https://api.pubg.com/shards/steam/seasons";
    const response = await fetch(url, options);
    const datas = await response.json();
    datas.data.forEach(elem => {
        console.log(elem.id);
    });
    return (datas);
}

export const getLastSeason = async() => {
    const url="https://api.pubg.com/shards/steam/seasons";
    const response = await fetch(url, options);
    const datas = await response.json();
    let res = "";
    for (elem of datas.data) {
        if (elem.id.includes("pc") && elem.id.includes("21")) {
            res = elem.id;
        }
        else if (res && !elem.id.includes("pc")) {
            return (res);
        }
    }
    return (res);
}

export const getPlayerDataId = async(playerName, platform) => {
    const url = `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${playerName}`;
    const response = await fetch(url, options);
    const datas = await response.json();
    return (datas.data[0].id);
};