import Nav from "./components/nav";
import Banner from "./assets/Banner";
import Players from "./components/Players/players";
import Footer from "./components/Footer";
import { Suspense, useState } from "react";
import type { Iplayer } from "./type/playerType";

const playerFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const playerPromise = playerFetch();

function App() {
  const [coin, setCoin] = useState(5000);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Nav coin={coin} />
        <Banner />
        <Suspense fallback={<div className="text-center py-10">Loading players...</div>}>
          <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin} />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;