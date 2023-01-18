import { Link } from "react-router-dom";
import { PlayerContext } from '../../context/playerContext';
import { useContext, useState } from 'react'
import { Input, Button, Heading, Box, Container } from '@chakra-ui/react'

const InputPlayerName = () => {
    const playerContext = useContext(PlayerContext);
    return (
        <>
    <Container mt={25}>
        <Box
            bgImage="url('/images/pubg.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
        />
        <Heading>Pubg tracker</Heading>
        <form id='playerName_form' onSubmit={(e) => {
            e.preventDefault();
        }}></form>
        <Input mt={10} focusBorderColor = "orange.500" htmlSize={25} width='auto' id="playerName_input" placeholder="Search Player..." value={playerContext.playerName} onChange={(e) => playerContext.setPlayerName(e.target.value)} />
        <Button mt={-1.5} colorScheme='orange' size='md' type="submit">OK</Button>
    </Container>
    </>
    );
}

//input without chakra component =>
        /*{ <input
                id='playerName_input'
                type="text"
                placeholder="Search..."
                value={playerContext.playerName}
                onChange={(e) => playerContext.setPlayerName(e.target.value)} /> 
            <button type="submit" className="btn">OK</button>}*/

export default InputPlayerName