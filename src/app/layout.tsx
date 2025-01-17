import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Tiny5 } from 'next/font/google'
import './globals.css'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

const tiny = Tiny5({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tiny5'
})

const robotoMono = Roboto_Mono({
  // weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono'
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
      <body className={`${tiny.variable} ${inter.variable} ${robotoMono.variable} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

