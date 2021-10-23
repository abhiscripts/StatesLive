import axios from "axios";
import { useEffect, useState } from "react";
import { PokeComponent } from "./PokeComponent";
import "./styles.css";
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
export default function App() {
  const [pokeList, setPokeList] = useState({ results: [] });
  useEffect(() => {
    axios.get(URL).then((response) => {
      setPokeList(response.data);
    });
  }, []);
  // fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
  // .then((response) => response.json())
  // .then((data) => {
  //   setPokeList(data);
  // });

  return (
    <div className="App">
      {pokeList.results.length && <PokeComponent pokeList={pokeList} />}
    </div>
  );
}
