import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Explore from "./components/Explore";
import Pokemon from "./components/Pokemon";
import PlayerLogin from "./components/PlayersLogin";
import Homepage from "./components/Homepage";
import AppLayout from "./ui/AppLayout";
import PokedexHome from "./components/PokedexHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PlayerLogin />} />
          <Route path="pokedex" element={<Homepage />} />
          <Route path="pokedex/explore" element={<Explore />} />
          <Route path="pokedex/home" element={<PokedexHome />} />
          <Route path="pokedex/explore/:id" element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
