import NumberAnimation from "@/components/number-animation"


export function Stats() {
  const stats = [
    { value: '180+', label: 'MEMBERS' },
    { value: '4+', label: 'SUB UNITS' },
    { value: '8000+', label: 'SERVICES HELD' },
    { value: '10+', label: 'CONCERTS HELD' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center text-5xl font-bold md:text-5xl font-grotesk ">
          {/* <div className="text-6xl font-bold md:text-5xl mb-2 font-grotesk">{stat.value}</div> */}
          <NumberAnimation defaultNum={parseInt(stat.value.slice(0, -1))} />+
          <div className="text-xl font-thin text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

