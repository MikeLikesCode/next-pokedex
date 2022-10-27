import { useRouter } from 'next/router'
import { filterType } from '../../PokemonTable/Filters'
import PokemonImage from '../Image'

export default function PokemonCard({ info }) {
  const router = useRouter()

  return (
    <div>
      <div
        onClick={() => {
          router.push(`/pokemon/${info.pokemon_species_id}`)
        }}
        key={info.pokemon_species_id}
        className="flex flex-col capitalize rounded-t-sm bg-[#eef3f6]"
      >
        <div className="flex justify-center">
          <PokemonImage
            name={info.name}
            images={info.pokemon_v2_pokemonsprites[0].sprites}
          />
        </div>
      </div>

      <div className='pt-2'>
        <div className="w-full px-[15px] py-[5px] flex space-between items-center capitalize rounded-b-lg">
          <div className="w-full">
            <span className='text-sm text-gray-600'>#{info.pokemon_species_id}</span>
            <h2 className="text-[1.2rem] text-black">{info.name} </h2>


            <div className="flex gap-x-2">
              {info.pokemon_v2_pokemontypes.map(({ pokemon_v2_type: type }) => (
                <div
                  className="capitalize rounded-[25px] text-[.9rem]"
                  key={info.name + type.name}
                >
                  {filterType(type.name)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
