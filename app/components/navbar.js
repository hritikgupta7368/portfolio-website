"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
const Nav = () => {
  const path = usePathname()
  return (
    <div className=" w-full h-12 flex flex-row gap-2 mb-3">
        <div className=" w-[4.5%]">
          <Image src = "/navbar.png" height={100} width={100} alt="l" className="rounded-full h-full w-full"/>
        </div>
        <nav className="card m-0 px-6 py-0 flex flex-row justify-around items-center ">
            <Link href="/about" className={`${path === "/" ? "active" : "noactive"}`}>ABOUT</Link>
            <Link href="/portfolio" className={`${path === "/portfolio" ? "active" : "noactive"}`}>PORTFOLIO</Link>
            <Link href="/contact" className={`${path === "/contact" ? "active" : "noactive"}`}>CONTACT</Link>
        </nav>
    </div>
  )
}

export default Nav
