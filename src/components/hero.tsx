import { Button } from '@/components/ui/button'
import { MovingArrows } from './ui/moving-arrows'
// import { MovingArrows } from '@/components/ui/moving-arrows'

export function Hero() {
  return (
    <div className="pt-4 pb-16 px-4 text-left">
      <MovingArrows />

      <h1 className="text-3xl lg:text-7xl font-tiny ">
        GILGAL HOUSE {' '}
        <span className=" text-blue-500">MEDIA</span>
      </h1>
      <p className="text-lg text-muted-foreground">CHANNEL FOR GODS POWER!!!</p>
      <p className="text-xs mb-8 text-muted-foreground">*OFFICIAL WEBSITE OF LANDMARK UNIVERSITY&apos;S MEDIA TEAM</p>
      <div className="flex gap-4 justify-center flex-col">
        <Button variant="sci" size="lg" className='md:hidden flex-grow'>
          WATCH LIVESTREAM
        </Button>
        <div className='flex justify-between gap-4 '>
          <Button variant="sci" size="lg" className='w-full'>
            MEET THE TEAM
          </Button>
          <Button variant="sci" size="lg" className="bg-blue-500 hover:bg-blue-600 w-full font-medium text-white">
            BECOME A MEMBER
          </Button>
        </div>
      </div>
    </div>
  )
}

