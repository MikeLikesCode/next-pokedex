export const searchPokemonByName = (pokemonList, currentQuery) => {
  return pokemonList.filter((pokemon) => {
    if (pokemon.name.toLowerCase().includes(currentQuery)) {
      return pokemon
    }
  })
}
