import PhotoDisplay from "./photo/[photoId]/PhotoDisplay"
import type { PhotoData } from "./photo/[photoId]/page"
import fallbackData from "../../data/images.json"
import AmericanoInfo from "@/components/AmericanoInfo"

type ImagesResponse = {
  images: PhotoData[]
}

export default function Home() {
  const { images = [] } = fallbackData as ImagesResponse

  if (!images?.length) {
    return <h1>No Images to Display</h1>
  }

  return (
    <main className="
      mx-auto 
      flex 
      w-full 
      max-w-6xl 
      flex-col 
      gap-8 
      px-4 
      pb-12 
      pt-10
    ">
      <header className="text-center">
        <h1 className="
          text-4xl 
          font-semibold
        ">Американо коллекция</h1>
        <p className="
          mt-2 
          text-muted-foreground
        ">
          Три варианта Americano, доступные для просмотра и в модальных окнах.
        </p>
      </header>

      <AmericanoInfo />

      <section className="
        grid 
        gap-10 
        sm:grid-cols-2 
        lg:grid-cols-3
      ">
        {images.map((photoData) => (
          <PhotoDisplay key={photoData.id} photoData={photoData} />
        ))}
      </section>
    </main>
  )
}
