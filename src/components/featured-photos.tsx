import CornerWrapper from '@/components/coner-wrapper'
import Image from 'next/image'

export function FeaturedPhotos() {
  const pictures = [
    {
      title: 'Title',
      image: '/placeholder.png',
      alt: 'soemthing about the picture',
      date: 'Apr 18, 2024'
    },
    {
      title: 'Title',
      image: '/placeholder.png',
      alt: 'soemthing about the picture',
      date: 'Apr 18, 2024'
    },
    {
      title: 'Title',
      image: '/placeholder.png',
      alt: 'soemthing about the picture',
      date: 'Apr 18, 2024'
    },
    {
      title: 'Title',
      image: '/placeholder.png',
      alt: 'soemthing about the picture',
      date: 'Apr 18, 2024'
    },
    
  ]


  return (
    <section className="py-16 px-4">
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl tracking-tighter text-gray-400  font-bold">THIS WEEKS</h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl  tracking-tighter mb-8 font-bold">FEATURED PHOTOS</h1>
          <p className="text-sm text-center text-gray-400">
            THESE ARE GILGAL HOUSE MEDIA FEATURED PHOTOS 20/02/2024
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {
            pictures.map((pic, index) => (
              <div className="flex flex-col w-full" key={index}>
                <CornerWrapper>
                  <Image
                    src={pic.image}
                    alt={pic.alt}
                    width={600}
                    height={450}
                    className="w-full aspect-video object-cover"  
                  />
                </CornerWrapper>
                <div className="flex justify-between mt-5 -tracking-tight text-sm">
                  <p className='font-medium'>{pic.title}</p>
                  <p className='text-muted-foreground'>{pic.date}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

