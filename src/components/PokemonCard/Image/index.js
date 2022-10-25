export default function PokemonImage({ images, name }) {
  return (
    <div>
      <img
        src={
          JSON.parse(images)
            .front_default
        }
        alt={name}
      />
    </div>
  )
}
