export const PokeComponent = (props) => {
  let pokeNames = props.pokeList.results.map((poke) => {
    return (
      <div key={poke.name}>
        <h1>{poke.name}</h1>
      </div>
    );
  });
  return pokeNames;
};
