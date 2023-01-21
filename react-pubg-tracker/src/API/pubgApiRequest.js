const playerName = document.getElementById('pseudoPubg');
// const form = document.getElementById('form');
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwZTE0OTdlMC03MWQzLTAxM2ItOTYzZi0zN2YzNjJkYzhhZjkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjczMjE3NDkxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InBheW5lcHViZ3RyYWNrIn0.Iwd3GMM9XMTFPb3SJKp7xMAJA3BOoieC7wHNJ_AM-8s";
const authorization = `Bearer ${apiKey}`;
const options = {
    method: 'GET',
    headers: {
        Accept: "application/vnd.api+json",
        Authorization: authorization
    },
}

const API = {

    getLastSeason: async() => {
        try {
        const url="https://api.pubg.com/shards/steam/seasons";
        const response = await fetch(url, options);
        if (response.status === 429) {
            return (response.status);
        }
        const datas = await response.json();
        let res = "";
        for await (let elem of datas.data) {
            if (elem.id.includes("pc") && elem.id.includes("21")) {
                res = elem.id;
            }
        }
        return (res);
        } catch (err) {
            console.error(err.message);
            return "";
        }
    },

    getPlayerLastSeasonStats: async(platform) => {
        try {
            const lastSeasonId = await API.getLastSeason();
            const playerId = await API.getPlayerDataId(playerName.value, platform);
            if (playerId === 429 || !lastSeasonId === 429) {
                return (429);
            }
            const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/seasons/${lastSeasonId}?filter[gamepad]=false`;
            const response = await fetch(url, options);
            if (response.status === 429) {
                return (response.status);
            }
            return (response.json());
        }catch (err) {
            console.error(err.message);
            return [];
        }
    },
    
    getPlayerRankedData: async(platform, playerName) => {
        try {
        if (!platform || !playerName)
            return ([]);
        const lastSeasonId = await API.getLastSeason();
        const playerId = await API.getPlayerDataId(playerName, platform);
        if (lastSeasonId === 429 || playerId === 429) {
            return (429);
        }
        const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/seasons/${lastSeasonId}/ranked`;
        const response = await fetch(url, options);
        if (response.status === 429) {
            return (response.status);
        }
        const data = await response.json();
        return (data);
        } catch (err) {
            console.error(err.message);
            return([]);
        }
    },
    
    getPlayerMasteryWeapon: async(platform, playerName) => {
        try {
            if (!platform || !playerName) {
                return ([]);
            }
        const playerId = await API.getPlayerDataId(playerName, platform);
        if (playerId === 429) {
            return (429);
        }
        const url = `https://api.pubg.com/shards/${platform}/players/${playerId}/weapon_mastery`;
        const response = await fetch(url, options);
        if (response.status === 429) {
            return (response.status);
        }
        const data = await response.json();
        return (data);
        } catch (err) {
            console.error(err.message);
            return([]);
        }
    },
    
    getLeaderboardDataByGameMod: async(platformRegion, gameMode) => {
        try {
        //Need to do some fix cannot get in json response
        const currentSeasonId = await API.getLastSeason();
        if (currentSeasonId === 429) {
            return (429);
        }
        const url = `https://api.pubg.com/shards/${platformRegion}/leaderboards/${currentSeasonId}/${gameMode}`;
        const response = await fetch(url, options);
        if (response.status === 429) {
            return (response.status);
        }
        const data = await response.json();
        return (data);
        } catch (err) {
            console.error(err.message);
            return([]);
        }
    },
    
    // basic and useful request 
    checkApiStatus: async() => {
        try {
        const url = "https://api.pubg.com/status";
        const response = await fetch(url, options);
        if (response.status === 429) {
            return (response.status);
        }
        const data = await response.json();
        return (data);
        } catch (err) {
            console.error(err.message);
            return "";
        }
    },
    
    getListSeasons: async() => {
        try {
        const url="https://api.pubg.com/shards/steam/seasons";
        const response = await fetch(url, options);
        if (response.status === 429) {
            return (response.status);
        }
        const datas = await response.json();
        // datas.data.forEach(elem => {
        //     console.log(elem.id);
        // });
        return (datas);
        } catch (err) {
            console.error(err.message);
            return([]);
        }
    },
    
    getPlayerDataId: async(playerName, platform) => {
        try {
        const url = `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${playerName}`;
        const response = await fetch(url, options);
        const datas = await response.json();
        if (response.status === 429) {
            return (response.status);
        }
        return (datas.data[0].id);
        } catch (err) {
            console.error(err.message);
            return ("");
        }

    }
}

export default API;

/*
<h1>Pubg tracker</h1>
    <form id="form">
        <input id="pseudoPubg" name="pseudo" type="text" placeholder="Search players">
        <button type="submit">Valid</button>
    </form>
    <script src=""></script>
*/