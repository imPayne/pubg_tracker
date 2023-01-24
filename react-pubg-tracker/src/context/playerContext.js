import { createContext, useState } from 'react';

export const PlayerContext = createContext(null);

export function PlayerProvider ({children}) {
    const [rankedStats, setRankedStats] = useState([]);
    const [weaponMastery, setWeaponMastery] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [savedBestWeapon, setSavedBestWeapon] = useState([]);
    return (
        <PlayerContext.Provider value={{
            savedBestWeapon,
            setSavedBestWeapon,
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