import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
        {/* <Avatar>
          <AvatarImage src="/profile_photo.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <div className="overflow-hidden h-[180px] w-[180px] rounded-full relative">
         <img src = "profile_photo.jpg" className="object-cover"/>
        </div>
     </div>
    </div>
  )
}

export default IntroCard
