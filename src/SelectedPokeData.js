export const SelectedPokeData = (props) => {
  return (
    <div>
      <h1>{props.pokeData.name}</h1>
      {renderAbilities(props.pokeData.abilities)}
    </div>
  );
};

let renderAbilities = (abilities) => {
  let abilityData = abilities.map((ability) => {
    let able = ability.ability.name;
    return <div key={able}>{able}</div>;
  });
  return abilityData;
};
