import { PlayerProvider } from '../context/playerContext';
import { Link, useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Input, Button, Heading, Box, Container, Text, SliderProvider, Image } from '@chakra-ui/react'

function StatsPlayer() {
    const playerContext = useContext(PlayerContext);
    if (playerContext.rankedStats.data) {
        console.log(playerContext.rankedStats.data.attributes["squad-fpp"]);
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading pl={28}>Pubg Stats:</Heading>
                    <Heading size="md" mt={3} mb={5}>{playerContext.playerName}</Heading>
                    <Box boxSize='8rem'>
                        <Image src={"/images/" + playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier + playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier + ".png"}></Image>
                    </Box>
                    <Text>Rank: {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier} {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier}</Text>
                    <Text>Rating: {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentRankPoint} RP</Text>
                    <Text>win%: {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].winRatio * 100}</Text>
                    <Text>kills: {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].kills}</Text>
                    <Text>deaths: {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].deaths}</Text>
                    <Text>K/D: {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].kills / playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].deaths}</Text>
                </Box>
            </Container>
        );
    }
    else {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading pl={28}>Pubg Stats:</Heading>
                    <Heading size="md" mt={3}>{playerContext.playerName}</Heading>
                    <Text>Rank: Data loading...</Text>
                    <Text>Rating: Data loading...</Text>
                    <Text>win%: Data loading...</Text>
                    <Text>kills: Data loading...</Text>
                    <Text>deaths: Data loading...</Text>
                    <Text>K/D: Data loading...</Text>
                </Box>
            </Container>
        );
    }
    
}

export default StatsPlayer;