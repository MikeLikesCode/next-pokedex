import { useState } from 'react'
import styles from './pokemontable.module.css'
import { filterType, orderBy, filterBy } from './Filters/index'
import { useRouter } from 'next/router'

export default function PokemonTable({ data }) {
  const router = useRouter()
  const [order, setOrder] = useState('A-Z')
  const [filter, setFilter] = useState('none')

  const changeDirection = (e) => {
    setOrder(e.target.value)
  }

  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  const orderedPokemon = orderBy(data, 'name', order)
  const filteredPokemon = filterBy(orderedPokemon, filter)

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
              <option value="none">All</option>
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
        </div>
        <div className={styles.column}>
          {filteredPokemon.map((info) => (
            <div
              onClick={() => {
                router.push(`/pokemon/${info.pokemon_species_id}`)
              }}
              key={info.name}
              className={styles.item}
            >
              <div className={styles.itemTop}>
                <div className={styles.name}>{info.name} </div>
                <div className={styles.types}>
                  {info.pokemon_v2_pokemontypes.map(({ pokemon_v2_type: type }) =>
                    filterType(type.name)
                  )}
                </div>
              </div>

              <div className={styles.sprites}>
                <img
                  src={
                    JSON.parse(info.pokemon_v2_pokemonsprites[0].sprites)
                      .front_default
                  }
                  alt={info.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
