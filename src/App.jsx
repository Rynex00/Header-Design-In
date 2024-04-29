import { useEffect, useState } from "react";
import Background from './Component/Background/Background';
import Navber from './Component/Navber/Navber';
import Hero from "./Component/Hero/Hero";



const App = () => {

  let heroData = [
    {text1:"Dive Into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{ return count === 2?0:count+1})
    },3000);
  },[])

  return (
    <div>
      <Navber/>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
       setPlayStatus={setPlayStatus} 
       heroData={heroData[heroCount]}
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
       />
    </div>
  )
}

export default App
