import { Montserrat, Outfit, Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${montserrat.variable} ${outfit.variable} ${inter.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
