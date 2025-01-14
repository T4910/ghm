export function Stats() {
  const stats = [
    { value: '180+', label: 'MEMBERS' },
    { value: '4+', label: 'SUB UNITS' },
    { value: '8K+', label: 'SERVICES HELD' },
    { value: '10+', label: 'CONCERTS HELD' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

