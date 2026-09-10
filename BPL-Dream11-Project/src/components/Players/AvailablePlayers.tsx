import PlayersCard from "./PlayersCard";
import type { Iplayer } from "../../type/playerType";

interface AvailablePlayersProps {
  playersData: Iplayer[];
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({
  playersData,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {playersData.map((player) => (
        <PlayersCard
          key={player.PlayerName}
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

