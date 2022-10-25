export const filterBy = (pokemon, value) => {
  var active = value;
  let filteredPokemon = null;

  if (active !== "none") {
    filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.pokemon_v2_pokemontypes.some(({ pokemon_v2_type: type }) => {
        return active.includes(type.name)
      })
    });
  } else {
    filteredPokemon = pokemon;
  }

  return filteredPokemon;
};

export const orderBy = (pokemon, value, direction) => {
  if (direction === "A-Z") {
    return [...pokemon].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "Z-A") {
    return [...pokemon].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return pokemon;
};

export const filterType = (type) => {
  switch (type) {
    case "fairy":
      return <div key={type} className="bg-[#dea5de] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "steel":
      return <div key={type} className="bg-[#b8b8d0] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "dark":
      return <div key={type} className="bg-[#705848] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "dragon":
      return <div key={type} className="bg-[#7038f8] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "ghost":
      return <div key={type} className="bg-[#705898] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "rock":
      return <div key={type} className="bg-[#b8a038] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "bug":
      return <div key={type} className="bg-[#b8a038] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "psychic":
      return <div key={type} className="bg-[#f85888] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "flying":
      return <div key={type} className="bg-[#a890f0] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "ground":
      return <div key={type} className="bg-[#e0c068] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "poison":
      return <div key={type} className="bg-[#a040a0] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "fighting":
      return <div key={type} className="bg-[#c03028] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "ice":
      return <div key={type} className="bg-[#98d8d8] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "grass":
      return <div key={type} className="bg-[#78c850] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "electric":
      return <div key={type} className="bg-[#f8d030] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "water":
      return <div key={type} className="bg-[#6890f0] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "fire":
      return <div key={type} className="bg-[#f08030] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    case "normal":
      return <div key={type} className="bg-[#a8a878] py-[2px] px-[10px] rounded-[25px]">{type}</div>;
    default:
      return <div></div>;
  }
};
