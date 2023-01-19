import { createContext, useState } from 'react';

export const PlayerContext = createContext(null);

export function PlayerProvider ({children}) {
    const [rankedStats, setRankedStats] = useState([]);
    const [playerName, setPlayerName] = useState("");
    return (
        <PlayerContext.Provider value={{
            rankedStats,
            setRankedStats,
            playerName,
            setPlayerName
        }}>
            {children}
        </PlayerContext.Provider>
    );
}