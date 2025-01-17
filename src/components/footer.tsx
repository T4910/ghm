import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <Link href="https://www.instagram.com/gilgalhousemedia/" className="text-sm hover:text-blue-500">
              INSTAGRAM ↗
            </Link>
            <Link href="mailto:ghm.lmu.edu.ng" className="text-sm hover:text-blue-500">
              EMAIL ↗
            </Link>
            <Link href="https://www.youtube.com/@Landmarkuniversitychapel" className="text-sm hover:text-blue-500">
              YOUTUBE ↗
            </Link>
          </div>
          <div className="text-sm">
            ©2025 GHM (DESIGNED BY MAMAZA but Emma suffer sha...)
          </div>
          <Link href="#" className="text-sm hover:text-blue-500">
            GO BACK
          </Link>
        </div>
      </div>
    </footer>
  )
}

