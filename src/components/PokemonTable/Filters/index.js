import styles from "./filters.module.css";

export const filterBy = (pokemon, value) => {
  var active = value;
  let filteredPokemon = null;

  if (active !== "none") {
    filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.types.some((type) => active.includes(type.type.name));
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
      return <div className={styles.fairy}>{type}</div>;
    case "steel":
      return <div className={styles.steel}>{type}</div>;
    case "dark":
      return <div className={styles.dark}>{type}</div>;
    case "dragon":
      return <div className={styles.dragon}>{type}</div>;
    case "ghost":
      return <div className={styles.ghost}>{type}</div>;
    case "rock":
      return <div className={styles.rock}>{type}</div>;
    case "bug":
      return <div className={styles.bug}>{type}</div>;
    case "psychic":
      return <div className={styles.psychic}>{type}</div>;
    case "flying":
      return <div className={styles.flying}>{type}</div>;
    case "ground":
      return <div className={styles.ground}>{type}</div>;
    case "poison":
      return <div className={styles.poison}>{type}</div>;
    case "fighting":
      return <div className={styles.fighting}>{type}</div>;
    case "ice":
      return <div className={styles.ice}>{type}</div>;
    case "grass":
      return <div className={styles.grass}>{type}</div>;
    case "electric":
      return <div className={styles.electric}>{type}</div>;
    case "water":
      return <div className={styles.water}>{type}</div>;
    case "fire":
      return <div className={styles.fire}>{type}</div>;
    case "normal":
      return <div className={styles.normal}>{type}</div>;
    default:
      return <div></div>;
  }
};
