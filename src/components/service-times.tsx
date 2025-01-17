import { InfiniteSlider } from "./ui/infinite-slider"

export function ServiceTimes() {
  const services = [
    { name: 'SUNDAY FIRST SERVICE', time: '7AM' },
    { name: 'SUNDAY SECOND SERVICE', time: '9:15AM' },
    { name: '300L-500L TUESDAY SERVICE', time: '8AM' },
    { name: 'WEDNESDAY MID WEEK SERVICE', time: '5PM' },
    { name: '100L-200L THURSDAY SERVICE', time: '8AM' }
  ]

  return (
    <div className="py-8">
      <h2 className="text-center text-2xl font-semibold tracking-tighter mb-1.5">OUR SERVICE-TIMES</h2>
      <InfiniteSlider duration={55} durationOnHover={75} reverse>
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {services.map((service, index) => (
            <div key={index} className="flex-none text-center px-4">
              <div className="text-md font-medium whitespace-nowrap text-muted-foreground">
                {service.name} -{service.time}
              </div>
            </div>
          ))}
        </div>
      </InfiniteSlider>
    </div>
  )
}

