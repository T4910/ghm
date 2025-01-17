import Image from 'next/image'

export function FeaturedPhotos() {
  return (
    <section className="py-16 px-4">
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl tracking-tighter text-gray-400  font-extrabold">THIS WEEKS</h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl  tracking-tighter mb-8 font-extrabold">FEATURED PHOTOS</h1>
          <p className="text-sm text-center text-gray-400">
            THESE ARE GILGAL HOUSE MEDIA FEATURED PHOTOS 20/02/2024
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/placeholder.svg"
            alt="Featured photo of a person from behind"
            width={600}
            height={400}
            className="w-full aspect-video object-cover"
          />
          <Image
            src="/placeholder.svg"
            alt="Featured photo"
            width={600}
            height={400}
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>
    </section>
  )
}

