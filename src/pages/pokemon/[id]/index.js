import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import client from '../../../providers/ApolloClient'

export default function PokemonInfo({ data: pokemon }) {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Pokemon ID {id}</h1>
      <p>Pokemon Name: {pokemon.name}</p>
      <p>Pokemon Height: {pokemon.height}</p>
      <p>Pokemon Base Experience: {pokemon.base_experience}</p>
      <p>Default Pokemon? {pokemon.is_default ? "true" : "false"}</p>
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
        is_default
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
