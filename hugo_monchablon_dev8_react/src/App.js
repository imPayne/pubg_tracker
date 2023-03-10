import './App.css';
import { useNavigate } from "react-router-dom";
import { PlayerContext } from './context/playerContext';
import { useContext } from 'react'
import { Input, Button, Heading, Box, Container, Center } from '@chakra-ui/react'
import API from "./API/pubgApiRequest";

function App() {
    const navigate = useNavigate();
    const playerContext = useContext(PlayerContext);
    return (
    <Container mt={25}>
        <Box mt={40} p={5} borderRadius={7} backgroundColor='#F0F0F0'>
            <Center>
                <Heading>Pubg tracker</Heading>
            </Center>
            <form id='playerName_form' onSubmit={(e) => {
                e.preventDefault();
                playerContext.setRankedStats([]);
                API.getPlayerRankedData('steam', playerContext.playerName).then((data) => {
                    playerContext.setRankedStats(data);
                });
                navigate(`/user/${playerContext.playerName}`);
            }}>
                <Box p={4}>
                    <Input mt={16} mb={4} backgroundColor="white" focusBorderColor = "orange.500" width='auto' id="playerName_input" placeholder="Search Player..." value={playerContext.playerName} onChange={(e) => playerContext.setPlayerName(e.target.value)} />
                    <Button mt={-1.5} colorScheme='orange' size='md' type="submit">OK</Button>
                </Box>
            </form>
        </Box>
    </Container>
    );
}

export default App;