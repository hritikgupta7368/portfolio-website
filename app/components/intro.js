import Image from "next/image"

const IntroCard = () => {
  return (
    <div className="card ">
     <div className="flex flex-row justify-between mb-2">
        <p>Full Stack Developer</p>
        <p className="text-xs flex flex-row items-center"><span className="bg-[#e54526] w-[6px] h-[6px] rounded-full inline-block mr-1" />AVAILABLE FOR JOB</p>
     </div>
     <div className="flex flex-row justify-between">
        <div className="max-w-[200px] ">
          <p className="heading text-lg">I'm Hritik Gupta</p>
          <p className="text-md text-wrap">I am full stack engineer project with great experience</p>
          <div>

          </div>
        </div>
       
        <div className="overflow-hidden h-[180px] w-[180px] rounded-full relative">
         <Image src = "/profile_photo.jpg" height={180} width={180} alt="project" />
        </div>
     </div>
    </div>
  )
}

export default IntroCard
