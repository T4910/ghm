import Image from 'next/image'

export function SubUnits() {
  const units = [
    {
      id: 1,
      name: 'VISUAL TEAM',
      image: '/placeholder.svg'
    },
    // Add more units as needed
  ]

  return (
    <section className="py-16 px-4">
      <div className="space-y-8">
        <div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl mb-8">OUR<br />SUB UNITS</h2>
          <p className="text-sm text-gray-400">
            GILGAL HOUSE MEDIA IS BROKEN DOWN INTO VARIOUS SUB-UNITS WHICH INCLUDE THE FOLLOWING
          </p>
        </div>
        <div className="space-y-12">
          {units.map((unit) => (
            <div key={unit.id} className="space-y-4">
              <div className="text-sm text-gray-400">/{unit.id}</div>
              <h3 className="text-2xl">{unit.name}</h3>
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

