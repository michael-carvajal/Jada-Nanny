import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Context from './components/Context/context'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Context>
    <html lang="en">
      <body className={`${inter.className} antialiased container-full mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
    </Context>
  )
}
