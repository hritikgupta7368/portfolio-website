"use client"
import { useState ,useEffect} from "react"

const RecentProjects = () => {
  const [repo , setRepo] = useState([])

useEffect(() => {
  async function fetchrepo(){
    try{
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRepo(data.data)
    }
    catch(error){
      console.log(error)
    }
  }
  fetchrepo();
},[])
  return (
    <div className="card">
     <p className="mb-10 flex flex-row items-center"><span className="bg-white/75 w-[6px] h-[6px] rounded-full inline-block mr-2 animate-ping" />Recent Projects</p>
      <div className="w-full">
        {
          repo?.map((project,index) => {
            return (
              <div key = {index} className="group mb-3 ">
                <p className="text-lg group-hover:text-[#e53e25] duration-200 cursor-pointer">{project?.name}</p>
                <p className="text-sm"></p>
              </div>
            )
           
          })
        }
        {
          repo === null || repo.length === 0 && <div className="text-red-500">error loading</div>
        }
      </div>
    </div>
  )
}

export default RecentProjects
