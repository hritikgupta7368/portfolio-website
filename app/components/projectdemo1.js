import CardSlider from "./slider";

const ProjectDemoCard1 = () => {
 
  const projects = [
    {
      label : "twitterclone1",
      src : "/1.png"
    },
    {
      label : "twitterclone2",
      src : "/1.png"
    },
    {
      label : "twitterclone3",
      src : "/1.png"
    },
  ]
  
  
  
   
   
  


  return (
    <div className="w-full">
     <div className="card flex flex-row justify-center items-center">
      Product Design
     </div>
     <div className="card ">
      <header className="flex flex-row justify-between">
        <div>
          <h1 className="heading">Project name</h1>
          <p>subheading</p>
        </div>
        <div className="bg-[#e53e25] h-[10%]">b</div>
      </header>
     <CardSlider />
    
    </div>
    </div>
  )
}

export default ProjectDemoCard1
