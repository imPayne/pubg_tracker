import { useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Link, Center, Flex, Input, Button, Heading, Box, Container, Text, SliderProvider, Image, Spinner } from '@chakra-ui/react'
import API from "../API/pubgApiRequest";

function Weapon_mastery() {
    const navigate = useNavigate();
    const playerContext = useContext(PlayerContext);
    let top3Weapons = []
    if (playerContext.weaponMastery.length === 0 && playerContext.weaponMastery !== 429 && playerContext.rankedStats && playerContext.rankedStats.data) {
        API.getPlayerMasteryWeapon(playerContext.rankedStats.data.relationships.player.data.id, "steam", playerContext.playerName).then((data) => {
            playerContext.setWeaponMastery(data);
        });
    }
    if (playerContext.weaponMastery.data && playerContext.playerName && playerContext.weaponMastery !== 429) {
        if (playerContext.weaponMastery.data.attributes) {
            let keysWeapon = Object.keys(playerContext.weaponMastery.data.attributes.weaponSummaries);
            let maxKill = 0;
            let topWeapon = "";
            while (top3Weapons.length < 3) {
                for (let elem of keysWeapon) {
                    if (playerContext.weaponMastery.data.attributes.weaponSummaries[elem].StatsTotal.Kills > maxKill && elem != topWeapon) {
                        if (!top3Weapons[top3Weapons.length - 1] || (top3Weapons[top3Weapons.length - 1].name && top3Weapons[top3Weapons.length - 1].name != elem)) {
                        maxKill = playerContext.weaponMastery.data.attributes.weaponSummaries[elem].StatsTotal.Kills;
                        topWeapon = elem;
                        }
                    }
                }
                let index = keysWeapon.indexOf(topWeapon);
                keysWeapon.splice(index, 1);
                playerContext.weaponMastery.data.attributes.weaponSummaries[topWeapon].StatsTotal.name = topWeapon;
                top3Weapons.push(playerContext.weaponMastery.data.attributes.weaponSummaries[topWeapon].StatsTotal);        
            }
            console.log(top3Weapons);
        }
        return (
            <Container mt={25}>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>Weapon Mastery of {playerContext.playerName}</Heading>
                    
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