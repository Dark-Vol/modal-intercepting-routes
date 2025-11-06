import PhotoDisplay from "@/app/photo/[photoId]/PhotoDisplay"
import type { PhotoData } from "@/app/photo/[photoId]/page"
import fallbackData from "../../../../../data/images.json"
import { Modal } from "@/components/Modal"

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
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  )
}