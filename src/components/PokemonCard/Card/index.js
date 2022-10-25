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
        className="flex flex-col capitalize rounded-[8px] mb-[16px] pb-[16px] bg-[#eef3f6]"
      >
        <div>
          <div className="w-full px-[15px] py-[10px] flex space-between items-center capitalize rounded-[5px] mb-[15px] bg-[#292929]">
            <div className="w-full">
              <h2 className="text-[1.2rem] text-white ">{info.name} </h2>
            </div>

            <div className="flex">
              {info.pokemon_v2_pokemontypes.map(({ pokemon_v2_type: type }) => (
                <span
                  className="capitalize mx-[6px] py-[2px] rounded-[25px] text-[.9rem]"
                  key={type.name}
                >
                  {filterType(type.name)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <PokemonImage
            name={info.name}
            images={info.pokemon_v2_pokemonsprites[0].sprites}
          />
        </div>
      </div>
    </div>
  )
}
