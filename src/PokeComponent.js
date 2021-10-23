import axios from "axios";
import { useState } from "react";
import { SelectedPokeData } from "./SelectedPokeData";
import "./styles.css";

export const PokeComponent = (props) => {
  const [pokeData, setPokeData] = useState({ game_indices: [] });
  let handlePokeChoice = async (url) => {
    await axios.get(url).then((response) => {
      setPokeData(response.data);
    });
  };
  let pokeNames = props.pokeList.results.map((poke) => {
    return (
      <div key={poke.name}>
        <button
          className="pokeButton"
          onClick={(e) => handlePokeChoice(poke.url)}
        >
          {poke.name}
        </button>
      </div>
    );
  });

  return (
    <div>
      {pokeData.game_indices.length ? (
        <SelectedPokeData pokeData={pokeData} />
      ) : null}
      <div className="App">{pokeNames}</div>
    </div>
  );
};
