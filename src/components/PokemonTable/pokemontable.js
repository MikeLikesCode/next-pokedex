import { useEffect, useState } from "react";
import styles from "./pokemontable.module.css";
import { filterType } from "./Filters/filter";

const fetchPokemon = async (p) => {
  const res = await fetch(p.url);
  const pokemon = await res.json();

  return pokemon;
};

const orderBy = (pokemon, value, direction) => {
  if (direction === "A-Z") {
    return [...pokemon].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "Z-A") {
    return [...pokemon].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return pokemon;
};

const filterBy = (pokemon, value) => {
  var active = value;
  let filteredPokemon = null;

  if (active !== "none") {
    filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.types.some((type) => active.includes(type.type.name));
    });
  } else {
    filteredPokemon = pokemon;
  }

  console.log(filteredPokemon);
  return filteredPokemon;
};

export default function PokemonTable({ data }) {
  const [pokemon, setPokemon] = useState([]);
  const [order, setOrder] = useState("A-Z");
  const [filter, setFilter] = useState("none");

  const getPokemon = async () => {
    const p = await Promise.all(
      data.results.map(async (url) => {
        return await fetchPokemon(url);
      })
    );

    setPokemon(await p);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const changeDirection = (e) => {
    setOrder(e.target.value);
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const orderedPokemon = orderBy(pokemon, "name", order);
  const filteredPokemon = filterBy(orderedPokemon, filter);
  return (
    <div>
      <div className={styles.container}>
        <h1>Pokémon Database</h1>

        <div className={styles.heading}>
          <div className={styles.form}>
            <label htmlFor="order">Sort ({order})</label>
            <select
              className={styles.heading_name}
              onChange={changeDirection}
              id="order"
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className={styles.form}>
            <label htmlFor="type">Type</label>
            <select
              className={styles.heading_type}
              onChange={changeFilter}
              id="type"
            >
              <option value="none">Type</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="fairy">Fairy</option>
              <option value="steel">Steel</option>
              <option value="dark">Dark</option>
              <option value="dragon">Dragon</option>
              <option value="ghost">Ghost</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="psychic">Psychic</option>
              <option value="flying">Flying</option>
              <option value="ground">Ground</option>
              <option value="poison">Poison</option>
              <option value="fighting">Fighting</option>
              <option value="ice">Ice</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <div className={styles.form}>
            <label htmlFor="generation">Generation</label>
            <select className={styles.heading_generation} id="generation">
              <option value="type">Generation</option>
              <option value="legendary">Gen 1</option>
              <option value="mythical">Gen 2</option>
            </select>
          </div>
          <div className={styles.form}>
            <label htmlFor="rarity">Rarity</label>
            <select className={styles.heading_rarity} id="rarity">
              <option value="type">Rarity</option>
              <option value="legendary">Legendary</option>
              <option value="mythical">Mythical</option>
            </select>
          </div>
        </div>
        <div className={styles.column}>
          {filteredPokemon.map((info) => (
            <div key={info.name} className={styles.item}>
              <div className={styles.itemTop}>
                <div className={styles.name}>{info.name} </div>
                <div className={styles.types}>
                  {" "}
                  {info.types.map(({ type }) => filterType(type.name))}
                </div>
              </div>

              <div className={styles.sprites}>
                <img src={info.sprites.front_default} alt={info.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
