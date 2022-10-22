import styles from "./filters.module.css";

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
      return <div key={type} className={styles.fairy}>{type}</div>;
    case "steel":
      return <div key={type} className={styles.steel}>{type}</div>;
    case "dark":
      return <div key={type} className={styles.dark}>{type}</div>;
    case "dragon":
      return <div key={type} className={styles.dragon}>{type}</div>;
    case "ghost":
      return <div key={type} className={styles.ghost}>{type}</div>;
    case "rock":
      return <div key={type} className={styles.rock}>{type}</div>;
    case "bug":
      return <div key={type} className={styles.bug}>{type}</div>;
    case "psychic":
      return <div key={type} className={styles.psychic}>{type}</div>;
    case "flying":
      return <div key={type} className={styles.flying}>{type}</div>;
    case "ground":
      return <div key={type} className={styles.ground}>{type}</div>;
    case "poison":
      return <div key={type} className={styles.poison}>{type}</div>;
    case "fighting":
      return <div key={type} className={styles.fighting}>{type}</div>;
    case "ice":
      return <div key={type} className={styles.ice}>{type}</div>;
    case "grass":
      return <div key={type} className={styles.grass}>{type}</div>;
    case "electric":
      return <div key={type} className={styles.electric}>{type}</div>;
    case "water":
      return <div key={type} className={styles.water}>{type}</div>;
    case "fire":
      return <div key={type} className={styles.fire}>{type}</div>;
    case "normal":
      return <div key={type} className={styles.normal}>{type}</div>;
    default:
      return <div></div>;
  }
};
