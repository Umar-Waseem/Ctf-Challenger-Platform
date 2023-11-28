import { Inter } from 'next/font/google'
import './globals.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CTF Challenger',
  description: 'Get hands on practice on Capturing Your Flags!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  )
}
