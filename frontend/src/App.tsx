import { Navigate, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/main/MainPage";
import { GamePage } from "./pages/game/GamePage";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/game/:id"} element={<GamePage />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}

export default App;
