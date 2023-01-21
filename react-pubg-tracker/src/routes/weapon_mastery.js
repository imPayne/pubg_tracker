import { useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Link, Center, Flex, Input, Button, Heading, Box, Container, Text, SliderProvider, Image, Spinner } from '@chakra-ui/react'
import API from "../API/pubgApiRequest";

function Weapon_mastery() {
    const navigate = useNavigate();
    const playerContext = useContext(PlayerContext);
    if (playerContext.weaponMastery.length == 0 || !playerContext.weaponMastery) {
        API.getPlayerMasteryWeapon("steam", playerContext.playerName).then((data) => {
            playerContext.setWeaponMastery(data);
            console.log(data);
        });
    }
    if (playerContext.weaponMastery.data && playerContext.playerName) {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>Weapon Mastery of {playerContext.playerName}</Heading>
                    {/* <Box>
                        <Heading size="md" mt={3} mb={3}>{playerContext.weaponMastery.data.attributes.weaponSummaries.}</Heading>
                    </Box> */}

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
        console.log(playerContext.weaponMastery)
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