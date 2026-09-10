import React from 'react';
import type { Iplayer } from '../../type/playerType';
import { FaTrashAlt } from 'react-icons/fa';

interface SelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  handleUpdateButtonType: (type: "available" | "selected") => void;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, handleUpdateButtonType }: SelectedPlayersProps) => {

  const handleDeletePlayer = (player: Iplayer) => {
    const remainingPlayers = selectedPlayers.filter(p => p.PlayerName !== player.PlayerName);
    setSelectedPlayers(remainingPlayers);
    setCoin(prevCoin => prevCoin + player.price);

    alert(`${player.PlayerName} removed & $${player.price} refunded!`);
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-xl font-medium">No players selected yet!</p>
        </div>
      ) : (
        selectedPlayers.map((player: Iplayer, index: number) => (
          <div 
            key={index} 
            className="flex items-center justify-between border border-gray-200 rounded-2xl p-4 bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img 
                src={player.PlayerImg} 
                alt={player.PlayerName} 
                className="w-16 h-16 object-cover rounded-xl bg-gray-200"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{player.PlayerName}</h3>
                <p className="text-sm text-gray-500">{player.BattingStyle || player.playerType}</p>
                <p className="text-xs text-gray-400">Price: ${player.price}</p>
              </div>
            </div>

            <button 
              onClick={() => handleDeletePlayer(player)}
              className="text-red-500 hover:text-red-700 p-2 cursor-pointer"
            >
              <FaTrashAlt size={18} />
            </button>
          </div>
        ))
      )}

      <div className="mt-4 mb-12">
        <button 
          onClick={() => handleUpdateButtonType("available")}
          className="btn bg-lime-400 hover:bg-lime-500 text-black font-semibold border-none px-6 py-2 rounded-xl"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;