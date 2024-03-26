"use client"
import { useState ,useEffect} from "react";
import "./globals.css"
import Image from "next/image";

const CardSlider = () => {
    const [repo , setRepo] = useState([])
    const [index, setIndex] =useState(0)

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
   
    useEffect(() => {
     
            let sliderInterval = setInterval(() => {
                setIndex((prevIndex) =>
                    prevIndex === cards.length - 1 ? 0 : prevIndex + 1
                );
            }, 2500);
        
        return () => clearInterval(sliderInterval);
    }, [index]);

    return (
        <div className="slideshow">
          <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {repo?.map((project, index) => (
              <div className="w-full relative" key={index} >
               <Image src = "/1.png" height = {100} width = {100} alt="projectimage" />
                <div className="absolute text-white">
                    <p>{project?.name}</p>
                </div>
             </div>
            ))}
          </div>
    </div>
    )
}

export default CardSlider
