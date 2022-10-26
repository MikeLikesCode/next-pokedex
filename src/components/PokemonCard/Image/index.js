import Image from "next/image";

export default function PokemonImage({ images, name }) {

  const parsedImages = JSON.parse(images)
  let default_image = parsedImages.front_default;

  if (!default_image) {
    default_image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  }

  return (
    <div>
      <Image
        width={95}
        height={95}
        src={
          default_image
        }
        alt={name}
      />
    </div>
  )
}
