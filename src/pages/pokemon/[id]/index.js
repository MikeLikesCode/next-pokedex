import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import PokemonImage from '../../../components/PokemonCard/Image'
import client from '../../../providers/ApolloClient'

export default function PokemonInfo({ data: pokemon }) {
  const router = useRouter()
  const id = router.query.id



  return (
    <div className='flex flex-col items-center py-10'>
      <h1 className='capitalize text-4xl'>{pokemon.name} <span className='text-gray-400'>#{id}</span></h1>
      <PokemonImage width={200} height={200} name={pokemon.name} images={pokemon.pokemon_v2_pokemonsprites[0].sprites} />

      <p>Pokemon Height: {pokemon.height}</p>
      <p>Pokemon Base Experience: {pokemon.base_experience}</p>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: gql`
    {
      pokemon_v2_pokemon_by_pk(id: ${ctx.params.id})
      {
        name
        base_experience
        height
         pokemon_v2_pokemonsprites {
      sprites
    }
      }
    }

  `,
  })


  return {
    props: {
      data: data.pokemon_v2_pokemon_by_pk
    },
  }
}
