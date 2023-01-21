import { useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext } from 'react';
import { Center, Flex, Button, Heading, Box, Container, Text, Image, Spinner, Spacer } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, MoonIcon, LockIcon } from '@chakra-ui/icons';

function StatsPlayer() {
    const playerContext = useContext(PlayerContext);
    const navigate = useNavigate();
    if (playerContext.rankedStats.data && playerContext.playerName) {
        return (
            <Container mt={25}>
                <Center>
                    <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                        <Box p={7}>
                            <Heading pl={5} pr={5} size='2xl'>Pubg Ranked:</Heading>
                            <Center>
                                <Heading size="xl" mt={10}>{playerContext.playerName}</Heading>
                            </Center>
                            <Center>
                                <Box boxSize='10rem'>
                                    <Image src={"/images/" + playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier + playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier + ".png"}></Image>
                                </Box>
                            </Center>
                            <Text fontSize='xl'>Rank:
                                <Text color='#c9760e' fontSize='xl' as='b'>&nbsp;&nbsp;&nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier} {playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier}</Text>
                                &nbsp;&nbsp;
                                <Text fontSize='xl' as='b'>{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].currentRankPoint} RP</Text></Text>
                            <Text fontSize='xl' mt={3}>Win:
                                &nbsp;{(playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].winRatio * 100).toFixed(2)}%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {playerContext.rankedStats.data.attributes.rankedGameModeStats['squad-fpp'].roundsPlayed} Games <Text color='#0089ef' fontSize='xl' as='b'>{playerContext.rankedStats.data.attributes.rankedGameModeStats['squad-fpp'].wins} Wins</Text></Text>
                            <Text fontSize='xl' mt={3}>kills:
                                &nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].kills}</Text>
                            <Text fontSize='xl' mt={3}>deaths:
                                &nbsp;{playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].deaths}</Text>
                            <Text fontSize='xl' mt={3}>K/D:
                                &nbsp;<Text color='#c9760e' fontSize='xl' as='b'>{(playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].kills /
                                playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].deaths).toFixed(2)}</Text></Text>
                            <Text fontSize='xl' mt={3}>Avg Damage:
                                &nbsp;<Text color='#c8311e' fontSize='xl' as='b'>{(playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].damageDealt /
                                playerContext.rankedStats.data.attributes.rankedGameModeStats["squad-fpp"].roundsPlayed).toFixed()}</Text></Text>
                        </Box>
                        <Center>
                            <Flex>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                navigate(`/user/weapon_mastery/${playerContext.playerName}`);
                            }}>
                                <Button m={2} colorScheme='orange' size='md' type="submit">Weapon Mastery</Button>
                            </form>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                navigate(`/`);
                            }}>
                                <Button m={2} colorScheme='orange' size='md' type="submit">Home Page</Button>
                            </form>
                            </Flex>
                        </Center>
                    </Box>
                </Center>
            </Container>
        );
    }
    else if (!playerContext.rankedStats.data && !playerContext.playerName) {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading pl={28} pb={5}>Pubg Stats Ranked:</Heading>
                    <Heading size="md" mt={3}>{playerContext.playerName}</Heading>
                    <Text fontSize='xl' mt={3}>Rank: No Data</Text>
                    <Text fontSize='xl' mt={3}>Rating: No Data</Text>
                    <Text fontSize='xl' mt={3}>win%: No Data</Text>
                    <Text fontSize='xl' mt={3}>kills: No Data</Text>
                    <Text fontSize='xl' mt={3}>deaths: No Data</Text>
                    <Text fontSize='xl' mt={3} mb={3}>K/D: No Data</Text>
                    <Center>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            navigate(`/`);
                        }}>
                            <Button m={2} colorScheme='orange' size='md' type="submit">Home Page</Button>
                        </form>
                    </Center>
                </Box>
            </Container>
        );
    }
    else if (playerContext.rankedStats === 429) {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading color='red' pl={28}>Code Error:</Heading>
                    <Center>
                        <Heading size="md" mt={3} color='red'>429 Too many request 10 per minute </Heading>
                    </Center>
                    <Flex>
                        <Center>
                            <Text fontSize='xl' mt={3}>Rank: Too many request!</Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <LockIcon w={8} h={8} color="red.500"></LockIcon>
                        </Center>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text fontSize='xl' mt={3}>Rating: Too many request!  </Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <LockIcon w={8} h={8} color="red.500"></LockIcon>
                        </Center>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text fontSize='xl' mt={3}>win%: Too many request!</Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <LockIcon w={8} h={8} color="red.500"></LockIcon>
                        </Center>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text fontSize='xl' mt={3}>kills: Too many request!</Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <LockIcon w={8} h={8} color="red.500"></LockIcon>
                        </Center>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text fontSize='xl' mt={3}>deaths: Too many request!</Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <LockIcon w={8} h={8} color="red.500"></LockIcon>
                        </Center>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text fontSize='xl' mt={3} mb={3}>K/D: Too many request!</Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <LockIcon w={8} h={8} color="red.500"></LockIcon>
                        </Center>
                    </Flex>
                    <Center>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            navigate(`/`);
                        }}>
                            <Button m={2} colorScheme='orange' size='md' type="submit">Home Page</Button>
                        </form>
                    </Center>
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
                    <Text fontSize='xl' mt={3}>Rank: <Spinner ml={5} thickness='4px' speed='0.65s' emptyColor='#F0F0F0' color='orange' size='md' /></Text>
                    <Text fontSize='xl' mt={3}>Rating: <Spinner ml={5} thickness='4px' speed='0.65s' emptyColor='#F0F0F0' color='orange' size='md' /></Text>
                    <Text fontSize='xl' mt={3}>win%: <Spinner ml={5} thickness='4px' speed='0.65s' emptyColor='#F0F0F0' color='orange' size='md' /></Text>
                    <Text fontSize='xl' mt={3}>kills: <Spinner ml={5} thickness='4px' speed='0.65s' emptyColor='#F0F0F0' color='orange' size='md' /></Text>
                    <Text fontSize='xl' mt={3}>deaths: <Spinner ml={5} thickness='4px' speed='0.65s' emptyColor='#F0F0F0' color='orange' size='md' /></Text>
                    <Text fontSize='xl' mt={3} mb={3}>K/D: <Spinner ml={5} thickness='4px' speed='0.65s' emptyColor='#F0F0F0' color='orange' size='md' /></Text>
                    <Center>
                        <Flex>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                navigate(`/user/weapon_mastery/${playerContext.playerName}`);
                            }}>
                                <Button m={2} colorScheme='orange' size='md' type="submit">Weapon Mastery</Button>
                            </form>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                navigate(`/`);
                            }}>
                                <Button m={2} colorScheme='orange' size='md' type="submit">Home Page</Button>
                            </form>
                        </Flex>
                    </Center>
                </Box>
            </Container>
        );
    }
    
}

export default StatsPlayer;