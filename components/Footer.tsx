import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/logo.png"
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10">
                <Image
                  className="object-contain"
                  alt="Wild and Free NGO logo"
                  src={logo}
                  fill
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic text-primary">Wild &amp; Free</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Registered NGO #123-456. Dedicated to the protection and well-being of all animals since 2019.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-bold text-primary mb-6 uppercase text-xs tracking-widest">Navigation</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/process">Our Process</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/policy">Adoption Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/donate">Donate Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-primary mb-6 uppercase text-xs tracking-widest">Connect</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="hover:text-primary transition-colors"> info@wildandfree.org</span>

              </li>
              <li className="flex items-center gap-2">
                <span className="hover:text-primary transition-colors">  +1 (555) 123-4567</span>

              </li>
              <li className="flex items-center gap-2">
                <span className="hover:text-primary transition-colors"> 123 Rescue Way, CA 90210</span>

              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-bold text-primary mb-6 uppercase text-xs tracking-widest">Follow Us</h5>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]"><Instagram /></span>
              </a>
              <a className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]"><Facebook /></span>
              </a>
              <a className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]"><Youtube /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2019 Wild and Free NGO. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
