import { use, useState } from 'react';
import type { Iplayer } from "../../type/playerType";
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface playerprops {
  playerPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const Players = ({ playerPromise, coin, setCoin }: playerprops) => {
  console.log(playerPromise);
  const playerData = use(playerPromise);
  console.log(playerData);

  const [buttonType, setButtonType] = useState<"available" | "selected">("available"); //available or selected
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

  console.log(buttonType);

  const handleUpdateButtonType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className='font-bold text-xl'>
          {buttonType === "available" ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`}
        </h2>

        <div className="flex gap-3">
          <button 
            className={`btn ${buttonType === "available" ? "btn-success" : ""}`} 
            onClick={() => handleUpdateButtonType("available")}>
            Available
          </button>

          <button 
            className={`btn ${buttonType === "selected" ? "btn-warning" : ""}`} 
            onClick={() => handleUpdateButtonType("selected")}>
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div>
        {buttonType === "available" ? (
          <AvailablePlayers 
            players={playerData} 
            coin={coin} 
            setCoin={setCoin} 
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ) : (
          <SelectedPlayers 
            selectedPlayers={selectedPlayers} 
            setSelectedPlayers={setSelectedPlayers}
            setCoin={setCoin}
            handleUpdateButtonType={handleUpdateButtonType}
          />
        )}
      </div>
    </div>
  );
};

export default Players;