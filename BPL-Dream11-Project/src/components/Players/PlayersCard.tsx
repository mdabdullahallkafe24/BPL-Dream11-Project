import type { Iplayer } from '../../type/playerType';
import { FaUser } from 'react-icons/fa';

interface PlayersCardProps {
  player: Iplayer;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}

const PlayersCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayersCardProps) => {

  const isSelected = selectedPlayers.some(p => p.PlayerName === player.PlayerName);

  const handleSelectPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isSelected) {
      alert("Player already selected!");
      return;
    }

    if (selectedPlayers.length >= 6) {
      alert("You cannot select more than 6 players!");
      return;
    }

    if (coin < player.price) {
      alert("Not enough coins to buy this player!");
      return;
    }

    setSelectedPlayers(prev => [...prev, player]);
    setCoin(prevCoin => prevCoin - player.price);
    
    alert(`Congratulations! You have purchased ${player.PlayerName}.`);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden h-full p-4">
      
      <div className="w-full h-60 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-4 border border-gray-100">
        <img
          src={player.PlayerImg}
          alt={player.PlayerName} 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-between grow">
        <div>
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-3">
            <FaUser size={16} /> {player.PlayerName}
          </h2>

          <div className="space-y-1.5 text-sm text-gray-600">
            <p className="flex justify-between">
              <span className="font-medium text-gray-500">Origin:</span> 
              <span>{player.origin}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-500">Player Type:</span> 
              <span>{player.playerType}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-500">Bowling Style:</span> 
              <span>{player.BowlingStyle}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-500">Batting Style:</span> 
              <span>{player.BattingStyle}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium text-gray-500">Price:</span> 
              <span className="font-bold text-gray-900">${player.price}</span>
            </p>
          </div>
        </div>

        <div>
          <div className="border-t border-gray-100 my-3"></div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Rating: {player.rating}</span>
            <button 
              onClick={(e) => handleSelectPlayer(e)}
              disabled={isSelected}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-colors ${
                isSelected 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSelected ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PlayersCard;