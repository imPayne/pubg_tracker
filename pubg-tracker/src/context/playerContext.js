import { createContext, useState } from 'react';

export const PlayerContext = createContext(null);

export function PlayerProvider ({children}) {
    const [playerName, setPlayerName] = useState("");
    return (
        <PlayerContext.Provider value={{
            playerName,
            setPlayerName
        }}>
            {children}
        </PlayerContext.Provider>
    );
}