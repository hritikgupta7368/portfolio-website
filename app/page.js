import IntroCard from "./components/intro"
import RecentProjects from "./components/recentprojects"
import ProjectDemoCard1 from "./components/projectdemo1"


const page = () => {
  return (
    <main>
      <IntroCard />
      <div className="flex flex-row gap-2">
      <RecentProjects />
      <ProjectDemoCard1 />
      </div>
    </main>
  )
}

export default page
