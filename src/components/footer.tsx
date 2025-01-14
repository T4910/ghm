import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            ©2024 DESIGNED BY MAMAZA
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm hover:text-blue-500">
              INSTAGRAM ↗
            </Link>
            <Link href="#" className="text-sm hover:text-blue-500">
              EMAIL ↗
            </Link>
            <Link href="#" className="text-sm hover:text-blue-500">
              YOUTUBE ↗
            </Link>
          </div>
          <Link href="#" className="text-sm hover:text-blue-500">
            GO BACK
          </Link>
        </div>
      </div>
    </footer>
  )
}

