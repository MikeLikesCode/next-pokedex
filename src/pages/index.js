import Header from "../components/Header/header";
import PokemonTable from "../components/PokemonTable/pokemontable";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import cacheData from 'memory-cache'

export default function Home({ data }) { 

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
              <input placeholder="Search up a specific pokemon name" />
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>

            <p>Check out all Pokémon with filters down below</p>
            <div className={styles.arrowDown}>
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </div>
          </div>
        </div>
      </div>
      
      <PokemonTable data={data} />

      <div className={styles.button}>
          Load More
      </div>
    
    </>
  );
}

export const getStaticProps = async () => {

  let data = null;
  data = cacheData.get("https://pokeapi.co/api/v2/pokemon?limit=1050");
  if (data){
    data = data
  }
  else{
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
