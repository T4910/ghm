import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
})

export const metadata: Metadata = {
  title: 'Gilgal House Media',
  description: 'Channel for Gods Power!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${pressStart2P.variable} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

