'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

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
        <span className="text-xs">GILGAL HOUSE MEDIA</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs">{currentTime}</span>
        <Button variant="outline" size="sm" className="text-xs">
          WATCH LIVESTREAM
        </Button>
      </div>
    </header>
  )
}

