import { Link } from "react-router-dom";
import { PlayerContext } from '../context/playerContext';
import { useContext, useState } from 'react'

const InputPlayerName = () => {
    const playerContext = useContext(PlayerContext);

    return (
    <><h1>Pubg tracker</h1><form id='playerName_form' onSubmit={(e) => {
            e.preventDefault();
        } }></form><input
                id='playerName_input'
                type="text"
                placeholder="Search..."
                value={playerContext.playerName}
                onChange={(e) => playerContext.setPlayerName(e.target.value)} />
                <button type="submit" className="btn">OK</button></>
    );
}

export default InputPlayerName