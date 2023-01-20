import { PlayerProvider } from '../context/playerContext';
import { Link, useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Center, Flex, Input, Button, Heading, Box, Container, Text, SliderProvider, Image } from '@chakra-ui/react'

function StatsPlayer() {
    const playerContext = useContext(PlayerContext);
    if (playerContext.rankedStats.data) {
        return (
            <Container>
                <Center>
                    <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                        <Box p={7}>
                            <Heading >Pubg Stats Ranked:</Heading>
                            <Center>
                                <Heading size="xl" mt={3} mb={5}>{playerContext.playerName}</Heading>
                            </Center>
                            <Center>
                                <Box boxSize='10rem'>
                                    <Image src={"/images/" + playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier + playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier + ".png"}></Image>
                                </Box>
                            </Center>

                            <Text fontSize='xl'>Rank:
                                &nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier} {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier}</Text>
                            <Text fontSize='xl' mt={3}>Rating:
                                &nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentRankPoint} RP</Text>
                            <Text fontSize='xl' mt={3}>win:
                                &nbsp;{(playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].winRatio * 100).toFixed(2)}%</Text>
                            <Text fontSize='xl' mt={3}>kills:
                                &nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].kills}</Text>
                            <Text fontSize='xl' mt={3}>deaths:
                                &nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].deaths}</Text>
                            <Text fontSize='xl' mt={3}>K/D:
                                &nbsp;{(playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].kills /
                                playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].deaths).toFixed(2)}</Text>
                            <Text fontSize='xl' mt={3}>Avg Damage:
                                &nbsp;{(playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].damageDealt /
                                playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].roundsPlayed).toFixed()}</Text>
                        </Box>
                    </Box>
                </Center>
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