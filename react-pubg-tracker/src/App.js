import './App.css';
import { PlayerProvider } from './context/playerContext';
import InputPlayerName from './components/home/inputPlayerName';
import Leaderboard from './components/home/leaderboard';

function App() {
    return (
        <PlayerProvider>
            <InputPlayerName />
            <Leaderboard />
        </PlayerProvider>
    );
}

export default App;