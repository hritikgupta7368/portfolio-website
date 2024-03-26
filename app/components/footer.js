import Link from "next/link"

const Footer = () => {
  return (
    <div className="card bg-gradient-to-tr  from-[#e53e25]  via-[#1b1b1b] to-[#1b1b1b] flex flex-row justify-between items-center">
      <p>Portfolio 2024</p>
      <nav >
        <Link href = "">LinkedIn</Link>
        <Link href = "">Twitter</Link>
      </nav>
      <p className="text-xs flex flex-row items-center"><span className="bg-[#e54526] animate-ping  w-[6px] h-[6px] rounded-full inline-block mr-2" />AVAILABLE FOR JOB</p>
    </div>
  )
}

export default Footer
