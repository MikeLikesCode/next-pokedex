import Image from "next/image";

export default function PokemonImage({ images, name, width = 95, height = 95 }) {

  const parsedImages = JSON.parse(images)
  let default_image = parsedImages.front_default;

  if (!default_image) {
    default_image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  }

  return (
    <div>
      <Image
        width={width}
        height={height}
        src={
          default_image
        }
        alt={name}
      />
    </div>
  )
}
