import './globals.css'
import Nav from './components/navbar'
import Footer from './components/footer'
import Effect from './provider/effect'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-black py-10 px-16'>
        <Effect>
        <Nav />
        {children}
        <Footer />
        </Effect>
      </body>
    </html>
  )
}
