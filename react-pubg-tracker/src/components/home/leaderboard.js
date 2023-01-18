import { PlayerContext } from '../../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Input, Button, Heading, Box, Container } from '@chakra-ui/react'
import { getLeaderboardDataByGameMod, getLastSeason } from './../../API/pubgApiRequest';


const Leaderboard = () => {
    const [leaderboards, setLeaderboards] = useState([]);
    let topLeaderboardPlayer = [];
    const gameMod = ["squad", "squad-fpp"];
    useEffect(() => {
        getLeaderboardDataByGameMod("pc-eu", gameMod[0]).then(data => setLeaderboards(data));
    }, []);
    const playerContext = useContext(PlayerContext);
    if (leaderboards.length === 0) {
        return (
            <p>No Leaderboard Data.</p>
        )
    }
    else {
        let i = 0
        //get 
        for (const elem of leaderboards.data.relationships.players.data) {
            if (i > 4)
                break;
            console.log(elem.id);
            topLeaderboardPlayer[i] = elem.id;
            i++;
        }
        console.log(topLeaderboardPlayer);
    }
    return (
        <p>hello</p>
    );
}

export default Leaderboard