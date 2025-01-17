import Image from 'next/image'

export function SubUnits() {
  const units = [
    {
      id: 1,
      name: 'VISUAL TEAM',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'AUDIO TEAM',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'GRAPHICS TEAM',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'LIGHT TEAM',
      image: '/placeholder.svg'
    },
    // Add more units as needed
  ]

  return (
    <section className="py-16 px-4">
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 font-bold tracking-tight">OUR<br />SUB UNITS</h2>
          <p className=" text-gray-400">
            GILGAL HOUSE MEDIA IS BROKEN DOWN INTO VARIOUS SUB-UNITS WHICH INCLUDE THE FOLLOWING
          </p>
        </div>
        <div className="space-y-12">
          {units.map((unit) => (
            <div key={unit.id} className="space-y-4 border-t">
              <div className="text-xl align-middle text-gray-400 inline-block mr-5">{'//'}{unit.id}</div>
              <h3 className="text-4xl font-bold inline-block">{unit.name}</h3>
              <Image
                src={unit.image}
                alt={unit.name}
                width={800}
                height={400}
                className="w-full aspect-video object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

