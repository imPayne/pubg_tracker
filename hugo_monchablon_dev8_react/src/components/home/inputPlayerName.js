import { Link, useNavigate } from "react-router-dom";
import { PlayerContext } from '../../context/playerContext';
import { useContext, useState } from 'react'
import { Input, Button, Heading, Box, Container } from '@chakra-ui/react'

const InputPlayerName = (navigate) => {
    const playerContext = useContext(PlayerContext);
    return (
        <>
        <Container mt={25}>
            <Heading>Pubg tracker</Heading>
            <form id='playerName_form' onSubmit={(e) => {
                e.preventDefault();
                navigate('/');
            }}></form>
            <Input mt={10} focusBorderColor = "orange.500" htmlSize={25} width='auto' id="playerName_input" placeholder="Search Player..." value={playerContext.playerName} onChange={(e) => playerContext.setPlayerName(e.target.value)} />
            <Button mt={-1.5} colorScheme='orange' size='md' type="submit">OK</Button>
        </Container>
    </>
    );
}

export default InputPlayerName