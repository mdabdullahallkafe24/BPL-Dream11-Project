import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import type { Iplayer } from "../../type/playerType";

interface PlayersProps {
  playerPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const Players = ({ playerPromise, coin, setCoin }: PlayersProps) => {
  const playersData = use(playerPromise);
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);
  const [activeTab, setActiveTab] = useState<"available" | "selected">("available");

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {activeTab === "available"
            ? `Available Players`
            : `Selected Player (${selectedPlayers.length}/6)`}
        </h2>

        <div className="flex rounded-xl border border-gray-200 p-1 bg-gray-50 self-end sm:self-auto">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === "available"
                ? "bg-amber-400 text-black shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab("selected")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === "selected"
                ? "bg-amber-400 text-black shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {activeTab === "available" ? (
        <AvailablePlayers
          playersData={playersData}
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
          handleUpdateButtonType={setActiveTab}
        />
      )}
    </div>
  );
};

export default Players;