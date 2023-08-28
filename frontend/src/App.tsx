import "@/src/App.scss";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchGames } from "./store/games";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
