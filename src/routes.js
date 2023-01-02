import Inicio from "../src/pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "../src/pages/Favoritos";
import Player from "../src/pages/Player";
import NaoEncontrada from "../src/pages/NaoEnontrada";
import PaginaBase from "../src/pages/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />} >
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;