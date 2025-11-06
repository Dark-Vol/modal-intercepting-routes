import PhotoDisplay from "./PhotoDisplay"
import fallbackData from "../../../../data/images.json"

export type PhotoData = {
  id: number
  title: string
  path: string
}

type ImagesResponse = {
  images: PhotoData[]
}

type Props = {
  params: Promise<{
    photoId: string
  }>
}

export default async function Photo({ params }: Props) {
  const { photoId } = await params
  const { images = [] } = fallbackData as ImagesResponse
  const photoData = images.find((image) => image.id === Number(photoId))

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>
  }

  return (
    <div className="
      mt-2 
      grid 
      place-content-center
    ">
      <PhotoDisplay photoData={photoData} />
    </div>
  )
}