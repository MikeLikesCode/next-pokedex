export default function PokemonImage({ images, name }) {

  const parsedImages = JSON.parse(images)
  let default_image = parsedImages.front_default;

  // Add some handling to check if the pokemon is male or female and find images for that

  // This also applies for GMAX or any other variant versions of pokemon ("Starter", "World-Cap")


  return (
    <div>
      <img
        className="w-[96px]"
        src={
          default_image
        }
        alt={name}
      />
    </div>
  )
}
