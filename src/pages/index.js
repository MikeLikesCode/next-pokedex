import Header from "../components/Header/header";
import PokemonTable from "../components/PokemonTable/pokemontable";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import cacheData from 'memory-cache'
import { useEffect, useState } from 'react';

export default function Home({ data }) {

  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState("");

  const fetchPokemon = async (p) => {

    let pokemon = null;
    pokemon = cacheData.get(p.url);
    if (pokemon) {
      pokemon = pokemon
    }
    else {
      const hours = 24;
      const res = await fetch(p.url);
      pokemon = await res.json();
      cacheData.put(p.url, data, hours * 1000 * 60 * 60);
    }

    return pokemon;
  };

  const getPokemon = async () => {

    const pokemons = await Promise.all(
      data.results.map(async (url) => {
        return await fetchPokemon(url);
      })
    );

    if (pokemons) {
      setPokemon(await pokemons);
    }
    else {
      setPokemon([])
    }

  };

  useEffect(() => {
    getPokemon();
  }, []);

  const searchPokemon = (q) => {
    setQuery(q);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <Header title="Next.js Pokidex" />
          <div className={styles.content}>
            <div className={styles.headline}>
              Search up Pokémon from your favourite generation
            </div>
            <form>
              <input onChange={(e) => {
                searchPokemon(e.target.value.toLowerCase());
              }} placeholder="Search up a specific pokemon name" />
            </form>

            <p>Check out all Pokémon with filters down below</p>
            <div className={styles.arrowDown}>
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </div>
          </div>
        </div>
      </div>

      <PokemonTable data={pokemon.filter((pokemon) => {
              if (query == ""){
                return pokemon
              }
              else if (pokemon.name.toLowerCase().includes(query)) {
                return pokemon
              }
            })} />
    </>
  );
}

export const getStaticProps = async () => {

  let data = null;
  data = cacheData.get("https://pokeapi.co/api/v2/pokemon?limit=1050");
  if (data) {
    data = data
  }
  else {
    const hours = 24;
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1050');
    data = await res.json();
    cacheData.put('https://pokeapi.co/api/v2/pokemon?limit=1050', data, hours * 1000 * 60 * 60);
    data = data
  }

  return {
    props: {
      data,
    },
  };
};
