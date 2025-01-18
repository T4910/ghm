'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Header() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-800">
      <div className="flex items-center gap-2">
        <span className="text-xl  font-thin">GILGAL HOUSE MEDIA</span>
        <span>-</span>
        <Image src="/ghm_pic.webp" alt='GHM' width={40} height={40} />
      </div>
      {/* <div className="flex items-center gap-4"> */}
        <span className="text-xs max-md:hidden">{currentTime}</span>
        <Button variant="sci" size="sm" className="text-xs max-md:hidden bg-white text-black px-16 py-0.5">
          WATCH LIVESTREAM
        </Button>
      {/* </div> */}
    </header>
  )
}

