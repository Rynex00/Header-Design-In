import React from 'react'
import Arrow from '../../assets/arrow_btn.png'
import Play_icon from '../../assets/play_icon.png'
import Pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='container mx-auto font-poppins'>
      <div className='text-white font-semibold leading-[130px] text-8xl mt-[270px]'>
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
      </div>
      <div className='flex items-center gap-12 text-2xl border bg-white w-fit rounded-full px-5 py-1 mt-[70px] cursor-pointer'>
        <p>Explore the Features</p>
        
        <div className=''>
          <a href="#"><img src={Arrow} alt="" /></a>
          </div>
      </div>

      <div className='flex mt-10  items-center justify-between list-none'>
        <ul className='flex gap-5'>
          <li onClick={()=> setHeroCount(0)} className={heroCount === 0? " w-2 h-2 bg-orange-600 rounded-full cursor-pointer":" w-2 h-2 bg-white rounded-full cursor-pointer"}></li>
          <li onClick={()=> setHeroCount(1)} className={heroCount === 1?" w-2 h-2 bg-orange-600 rounded-full cursor-pointer":" w-2 h-2 bg-white rounded-full cursor-pointer"}></li>
          <li onClick={()=> setHeroCount(2)} className={heroCount === 2?" w-2 h-2 bg-orange-600 rounded-full cursor-pointer":" w-2 h-2 bg-white rounded-full cursor-pointer"}></li>
        </ul>

        <div className='flex  items-center gap-4 text-2xl text-white'>
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?Pause_icon:Play_icon} alt="" />
          <p>See The video</p>
        </div>
      </div>
      

    </div>
  )
}

export default Hero