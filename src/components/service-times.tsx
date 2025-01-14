export function ServiceTimes() {
  const services = [
    { name: 'SUNDAY FIRST SERVICE', time: '7AM' },
    { name: 'SUNDAY SECOND SERVICE', time: '9:15AM' },
    { name: '300L-500L TUESDAY SERVICE', time: '8AM' },
    { name: 'WEDNESDAY MID WEEK SERVICE', time: '5PM' },
    { name: '100L-200L THURSDAY SERVICE', time: '8AM' }
  ]

  return (
    <div className="py-8 px-4">
      <h2 className="text-center text-2xl mb-6">OUR SERVICE-TIMES</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {services.map((service, index) => (
          <div key={index} className="flex-none text-center px-4">
            <div className="text-xs whitespace-nowrap">
              {service.name}
              <br />
              {service.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

