import { createContext, useState } from 'react';

export const PlayerContext = createContext(null);

export function PlayerProvider ({children}) {
    const [rankedStats, setRankedStats] = useState([]);
    const [weaponMastery, setWeaponMastery] = useState([]);
    const [playerName, setPlayerName] = useState("");
    return (
        <PlayerContext.Provider value={{
            rankedStats,
            setRankedStats,
            playerName,
            setPlayerName,
            weaponMastery,
            setWeaponMastery
        }}>
            {children}
        </PlayerContext.Provider>
    );
}