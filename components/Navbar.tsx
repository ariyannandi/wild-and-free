import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/logo.png"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                className="object-contain"
                alt="Wild and Free NGO geometric logo"
                src={logo}
                fill
              />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">Wild &amp; Free</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/adopt">Adopt</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/rescues">Rescues</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/success-stories">Success Stories</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/blog">Blog</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/volunteer">Volunteer</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/donate" className="bg-primary text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform inline-block">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
