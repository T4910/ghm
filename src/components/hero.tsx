import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="py-16 px-4 text-center">
      <h1 className="text-2xl md:text-4xl lg:text-7xl mb-4 font-tiny ">
        GILGAL HOUSE {' '}
        <span className=" text-blue-500">MEDIA</span>
      </h1>
      <p className="text-sm md:text-base mb-8">CHANNEL FOR GODS POWER!!!</p>
      <p className="text-xs mb-8 text-gray-400">*OFFICIAL WEBSITE OF LANDMARK UNIVERSITY&apos;S MEDIA TEAM</p>
      <div className="flex gap-4 justify-center">
        <Button variant="outline" size="lg">
          MEET THE TEAM
        </Button>
        <Button variant="default" size="lg" className="bg-blue-500 hover:bg-blue-600">
          BECOME A MEMBER
        </Button>
      </div>
    </div>
  )
}

