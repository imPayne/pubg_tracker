import { useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Spacer, Link, Center, Flex, Input, Button, Heading, Box, Container, Text, SliderProvider, Image, Spinner } from '@chakra-ui/react'

function Weapon_mastery() {
    const navigate = useNavigate();
    const playerContext = useContext(PlayerContext);
    if (playerContext.weaponMastery.length === 0 && playerContext.weaponMastery !== 429 || (playerContext.weaponMastery !== 429 && playerContext.weaponMastery.length != 0)) {
        
    }
    if (playerContext.weaponMastery.data && playerContext.playerName && playerContext.weaponMastery !== 429) {
        if (playerContext.weaponMastery.data.attributes) {
            let keysWeapon = Object.keys(playerContext.weaponMastery.data.attributes.weaponSummaries);
            let maxKill = 0;
            let topWeapon = "";
            for (let elem of keysWeapon) {
                if (playerContext.weaponMastery.data.attributes.weaponSummaries[elem].StatsTotal.Kills > maxKill) {
                    maxKill = playerContext.weaponMastery.data.attributes.weaponSummaries[elem].StatsTotal.Kills;
                    topWeapon = elem;
                }
            }
            playerContext.weaponMastery.data.attributes.weaponSummaries[topWeapon].StatsTotal.weaponName = topWeapon;
            playerContext.setSavedBestWeapon(playerContext.weaponMastery.data.attributes.weaponSummaries[topWeapon].StatsTotal);
            console.log(topWeapon + " " + maxKill);
            console.log(playerContext.savedBestWeapon);
        }
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>Weapon Mastery of {playerContext.playerName}</Heading>
                        <Box m={5} p={5} borderRadius={7} backgroundColor='#F0F0F0'>
                            <Image src={"/images/weapons/" + playerContext.savedBestWeapon.weaponName + ".png"}></Image>
                        </Box>
                        <Flex>
                            <Text p={4} fontSize='xl' as='b'>Kills:</Text>
                            <Spacer />
                                <Text p={4} fontSize='xl' as='b' color="orange.500">{playerContext.savedBestWeapon.Kills}</Text>
                        </Flex> 
                        <Flex>
                            <Text p={4} fontSize='xl' as='b'>Longest Kill: </Text>
                                <Spacer />
                            <Text p={4} fontSize='xl' as='b' color="orange.500">{playerContext.savedBestWeapon.LongestDefeat.toFixed()}m</Text>
                        </Flex>
                        <Flex>
                            <Text p={4} fontSize='xl' as='b'>HeadShots: </Text>
                                <Spacer />
                            <Text p={4} fontSize='xl' as='b' color="orange.500">{playerContext.savedBestWeapon.HeadShots}</Text>
                        </Flex>
                        <Flex>
                            <Text p={4} fontSize='xl' as='b'>Most kill in a game: </Text>
                                <Spacer />
                            <Text p={4} fontSize='xl' as='b' color="orange.500">{playerContext.savedBestWeapon.MostKillsInAGame}</Text>
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
    else if (playerContext.weaponMastery === 429) {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading color='red' size='xl' mt={3} mb={5}>429 Too many request 10 req/min</Heading>
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
    else if (!playerContext.weaponMastery || !playerContext.playerName) {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Center>
                        <Heading color='red' size='md' mt={3} mb={5}>No Data found please go to Home Page</Heading>
                    </Center>
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
        console.log(playerContext.playerName);
        !playerContext.weaponMastery ? console.log("false") : console.log("true");
        console.log(playerContext.weaponMastery.length);
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Center>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='#F0F0F0'
                            color='orange'
                            size='xl'
                            m={10}
                        />
                    </Center>
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
}

export default Weapon_mastery;