import { useNavigate } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState, useEffect } from 'react'
import { Link, Center, Flex, Input, Button, Heading, Box, Container, Text, SliderProvider, Image } from '@chakra-ui/react'
import API from "../API/pubgApiRequest";

function Weapon_mastery() {
    const playerContext = useContext(PlayerContext);
    API.getPlayerMasteryWeapon("steam", playerContext.playerName).then((data) => {
        playerContext.setWeaponMastery(data);
    });
    if (playerContext.WeaponMastery.data) {
        console.log(playerContext.WeaponMastery);
        return (
            <Container>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>{playerContext.playerName}</Heading>
                </Box>
            </Container>
        );
    }
    else {
        return (
            <Container>
                <Box mt={5} p={7} borderRadius={7} backgroundColor='#F0F0F0'>
                    <Heading size='xl' mt={3} mb={5}>Datas Loading...</Heading>
                </Box>
            </Container>
        );
    }
}

export default Weapon_mastery;