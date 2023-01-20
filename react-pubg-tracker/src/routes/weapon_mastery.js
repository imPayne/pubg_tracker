import { useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Link, Center, Flex, Input, Button, Heading, Box, Container, Text, SliderProvider, Image } from '@chakra-ui/react'
import API from "../API/pubgApiRequest";

function Weapon_mastery() {
    const navigate = useNavigate();
    const playerContext = useContext(PlayerContext);
    if (!playerContext.weaponMastery) {
        API.getPlayerMasteryWeapon("steam", playerContext.playerName).then((data) => {
            playerContext.setWeaponMastery(data);
            console.log(data);
        });
    }
    if (playerContext.WeaponMastery && playerContext.playerName) {
        console.log(playerContext.WeaponMastery);
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>{playerContext.playerName}</Heading>
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
    else {
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>Datas Loading...</Heading>
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