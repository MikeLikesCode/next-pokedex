import Header from '../components/Header/header'
import PokemonTable from '../components/PokemonTable/PokemonTable'
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
    <div>
      <div className='px-20 py-10 flex flex-col items-center text-center bg-[#364156]'>
        <Header title="Next.js Pokidex" />
        <div>
          <h1 className='text-4xl text-white my-6'>
            Search up Pokémon from your favorite generation
          </h1>
          <form className='my-8' onSubmit={(e) => {
            e.preventDefault()
          }}>
            <input
              onChange={(e) => {
                searchPokemon(e.target.value.toLowerCase())
              }}
              placeholder="Search up a specific pokemon name"
            />
          </form>

          <p className='text-2xl text-white font-light'>Check out all Pokémon with filters down below</p>
          <div>
            {/* <FontAwesomeIcon icon={faArrowCircleDown} /> */}
          </div>
        </div>
      </div>

      <div className='py-10'>
        <PokemonTable data={currentPokemon} />
      </div>
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

