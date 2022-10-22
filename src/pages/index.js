import Header from '../components/Header/header'
import PokemonTable from '../components/PokemonTable/PokemonTable'
import styles from '../styles/Home.module.css'
import { gql } from '@apollo/client'
import client from '../providers/ApolloClient'
import { useState } from 'react'
import { searchPokemonByName } from '../utils/filterUtils'

const Main = ({ pokemon }) => {
  let { pokemon_v2_pokemon: currentPokemon } = pokemon

  const [query, setQuery] = useState("");

  const searchPokemon = (e) => {
    setQuery(e)
  }

  currentPokemon = searchPokemonByName(currentPokemon, query)

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Header title="Next.js Pokidex" />
        <div className={styles.content}>
          <div className={styles.headline}>
            Search up Pokémon from your favorite generation
          </div>
          <form>
            <input
              onChange={(e) => {
                searchPokemon(e.target.value.toLowerCase())
              }}
              placeholder="Search up a specific pokemon name"
            />
          </form>

          <p>Check out all Pokémon with filters down below</p>
          <div className={styles.arrowDown}>
            {/* <FontAwesomeIcon icon={faArrowCircleDown} /> */}
          </div>
        </div>
      </div>

      <PokemonTable data={currentPokemon} />
    </div>
  )
}

export default Main

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query fetchAllPokemonNamesAndSprites {
        pokemon_v2_pokemon{
          name
          base_experience
          height
          is_default
          order
          pokemon_species_id
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
            name
          }
        }
      }
    }
    `,
  })

  return {
    props: {
      pokemon: data,
    },
  }
}

