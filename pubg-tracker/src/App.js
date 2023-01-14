import './App.css';
import { PlayerProvider } from './context/playerContext';
import InputPlayerName from './components/inputPlayerName';

function App() {
    return (
        <PlayerProvider>
            <InputPlayerName />
        </PlayerProvider>
    );
    
}

export default App;

