import Image from "next/image"
import Link from "next/link"
import type { PhotoData } from "./page"

type Props = {
  photoData: PhotoData
}

export default function PhotoDisplay({ photoData }: Props) {
  return (
    <article className="
      flex 
      flex-col 
      gap-4
    ">
      <h2 className="text-2xl font-semibold text-foreground">{photoData.title}</h2>

      <Link
        href={`/photo/${photoData.id}`}
        className="
          group 
          block 
          overflow-hidden 
          rounded-2xl 
          border 
          border-border
        ">
        <div className="
          relative 
          aspect-square
        ">
          <Image
            src={photoData.path}
            alt={photoData.title}
            fill
            sizes="
              (min-width: 1024px) 320px, 
              (min-width: 640px) 280px, 
              100vw
              "
            className="
              object-cover 
              transition-transform 
              duration-300 
              group-hover:scale-105
            "
            priority={photoData.id === 1}
          />
        </div>
      </Link>
    </article>
  )
}