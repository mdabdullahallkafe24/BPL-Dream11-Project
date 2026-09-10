import React from 'react';
import type { Iplayer } from '../../type/playerType';
import PlayersCard from './PlayersCard';

interface AvailablePlayersProps {
  players: Iplayer[];
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) => {
  console.log(players, 'players from available players');

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {players.map((player: Iplayer, index: number) => (
        <PlayersCard 
          key={index} 
          player={player} 
          coin={coin} 
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;

